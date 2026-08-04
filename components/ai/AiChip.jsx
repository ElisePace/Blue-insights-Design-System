import React from 'react';

/* AI trust semantics — coloured square chips ("Accountability · audit trail"). */
const KINDS = {
  accountability: { bg: 'var(--color-primary-soft)', fg: 'var(--color-ai-accountability)', mark: 'var(--color-ai-accountability)', border: '#C7D2FE' },
  consent: { bg: 'var(--color-ai-consent)', fg: 'var(--color-success-fg)', mark: 'var(--color-success)', border: 'transparent' },
  privacy: { bg: 'var(--color-ai-privacy)', fg: '#334155', mark: 'var(--color-text-muted)', border: 'transparent' },
  transparency: { bg: 'var(--color-ai-transparency)', fg: '#4A4128', mark: 'var(--color-ai-accountability)', border: '#EADFB8' },
  risk: { bg: '#FFF7DB', fg: '#7A5B00', mark: 'var(--color-ai-risk)', border: 'transparent' },
  bias: { bg: '#FDE7E5', fg: '#8A2A22', mark: 'var(--color-ai-bias)', border: 'transparent' },
};

/**
 * AiChip — a labelled trust/interpretability marker used in the "how this was
 * generated" strip and the risk/bias flag list. Square mark, not a round dot.
 */
export function AiChip({ kind = 'accountability', children, style = {}, ...rest }) {
  const k = KINDS[kind] || KINDS.accountability;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: k.bg,
        color: k.fg,
        border: `1px solid ${k.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: '8px 12px',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 'var(--font-weight-semibold)',
        lineHeight: 1.2,
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 10, height: 10, borderRadius: 3, background: k.mark, flex: '0 0 auto' }} />
      {children}
    </span>
  );
}
