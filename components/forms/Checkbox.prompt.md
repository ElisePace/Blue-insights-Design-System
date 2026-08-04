Square checkbox with label. Use `boxed` for the framed confirmation row in the share-review flow.

```jsx
<Checkbox checked={ok} onChange={e=>setOk(e.target.checked)}
  boxed label="I've reviewed this and the figures are OK to share" />
```
