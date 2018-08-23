```jsx
const items = [
  {
    id: 'aaa',
    name: 'Silom Complex',
    address: 'Si Lom Bang Rak Bangkok Thailand',
    contact: 'Kevin 0938278268',
  },
  {
    id: 'bbb',
    name: 'Times Square',
    address: 'Matheson Street, Causeway Bay, Hong Kong',
    contact: 'Kevin 0938278268',
  },
  {
    id: 'ccc',
    name: 'LANE CRAWFORD TIMES SQUARE',
    address: 'Causeway Bay, Hong Kong',
    contact: 'Kevin 0938278268',
  },
];

<List
  hoverable
  unique="id"
  items={items}
  render={({ data: { name, address, contact }, Item, getProps }) => (
    <Item {...getProps()}>
      <div>
        {name} <span className="light-silver">{address}</span>
      </div>
      <span className="f6 moon-gray">{contact}</span>
    </Item>
  )}
/>
```
