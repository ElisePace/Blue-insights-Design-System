import React from 'react';

function Marker({ state }) {
  if (state === 'done') {
    return (
      <span style={{ color: 'var(--color-primary)', display: 'inline-flex' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      </span>
    );
  }
  if (state === 'active') {
    return (
      <span style={{ width: 18, height: 18, borderRadius: 'var(--radius-pill)', border: '2px solid var(--color-primary)', display: 'inline-flex', flex: '0 0 auto' }} />
    );
  }
  return <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-pill)', background: 'var(--color-border)', margin: 5, flex: '0 0 auto' }} />;
}

/**
 * StepList — the agent "show your working" checklist. Each step is done / active /
 * pending, with an optional trailing note (e.g. "3/3…").
 */
export function StepList({ steps = [], style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {steps.map((s, i) => {
        const state = s.state || 'pending';
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 18, display: 'inline-flex', justifyContent: 'center', flex: '0 0 auto' }}><Marker state={state} /></span>
            <span style={{ fontSize: 15, fontWeight: state === 'active' ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)', color: state === 'pending' ? 'var(--color-text-muted)' : 'var(--color-text-primary)' }}>{s.label}</span>
            {s.note ? <span style={{ fontSize: 14, fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary)', marginLeft: 2 }}>{s.note}</span> : null}
          </div>
        );
      })}
    </div>
  );
}
