Metric tile: muted label, large tabular value, optional coloured delta line.

```jsx
<KpiCard label="Records analysed" value="48,210" delta="▲ 12.4% vs last run" deltaTone="positive" />
<KpiCard label="QoQ growth" value="−12.0%" deltaTone="negative" />
```

`deltaTone`: `positive` (green) | `negative` (red) | `warning` (amber) | `neutral`. Values always render with tabular numerals so KPI rows align.
