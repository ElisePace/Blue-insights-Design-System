import React from 'react';

/**
 * Card — the base surface container. Soft surface fill, 1px border, 12px radius.
 * Optional header row. Use `padding="none"` when embedding tables/panels.
 */
export function Card({
  title = null,
  headerRight = null,
  padding = 'md',
  surface = 'surface-1',
  children,
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: 'var(--space-3)', md: 'var(--space-4)', lg: 'var(--space-5)' };
  const surfaces = {
    'surface-1': 'var(--color-surface-1)',
    canvas: 'var(--color-canvas)',
    'surface-2': 'var(--color-surface-2)',
  };
  return (
    <div
      style={{
        background: surfaces[surface] || surfaces['surface-1'],
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {title != null || headerRight != null ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 15px',
            background: 'var(--color-surface-2)',
            borderBottom: '1px solid var(--color-border)',
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)',
          }}
        >
          <span>{title}</span>
          {headerRight}
        </div>
      ) : null}
      <div style={{ padding: pads[padding] }}>{children}</div>
    </div>
  );
}
