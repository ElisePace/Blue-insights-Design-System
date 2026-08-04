import React from 'react';

/**
 * Checkbox — square check with label, boxed variant for confirmation rows
 * ("I've reviewed this and the figures are OK to share").
 */
export function Checkbox({
  checked = false,
  onChange,
  label = null,
  boxed = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const box = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
        height: 18,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-sm)',
        border: checked ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
        background: checked ? 'var(--color-primary)' : 'var(--color-canvas)',
        transition: 'background var(--duration-fast) var(--ease-standard)',
      }}
    >
      {checked ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      ) : null}
    </span>
  );

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        color: 'var(--color-text-primary)',
        padding: boxed ? '11px 14px' : 0,
        border: boxed ? '1px solid var(--color-primary)' : 'none',
        borderRadius: boxed ? 'var(--radius-md)' : 0,
        background: boxed ? 'var(--color-canvas)' : 'transparent',
        width: boxed ? '100%' : 'auto',
        boxSizing: 'border-box',
        ...style,
      }}
      {...rest}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      {box}
      {label ? <span>{label}</span> : null}
    </label>
  );
}
