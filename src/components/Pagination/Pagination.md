#### Usage:

```js static
import { Pagination } from '@lalamove/karang';
```

```js
initialState = { current: 1, pageSize: 20, total: 36 };
<Pagination 
   current={state.current}
   pageSize={state.pageSize} 
   total={state.total} 
   onChange={(nextPage, pageSize) => setState({ current: nextPage })}
/>
```
