#### Usage:

```js static
import { Table } from 'lalamove-ui';

// <Table columns={[object]} data={[object]}>
```

**Basic**

```js
<Table
  columns={[
    { key: 'title', label: 'Title' },
    { key: 'rating', label: 'How good', align: 'center' },
    { key: 'year', label: 'Year' },
  ]}
  data={[
    {
      id: 'breaking-bad',
      title: 'Breaking Bad',
      rating: 5,
      year: '2008',
    },
    {
      id: 'better-call-saul',
      title: 'Better Call Saul',
      rating: 5,
      year: '2016',
    },
    {
      id: 'the-office',
      title: 'The Office',
      rating: 3,
      year: '2004',
    },
  ]}
/>
```

**Render function**

Use `render` function to customize how you wish to render the table cell.
Here the rating value is rendered as a `<Rating />` component.

```js static
columns={[
  { key: 'title', label: 'Title' },
  {
    key: 'rating',
    label: 'How good',
    render: val => <Rating value={val} />
  },
  { key: 'year', label: 'Year' },
]}
```

```js
<Table
  columns={[
    { key: 't', label: 'Title' },
    {
      key: 'r',
      label: 'How good',
      render: val => <Rating value={val} />,
    },
    { key: 'y', label: 'Year' },
  ]}
  data={[
    { id: 'breaking-bad', t: 'Breaking Bad', r: 5, y: '2008' },
    { id: 'better-call-saul', t: 'Better Call Saul', r: 5, y: '2016' },
    { id: 'the-office', t: 'The Office', r: 3, y: '2004' },
  ]}
/>
```

**Sortable columns**

_Supports frontend and api sorting_

Table data is sortable by column. You can choose to have it sorted purely presentationally, or sort `props.data` yourself when `onSort` function is triggered.

```js
<Table
  hoverable
  columns={[
    {
      key: 'name',
      label: 'Name',
      onSort: (key, order) => (a, b) => {
        switch (order) {
          case 'desc':
            return b[key].localeCompare(a[key]);
          case 'asc':
            return a[key].localeCompare(b[key]);
          default:
            return 0;
        }
      },
    },
    {
      key: 'age',
      label: 'Years on Earth',
      align: 'center',
      onSort: (key, order) => {
        return (a, b) => {
          switch (order) {
            case 'desc':
              return b[key] - a[key];
            case 'asc':
              return a[key] - b[key];
            default:
              return 0;
          }
        };
      },
    },
    {
      key: 'job',
      label: 'Occupation (sort yourself, see console)',
      // colKey == job
      // order == one of 'default', 'desc', 'asc'
      onSort: (colKey, order) => {
        /* May trigger api with sorting data here */
        console.log(colKey, order);
      },
    },
    {
      key: 'hobbies',
      label: 'Fun',
      onSort: (key, order) => (a, b) => {
        switch (order) {
          case 'desc':
            return b[key].localeCompare(a[key]);
          case 'asc':
            return a[key].localeCompare(b[key]);
          default:
            return 0;
        }
      },
    },
  ]}
  data={[
    { id: 24523, name: 'Wong', age: 43, job: 'Business man', hobbies: '購買' },
    { id: 47657, name: 'Smith', age: 35, job: 'Janitor', hobbies: '吃' },
    { id: 5675, name: 'Trump', age: 72, job: 'PUTUS', hobbies: '坐' },
    { id: 123, name: 'Chan', age: 54, job: 'CEO', hobbies: '籃球' },
    { id: 352, name: 'Mannings', age: 31, job: 'Carpenter', hobbies: '足球' },
    { id: 312, name: 'Chow', age: 12, job: 'Hobo', hobbies: '曲棍球' },
  ]}
/>
```

**Derived column**

_Derived data from other columns, and put it in it's own column_

We can create new column and fill column cells with anything. This is how the table will normally render the following data.

```js static
const data = [
  { id: 24523, name: 'Wong', age: 43, income: 40000 },
  { id: 47657, name: 'Smith', age: 35, income: 20000 },
  { id: 5675, name: 'Trump', age: 72, income: 1 },
  { id: 123, name: 'Chan', age: 54, income: 30000 },
  { id: 352, name: 'Mannings', age: 31, income: 80000 },
  { id: 312, name: 'Chow', age: 12, income: 0 },
];
```

```js
<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Years on Earth' },
    { key: 'income', label: '💵 Money' },
  ]}
  data={[
    { id: 24523, name: 'Wong', age: 43, income: 40000 },
    { id: 47657, name: 'Smith', age: 35, income: 20000 },
    { id: 5675, name: 'Trump', age: 72, income: 1 },
    { id: 123, name: 'Chan', age: 54, income: 30000 },
    { id: 352, name: 'Mannings', age: 31, income: 80000 },
    { id: 312, name: 'Chow', age: 12, income: 0 },
  ]}
/>
```

