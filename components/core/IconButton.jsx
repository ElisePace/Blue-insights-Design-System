import React from 'react';

/**
 * IconButton — a square/pill control holding a single icon, optionally with a label.
 * Seen in the top bar ("Reset demo", theme toggle) and panel collapse (»).
 */
export function IconButton({
  label = null,
  variant = 'bordered',
  size = 'md',
  ariaLabel,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = { sm: 28, md: 34, lg: 40 };
  const dim = sizes[size] || sizes.md;

  const variants = {
    bordered: {
      background: 'var(--color-canvas)',
      color: 'var(--color-text-secondary)',
      border: '1px solid var(--color-border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-secondary)',
      border: '1px solid transparent',
    },
    soft: {
      background: 'var(--color-surface-2)',
      color: 'var(--color-text-secondary)',
      border: '1px solid transparent',
    },
  };
  const v = variants[variant] || variants.bordered;

  return (
    <button
      aria-label={ariaLabel || (typeof label === 'string' ? label : undefined)}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        height: dim,
        minWidth: dim,
        padding: label ? '0 12px' : 0,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 'var(--font-weight-semibold)',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...v,
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{children}</span>
      {label ? <span>{label}</span> : null}
    </button>
  );
}
