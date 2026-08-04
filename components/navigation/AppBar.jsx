import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

/**
 * AppBar — the product top bar: brand mark + breadcrumb on the left, utilities
 * and avatar on the right. The Blue Insights mark is a rounded blue square with "b".
 */
export function AppBar({
  product = 'Blue Insights',
  breadcrumb = null,
  right = null,
  initials = 'AM',
  style = {},
  ...rest
}) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '12px 24px',
        background: 'var(--color-canvas)',
        borderBottom: '1px solid var(--color-border)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30,
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary)',
            color: '#fff',
            fontSize: 17,
            fontWeight: 'var(--font-weight-bold)',
            flex: '0 0 auto',
          }}
        >
          {product.slice(0, 1).toLowerCase()}
        </span>
        <span style={{ fontSize: 15, fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>{product}</span>
        {breadcrumb != null ? (
          <>
            <span style={{ color: 'var(--color-border)' }}>/</span>
            <span style={{ fontSize: 15, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{breadcrumb}</span>
          </>
        ) : null}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '0 0 auto' }}>
        {right}
        <Avatar initials={initials} size={34} />
      </div>
    </header>
  );
}
