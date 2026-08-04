Centered dialog on a dimmed backdrop, e.g. the "Review before sharing" confirmation. Backdrop click and × both fire `onClose`.

```jsx
<Modal title="Review before sharing" subtitle="Nothing is exported until you confirm."
  onClose={close}
  footer={<><Button variant="ghost">Cancel</Button><Button>Copy / share</Button></>}>
  …body…
</Modal>
```
