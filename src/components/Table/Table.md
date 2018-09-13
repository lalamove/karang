#### Usage:

```js static
import { Table } from 'lalamove-ui';

// <Table columns={[object]} data={[object]}>
```

**Basic**
```js
<Table
  columns={[
    {
      key: 'title',
      label: 'Title',
    },
    {
      key: 'rating',
      label: 'How good',
    },
    {
      key: 'year',
      label: 'Year',
    },
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

**Sortable Columns**

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
    {
      id: 24523,
      name: 'Wong',
      age: 43,
      job: 'Business man',
      hobbies: '購買',
      income: 40000,
    },
    {
      id: 47657,
      name: 'Smith',
      age: 35,
      job: 'Janitor',
      hobbies: '吃',
      income: 20000,
    },
    {
      id: 5675,
      name: 'Trump',
      age: 72,
      job: 'PUTUS',
      hobbies: '坐',
      income: 1,
    },
    {
      id: 123,
      name: 'Chan',
      age: 54,
      job: 'CEO',
      hobbies: '籃球',
      income: 30000,
    },
    {
      id: 352,
      name: 'Mannings',
      age: 31,
      job: 'Carpenter',
      hobbies: '足球',
      income: 80000,
    },
    {
      id: 312,
      name: 'Chow',
      age: 12,
      job: 'Hobo',
      hobbies: '曲棍球',
      income: 0,
    },
  ]}
/>
```

**Derived column**

Deriving data from other columns. "Handsome-ness" does not have a corresponding data property. But you can create new column and fill cells with anything. In this example, "Handsome-ness" as we all know is calculated based on `income` and `age` property of each individual record.

```js
<Table
  columns={[
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Years on Earth',
    },
    {
      key: 'income',
      label: '💵 Money',
    },
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
    {
      id: 24523,
      name: 'Wong',
      age: 43,
      job: 'Business man',
      hobbies: '購買',
      income: 40000,
    },
    {
      id: 47657,
      name: 'Smith',
      age: 35,
      job: 'Janitor',
      hobbies: '吃',
      income: 20000,
    },
    {
      id: 5675,
      name: 'Trump',
      age: 72,
      job: 'PUTUS',
      hobbies: '坐',
      income: 1,
    },
    {
      id: 123,
      name: 'Chan',
      age: 54,
      job: 'CEO',
      hobbies: '籃球',
      income: 30000,
    },
    {
      id: 352,
      name: 'Mannings',
      age: 31,
      job: 'Carpenter',
      hobbies: '足球',
      income: 80000,
    },
    {
      id: 312,
      name: 'Chow',
      age: 12,
      job: 'Hobo',
      hobbies: '曲棍球',
      income: 0,
    },
  ]}
/>
```
