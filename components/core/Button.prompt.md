Blue Insights' primary action control — use `primary` for the single dominant action per view and keep everything else `ghost`/`secondary` so the data leads.

```jsx
<Button variant="primary" size="md" onClick={run}>Run analysis</Button>
<Button variant="secondary" leadingIcon={<ShareIcon/>}>Share / export</Button>
<Button variant="ghost">Cancel</Button>
```

Variants: `primary` (Neural Blue), `secondary` (bordered white), `ghost` (text-only), `outlinePrimary` (blue outline, e.g. "Request access"), `danger`. Sizes `sm` | `md` | `lg`. Accepts `leadingIcon` / `trailingIcon` nodes, `fullWidth`, `disabled`.
