import React from 'react';

/**
 * Blue Insights Button — the primary action control.
 * Neural Blue for the single primary action per view; everything else stays quiet.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 12.5, radius: 'var(--radius-md)', gap: 6 },
    md: { padding: '8px 16px', fontSize: 13, radius: 'var(--radius-md)', gap: 7 },
    lg: { padding: '11px 20px', fontSize: 14, radius: 'var(--radius-md)', gap: 8 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1px solid transparent',
    },
    secondary: {
      background: 'var(--color-canvas)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-secondary)',
      border: '1px solid transparent',
    },
    outlinePrimary: {
      background: 'var(--color-canvas)',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
    },
    danger: {
      background: 'var(--color-error)',
      color: '#fff',
      border: '1px solid transparent',
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontFamily: 'var(--font-sans)',
        fontSize: s.fontSize,
        fontWeight: 'var(--font-weight-semibold)',
        lineHeight: 1,
        padding: s.padding,
        borderRadius: s.radius,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : 'auto',
        whiteSpace: 'nowrap',
        transition: 'background var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {leadingIcon ? <span style={{ display: 'inline-flex', width: '1em', height: '1em' }}>{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span style={{ display: 'inline-flex', width: '1em', height: '1em' }}>{trailingIcon}</span> : null}
    </button>
  );
}