We can derive data from other columns. As we all know handsome-ness is based on an individual's income and age. We can create a new column named 'Handsome-ness'.

Notice it does not have a corresponding data property, by using the `render` function, we can conjure up our own data based on `income` and `age` property of each individual record comparing to the average.

```js static
columns={[
  ...,
  {
    key: 'rating',
    label: 'Handsome-ness',
    render(_, dude, dudes) {
      const maxAge = Math.max(...dudes.map(({ age }) => age));
      const maxIncome = Math.max(...dudes.map(({ income }) => income));
      const ageRate = 6 - Math.round((dude.age / maxAge) * 5);
      const incomeRate = Math.round((dude.income / maxIncome) * 5);
      const handsomeNess = Math.round((ageRate + incomeRate) / 2) || 1;
      return <Rating value={handsomeNess} />;
    },
  },
]}
```

```js
<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Years on Earth' },
    { key: 'income', label: '💵 Money' },
    {
      key: 'rating',
      label: 'Handsome-ness',
      render(_, dude, dudes) {
        const maxAge = Math.max(...dudes.map(({ age }) => age));
        const maxIncome = Math.max(...dudes.map(({ income }) => income));
        const ageRate = 6 - Math.round((dude.age / maxAge) * 5);
        const incomeRate = Math.round((dude.income / maxIncome) * 5);
        const rate = Math.round((ageRate + incomeRate) / 2);
        return <Rating value={rate || 1} />;
      },
    },
  ]}
  data={[
    { id: 24523, name: 'Wong', age: 43, income: 40000 },
    { id: 47657, name: 'Smith', age: 35, income: 20000 },
    { id: 5675, name: 'Trump', age: 72, income: 1 },
    { id: 123, name: 'Chan', age: 54, income: 30000 },
    { id: 352, name: 'Mannings', age: 31, income: 80000 },
    { id: 312, name: 'Chow', age: 12, income: 0 },
  ]}
/>
```

**Usage with `<Pagination/>`**

_more details coming soon_

**Advance usage**

```js
const Pagination = require('components/Pagination').default;
const url = 'https://api.hkma.gov.hk/public/coin-cart-schedule';

const encodeQueryData = data => {
  const ret = Object.entries(data).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  );
  return ret.join('&');
};

class TableExample extends React.Component {
  constructor() {
    super();
    this.state = {
      pagesize: 5,
      current: 1,
      sortby: null,
      sortorder: 'default',
      data: [],
      fetching: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() { this.fetchData() }

  fetchData() {
    this.setState({ fetching: true });
    const { pagesize, current, sortby, sortorder } = this.state;
    console.log('in fetch', sortby, sortorder);
    const offset = (current - 1) * 5;
    fetch(
      `${url}?lang=en&${encodeQueryData({
        ...(sortorder !== 'default'
          ? {
              sortby,
              sortorder,
            }
          : {}),
        offset,
        pagesize,
      })}`
    )
      .then(resp => resp.json())
      .then(({ result: records }) =>
        this.setState({ data: records.records, fetching: false })
      );
  }

  render() {
    return (
      <div>
        <Button isLoading={this.state.fetching} onClick={this.fetchData}>
          Fetch data
        </Button>

        <Table
          hoverable
          columns={[
            { key: 'district', label: 'Address' },
            {
              key: 'cart_no',
              label: 'Carts (sort in frontend only)',
              onSort: (key, order) => (a, b) => {
                switch (order) {
                  case 'desc':
                    return b[key] - a[key];
                  case 'asc':
                    return a[key] - b[key];
                  default:
                    return 0;
                }
              },
            },
            {
              key: 'start_date',
              label: 'Start date (sort by api, see console)',
              onSort: (key, order) => {
                console.log(key, order);
                this.setState({ sortby: key, sortorder: order }, this.fetchData);
              },
            },
            { key: 'remarks', label: 'What', render(data) {
              return <ul>{data.split(';').map(str => <li>{str}</li>)}</ul>
            } },
          ]}
          data={this.state.data}
        />
        <Pagination
          onChange={nextPage => this.setState({ current: nextPage }, this.fetchData)}
          current={this.state.current}
          loading={this.state.fetching}
          pageSize={this.state.pagesize}
          description="{{fromIndex}}-{{toIndex}}"
          total={1000}
        />
      </div>
    );
  }
}
<TableExample />;
```
