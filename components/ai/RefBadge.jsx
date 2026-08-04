import React from 'react';

/**
 * RefBadge — the small blue citation number that trails an evidence claim
 * ("…fell 28% vs prior quarter [1]"). Links a claim to a source in scope.
 */
export function RefBadge({ n, onClick, active = false, style = {}, ...rest }) {
  return (
    <sup style={{ lineHeight: 0 }}>
      <button
        onClick={onClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 15,
          height: 15,
          padding: '0 3px',
          marginLeft: 3,
          borderRadius: 'var(--radius-sm)',
          border: 'none',
          background: active ? 'var(--color-primary)' : 'transparent',
          color: active ? '#fff' : 'var(--color-primary)',
          fontFamily: 'var(--font-sans)',
          fontSize: 10.5,
          fontWeight: 'var(--font-weight-semibold)',
          fontFeatureSettings: "'tnum' 1",
          cursor: onClick ? 'pointer' : 'default',
          verticalAlign: 'baseline',
          ...style,
        }}
        {...rest}
      >
        {n}
      </button>
    </sup>
  );
}
