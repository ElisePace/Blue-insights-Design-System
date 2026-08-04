import React from 'react';

const TONES = {
  evidence: 'var(--color-secondary)',      // teal-blue dot
  assumption: 'var(--color-warning)',      // amber dot
  unknown: 'var(--color-text-muted)',      // gray dot
  primary: 'var(--color-primary)',
};

/**
 * FindingSection — the Research-sidekick disclosure block.
 * A coloured-dot uppercase header ("EVIDENCE · 3 facts") that expands to reveal
 * the finding body. This is Blue Insights' signature interpretability primitive.
 */
export function FindingSection({
  tone = 'evidence',
  label,
  meta = null,
  open = true,
  onToggle,
  children,
  style = {},
  ...rest
}) {
  const dot = TONES[tone] || TONES.evidence;
  return (
    <div
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--color-canvas)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          width: '100%',
          background: 'transparent',
          border: 'none',
          cursor: onToggle ? 'pointer' : 'default',
          padding: '13px 16px',
          fontFamily: 'var(--font-sans)',
          textAlign: 'left',
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-pill)', background: dot, flex: '0 0 auto' }} />
        <span style={{ fontSize: 11.5, fontWeight: 'var(--font-weight-semibold)', letterSpacing: 'var(--letter-spacing-label)', textTransform: 'uppercase', color: 'var(--color-text-primary)' }}>{label}</span>
        {meta != null ? <span style={{ fontSize: 12.5, color: 'var(--color-text-muted)', fontWeight: 'var(--font-weight-medium)' }}>{meta}</span> : null}
        <span style={{ marginLeft: 'auto', color: 'var(--color-text-muted)', display: 'inline-flex', transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform var(--duration-fast) var(--ease-standard)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </button>
      {open ? (
        <div style={{ padding: '0 16px 15px', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-text-primary)', lineHeight: 'var(--line-height-normal)' }}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
