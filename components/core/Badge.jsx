import React from 'react';

const TONES = {
  neutral: { bg: 'var(--color-surface-2)', fg: 'var(--color-text-secondary)', dot: 'var(--color-text-muted)' },
  primary: { bg: 'var(--color-primary-soft)', fg: 'var(--color-primary)', dot: 'var(--color-primary)' },
  success: { bg: 'var(--color-success-bg)', fg: 'var(--color-success-fg)', dot: 'var(--color-success)' },
  warning: { bg: 'var(--color-warning-bg)', fg: 'var(--color-warning-fg)', dot: 'var(--color-warning)' },
  error: { bg: 'var(--color-error-bg)', fg: 'var(--color-error-fg)', dot: 'var(--color-error)' },
  info: { bg: 'var(--color-info-bg)', fg: 'var(--color-info-fg)', dot: 'var(--color-info)' },
};

/**
 * Badge — a small pill for status ("Confirmed", "Needs review", "Blocked")
 * and labels. Status is always colour + label (+ optional dot), never colour alone.
 */
export function Badge({
  tone = 'neutral',
  dot = false,
  uppercase = false,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        fontWeight: 'var(--font-weight-semibold)',
        lineHeight: 1,
        letterSpacing: uppercase ? 'var(--letter-spacing-label)' : 'normal',
        textTransform: uppercase ? 'uppercase' : 'none',
        padding: '4px 9px',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.fg,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot ? <span style={{ width: 7, height: 7, borderRadius: 'var(--radius-pill)', background: t.dot, flex: '0 0 auto' }} /> : null}
      {children}
    </span>
  );
}
