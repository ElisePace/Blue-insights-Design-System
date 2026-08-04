import React from 'react';

/**
 * SourceRow — a "sources in scope" list item: numbered blue square, name,
 * optional sub-label, and a trailing Preview action.
 */
export function SourceRow({
  n,
  name,
  sublabel = null,
  action = 'Preview',
  onAction,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 2px',
        fontFamily: 'var(--font-sans)',
        borderTop: '1px solid var(--color-border)',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 22,
          height: 22,
          borderRadius: 'var(--radius-sm)',
          background: 'var(--color-primary)',
          color: '#fff',
          fontSize: 11.5,
          fontWeight: 'var(--font-weight-semibold)',
          fontFeatureSettings: "'tnum' 1",
          flex: '0 0 auto',
        }}
      >
        {n}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
        {sublabel ? <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{sublabel}</div> : null}
      </div>
      {action ? (
        <button onClick={onAction} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 'var(--font-weight-semibold)', flex: '0 0 auto' }}>{action}</button>
      ) : null}
    </div>
  );
}
