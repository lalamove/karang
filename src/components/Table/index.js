import React, { Component } from 'react';
import { bool, string, shape, arrayOf, func, object, oneOf } from 'prop-types';

import noop from 'utils/noop';

import { SCTable, Row, ColTitle } from './style';

class Table extends Component {
  static defaultProps = {
    hoverable: false,
    alternate: true,
    uniqueKey: 'id',
    onRowClick: noop,
  };

  static propTypes = {
    /** enable hover style for row */
    hoverable: bool,
    /** enable alternate style for row */
    alternate: bool,
    /** columns controls */
    columns: arrayOf(
      shape({
        /** value of this key `props.data[key]` will be rendered into `<td/>` */
        key: string.isRequired,
        /** for display as column title */
        label: string.isRequired,
        /** align column. `left|right|center|justify`<br>
         *  @see  https://www.w3schools.com/tags/att_td_align.asp
         */
        align: oneOf(['left', 'center', 'right', 'justify']),
        /** column render function<br>
         * if not provide will simply render the value of that key<br>
         *
         * @param {any} columnData value of `props.data[i][key]`<br>
         * @param {object} allColumns `props.data[i]`<br>
         * @param {array} allRows `props.data`<br>
         */
        render: func,
        /** `<Table/>` become sortable when provided,
         * get called when user click on the column title<br>
         * you can choose to take care of the sorting yourself
         * and update `props.data`<br>
         * optionally returns a sorting function that will get passed into
         * `Array.proptotype.sort()`.<br>
         *     e.g. `(a, b) => b - a`<br>
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
    /** get called when row is clicked
     * @param {object} data contains row data `props.data[i]`<br>
     * @param {string} key the value of the `uniqueKey` set<br>
     */
    onRowClick: func,
  };

  static sortOrders = ['default', 'desc', 'asc'];

  state = {
    sortBy: null,
    orderBy: 0,
    sortMemo: this.props.columns.reduce(
      (memo, { key }) => ({
        ...memo,
        [key]: 0,
      }),
      {}
    ),
    currentSortFunc: noop,
  };

  handleSort = (colKey, handler) => {
    if (!handler) return null;
    return () => {
      const { sortMemo, sortBy } = this.state;
      // next sort order, overflow will wrap back to default
      const nextSortOrder = Table.sortOrders[sortMemo[colKey] + 1]
        ? sortMemo[colKey] + 1
        : 0;
      this.setState({
        sortBy: colKey,
        orderBy: nextSortOrder,
        sortMemo: {
          ...sortMemo,
          [sortBy]: 0,
          [colKey]: nextSortOrder,
        },
        currentSortFunc: handler.apply(null, [
          colKey,
          Table.sortOrders[nextSortOrder],
        ]),
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
    const { uniqueKey, hoverable, alternate, onRowClick } = this.props;
    const { currentSortFunc } = this.state;
    let daRows = rows;
    if (currentSortFunc !== noop) {
      daRows = [...rows].sort(currentSortFunc);
    }
    return daRows.map((row, index) => (
      <Row
        key={row[uniqueKey] || `llm-table-row-${index}`}
        hoverable={hoverable}
        alternate={alternate}
        onClick={() => onRowClick(row, row[uniqueKey])}
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
                      ? Table.sortOrders[this.state.orderBy]
                      : Table.sortOrders[0]
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
