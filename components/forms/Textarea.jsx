import React from 'react';

/** Textarea — multi-line input (share summary, "what's wrong with this assumption?"). */
export function Textarea({
  value,
  defaultValue,
  placeholder = '',
  rows = 4,
  disabled = false,
  fullWidth = true,
  onChange,
  style = {},
  ...rest
}) {
  return (
    <textarea
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      onChange={onChange}
      style={{
        display: 'block',
        width: fullWidth ? '100%' : 'auto',
        boxSizing: 'border-box',
        resize: 'vertical',
        background: 'var(--color-canvas)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 12px',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        lineHeight: 'var(--line-height-normal)',
        color: 'var(--color-text-primary)',
        outline: 'none',
        ...style,
      }}
      {...rest}
    />
  );
}
