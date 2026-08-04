A compact icon control. Used for top-bar utilities ("Reset demo", theme toggle) and the sidekick collapse chevron.

```jsx
<IconButton label="Dark" ariaLabel="Toggle theme"><MoonIcon/></IconButton>
<IconButton variant="ghost" ariaLabel="Collapse panel"><ChevronsRight/></IconButton>
```

`variant`: `bordered` (default, white + border) | `ghost` | `soft`. Pass a `label` to show text beside the glyph. Provide `ariaLabel` for icon-only usage.
