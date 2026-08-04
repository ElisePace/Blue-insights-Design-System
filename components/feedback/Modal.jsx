import React from 'react';

/**
 * Modal — centered dialog over a dimmed backdrop ("Review before sharing").
 * Title + optional subtitle, close (×), body, and a footer action row.
 */
export function Modal({
  open = true,
  title,
  subtitle = null,
  onClose,
  footer = null,
  width = 620,
  children,
  style = {},
  ...rest
}) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width,
          maxWidth: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          background: 'var(--color-canvas)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          fontFamily: 'var(--font-sans)',
          ...style,
        }}
        {...rest}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '20px 24px 16px', borderBottom: '1px solid var(--color-border)' }}>
          <div>
            <div style={{ fontSize: 19, fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>{title}</div>
            {subtitle ? <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginTop: 4 }}>{subtitle}</div> : null}
          </div>
          {onClose ? (
            <button aria-label="Close" onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--color-text-muted)', padding: 4, lineHeight: 0, borderRadius: 'var(--radius-sm)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          ) : null}
        </div>
        <div style={{ padding: '20px 24px' }}>{children}</div>
        {footer ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, padding: '0 24px 22px' }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
