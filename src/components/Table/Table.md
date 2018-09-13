```js
<Table
  hoverable
  columns={[
    {
      key: 'name',
      label: 'Name',
      onSort: (key, order) => {
        return (a, b) => {
          switch (order) {
            case 'desc':
              return b[key].localeCompare(a[key]);
            case 'asc':
              return a[key].localeCompare(b[key]);
            default:
              return 0;
          }
        };
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
      label: 'Occupation',
    },
    {
      key: 'hobbies',
      label: 'Fun (sort yourself)',
      onSort: () => {},
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
