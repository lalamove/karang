import React, { Component } from 'react';
import { bool, string, shape, arrayOf, func, object } from 'prop-types';

import { SCTable, Row, ColTitle } from './style';

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
        /** [required] value of this key `props.data[key]` will be rendered into `<td/>` */
        key: string,
        /** [required] for display as column title */
        label: string,
        /**
         * [optional] column render function, if not provide
         * will simply render the value of that key
         *
         * @param {any} columnData value of `props.data[i][key]`
         * @param {object} allColumns `props.data[i]`
         * @param {array} allRows `props.data`
         */
        render: func,
        /**
         * [optional] table become sortable when provided
         * you still have to take care of the sorting
         * and updating of `props.data`
         *
         * @param {string} column key
         * @param {string} sorting order, one of: `default`, `desc`, `asc`
         * @returns {func} [optional] this function will be use as the sorting function (frontend only)
         */
        onSort: func,
      })
    ).isRequired,
    /** table data */
    data: arrayOf(object).isRequired,
    /** the unique property (usually id) of individual object in `props.data` */
    uniqueKey: string,
  };

  state = { sortBy: null, orderBy: 0 };

  sortOrders = ['default', 'desc', 'asc'];
  sortMemo = {};
  sortFunc = null;

  handleSort = (colKey, handler) => {
    if (!handler) return null;
    if (this.sortMemo[colKey] === undefined) {
      this.sortMemo[colKey] = 0;
    }
    return () => {
      // next sort order, overflow will wrap back to default
      const nextSortOrder = this.sortOrders[this.sortMemo[colKey] + 1]
        ? this.sortMemo[colKey] + 1
        : 0;
      this.setState({ sortBy: colKey, orderBy: nextSortOrder }, () => {
        this.sortMemo = { [colKey]: this.state.orderBy }; // reset other keys
        this.sortFunc = handler.apply(null, [
          this.state.sortBy,
          this.sortOrders[this.state.orderBy],
        ]);
        // force update to have the sortFunc applied
        this.forceUpdate();
      });
    };
  };

  renderRowCols(cols = {}) {
    const { columns } = this.props;
    return columns.map(({ key, render }) => {
      const hasRenderFunc = typeof render === 'function';
      const colData = cols[key];

      return (
        <td key={`llm-table-td-${key}`}>
          {hasRenderFunc ? render(colData, cols, this.props.data) : colData}
        </td>
      );
    });
    //     return Object.keys(cols)
    //       .filter(includeIn(columns))
    //       .sort(byColumnsOrder(columns))
    //       .map(col => {
    //         const { render } = findColumn(col, columns);
    //         const hasRenderFunc = typeof render === 'function';
    //         const colData = cols[col];
    //
    //         return (
    //           <td key={`llm-table-td-${col}`}>
    //             {hasRenderFunc ? render(colData, cols) : colData}
    //           </td>
    //         );
    //       });
  }

  renderRows(rows) {
    const { uniqueKey, hoverable } = this.props;
    let daRows = rows;
    if (this.sortFunc) {
      daRows = [...rows].sort(this.sortFunc);
      console.log('daRows', daRows);
    }
    return daRows.map((row, index) => (
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
            {columns.map(({ label, key, onSort }) => (
              <th key={`llm-table-th-${key}`}>
                <ColTitle
                  sorted={
                    this.state.sortBy === key
                      ? this.sortOrders[this.state.orderBy]
                      : this.sortOrders[0]
                  }
                  onClick={this.handleSort(key, onSort)}
                >
                  {label}
                </ColTitle>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{this.renderRows(data)}</tbody>
      </SCTable>
    );
  }
}

export default Table;
