Blue Insights' signature interpretability block. A colour-dot header (EVIDENCE / ASSUMPTION / UNKNOWN) that expands to show the finding body. Every AI answer is decomposed into these so the user can defend it.

```jsx
<FindingSection tone="evidence" label="Evidence" meta="3 facts" open onToggle={toggle}>
  <p>EMEA enterprise renewals fell <b>28%</b> vs prior quarter <RefBadge n={1}/></p>
</FindingSection>
<FindingSection tone="assumption" label="Assumption" meta="" open={false} onToggle={toggle}>…</FindingSection>
```

`tone`: `evidence` (blue), `assumption` (amber), `unknown` (gray). Controlled via `open`/`onToggle`.
