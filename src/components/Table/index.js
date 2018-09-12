import React, { Component } from 'react';
import { bool, string, shape, arrayOf, func, object } from 'prop-types';

import { SCTable, Row } from './style';

function findColumn(key, listOfcols) {
  return listOfcols.reduce((found, col) => {
    if (found === null && col.key === key) {
      return col;
    }
    return found;
  }, null);
}

const includeIn = columns => colKey => !!findColumn(colKey, columns);

const byColumnsOrder = columns => (a, b) => {
  const aIndex = columns.findIndex(({ key }) => key === a);
  const bIndex = columns.findIndex(({ key }) => key === b);
  return aIndex - bIndex;
};

class Table extends Component {
  static defaultProps = {
    hoverable: false,
    uniqueKey: 'id',
  };

  static propTypes = {
    /** enable hover style for row */
    hoverable: bool,
    /** columns controls */
    columns: arrayOf(
      shape({
        /** value of this key `props.data[key]` will be rendered into `<td/>` */
        key: string,
        /** for display as column title */
        label: string,
        /**
         * colum render function, if not provide
         * will simply render the value of that key
         *
         * @param {any} columnData value of `props.data[key]`
         * @param {object} allColumns `props.data`
         */
        render: func,
      })
    ).isRequired,
    /** table data */
    data: arrayOf(object).isRequired,
    /** the unique property (usually id) of individual object in `props.data` */
    uniqueKey: string,
  };

  renderRowCols(cols = {}) {
    const { columns } = this.props;
    return Object.keys(cols)
      .filter(includeIn(columns))
      .sort(byColumnsOrder(columns))
      .map(col => {
        const { render } = findColumn(col, columns);
        const hasRenderFunc = typeof render === 'function';
        const colData = cols[col];

        return (
          <td key={`llm-table-td-${col}`}>
            {hasRenderFunc ? render(colData, cols) : colData}
          </td>
        );
      });
  }

  renderRows(rows) {
    const { uniqueKey, hoverable } = this.props;
    return rows.map((row, index) => (
      <Row
        key={row[uniqueKey] || `llm-table-row-${index}`}
        hoverable={hoverable}
      >
        {this.renderRowCols(row)}
      </Row>
    ));
  }

  render() {
    // extract our own props so it doesn't pollute
    const { uniqueKey, data, columns, hoverable, ...remainProps } = this.props;

    return (
      <SCTable {...remainProps}>
        <thead>
          <tr>
            {columns.map(({ label, key }) => (
              <th key={`llm-table-th-${key}`}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>{this.renderRows(data)}</tbody>
      </SCTable>
    );
  }
}

export default Table;
