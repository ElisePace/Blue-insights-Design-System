import React from 'react';

const TONES = {
  warning: { bg: 'var(--color-warning-bg)', fg: 'var(--color-warning-fg)', border: 'var(--color-warning)', icon: 'var(--color-warning)' },
  error: { bg: 'var(--color-error-bg)', fg: 'var(--color-error-fg)', border: 'var(--color-error)', icon: 'var(--color-error)' },
  info: { bg: 'var(--color-info-bg)', fg: 'var(--color-info-fg)', border: 'var(--color-info)', icon: 'var(--color-info)' },
  success: { bg: 'var(--color-success-bg)', fg: 'var(--color-success-fg)', border: 'var(--color-success)', icon: 'var(--color-success)' },
  transparency: { bg: 'var(--color-ai-transparency)', fg: '#4A4128', border: '#EADFB8', icon: 'var(--color-ai-accountability)' },
};

const ICONS = {
  warning: <path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />,
  error: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>,
  info: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>,
  success: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
  transparency: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>,
};

/**
 * Alert — an inline notice banner. `warning` for the sensitive-figure review notice,
 * `transparency` for the beige "How this was generated" explainer.
 */
export function Alert({
  tone = 'info',
  title = null,
  showIcon = true,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: '11px 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        lineHeight: 'var(--line-height-normal)',
        color: t.fg,
        ...style,
      }}
      {...rest}
    >
      {showIcon ? (
        <span style={{ flex: '0 0 auto', color: t.icon, marginTop: 1 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS[tone] || ICONS.info}</svg>
        </span>
      ) : null}
      <div>
        {title ? <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: children ? 4 : 0 }}>{title}</div> : null}
        {children}
      </div>
    </div>
  );
}
