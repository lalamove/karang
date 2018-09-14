import React, { Component } from 'react';
import { bool, string, shape, arrayOf, func, object, oneOf } from 'prop-types';

import { SCTable, Row, ColTitle } from './style';

class Table extends Component {
  static defaultProps = {
    hoverable: false,
    alternate: true,
    uniqueKey: 'id',
  };

  static propTypes = {
    /** enable hover style for row */
    hoverable: bool,
    /** enable alternate style for row */
    alternate: bool,
    /** columns controls */
    columns: arrayOf(
      shape({
        /** [required] value of this key `props.data[key]` will be rendered into `<td/>` */
        key: string,
        /** [required] for display as column title */
        label: string,
        /** [optional] align column. 'left|right|center|justify'<br>
         * @see  https://www.w3schools.com/tags/att_td_align.asp
         */
        align: oneOf(['left', 'center', 'right', 'justify']),
        /**
         * [optional] column render function, if not provide
         * will simply render the value of that key<br>
         *
         * @param {any} columnData value of `props.data[i][key]`<br>
         * @param {object} allColumns `props.data[i]`<br>
         * @param {array} allRows `props.data`<br>
         */
        render: func,
        /**
         * [optional] Table become sortable when provided.<br>
         * Get called when user click on the column title,
         * you can choose to take care of the sorting yourself
         * and update `props.data`.<br>
         * Or return a sorting function that will get passed into
         * `Array.proptotype.sort()`.<br>
         * e.g. `(a, b) => b - a`<br>
         *
         * @param {string} column key<br>
         * @param {string} sorting order, one of: `default`, `desc`, `asc`<br>
         * @returns {func} [optional] this function will be use as the sorting function (frontend only)<br>
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
    return columns.map(({ key, render, align = 'left' }) => {
      const hasRenderFunc = typeof render === 'function';
      const colData = cols[key];

      return (
        <td key={`llm-table-td-${key}`} align={align}>
          {hasRenderFunc ? render(colData, cols, this.props.data) : colData}
        </td>
      );
    });
  }

  renderRows(rows) {
    const { uniqueKey, hoverable, alternate } = this.props;
    let daRows = rows;
    if (this.sortFunc) {
      daRows = [...rows].sort(this.sortFunc);
    }
    return daRows.map((row, index) => (
      <Row
        key={row[uniqueKey] || `llm-table-row-${index}`}
        hoverable={hoverable}
        alternate={alternate}
      >
        {this.renderRowCols(row)}
      </Row>
    ));
  }

  render() {
    // extract our own props so it doesn't pollute
    const {
      uniqueKey,
      data,
      columns,
      hoverable,
      alternate,
      ...remainProps
    } = this.props;

    return (
      <SCTable {...remainProps}>
        <thead>
          <tr>
            {columns.map(({ label, key, onSort, align = 'left' }) => (
              <th key={`llm-table-th-${key}`} align={align}>
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
