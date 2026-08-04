import React from 'react';

/** Input — single-line text field. */
export function Input({
  value,
  defaultValue,
  placeholder = '',
  type = 'text',
  disabled = false,
  leadingIcon = null,
  fullWidth = false,
  onChange,
  style = {},
  ...rest
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--color-canvas)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '8px 12px',
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {leadingIcon ? (
        <span style={{ display: 'inline-flex', width: 16, height: 16, color: 'var(--color-text-muted)', flex: '0 0 auto' }}>{leadingIcon}</span>
      ) : null}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        style={{
          flex: 1,
          minWidth: 0,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--color-text-primary)',
        }}
        {...rest}
      />
    </span>
  );
}
