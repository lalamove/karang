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
    { key: 'rating', label: 'How good' },
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

    }
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
      render: val => <Rating value={val} />
    },
    { key: 'y', label: 'Year' },
  ]}
  data={[
    { id: 'breaking-bad', t: 'Breaking Bad', r: 5, y: '2008' },
    { id: 'better-call-saul', t: 'Better Call Saul', r: 5, y: '2016' },
    { id: 'the-office', t: 'The Office', r: 3, y: '2004' }
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
      // colKey == hobbies
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
