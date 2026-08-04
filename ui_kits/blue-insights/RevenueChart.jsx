// Blue Insights UI kit — the revenue-by-quarter bar chart with the Q3 annotation callout.
const { useState } = React;

const QUARTERS = [
  { q: 'Q1', label: '$8.40M', value: 8.4, tone: 'resting' },
  { q: 'Q2', label: '$9.60M', value: 9.6, tone: 'resting' },
  { q: 'Q3', label: '$8.45M', value: 8.45, tone: 'active' },
  { q: 'Q4', label: '$8.90M', value: 8.9, tone: 'muted' },
];
const MAX = 10;

function RevenueChart({ onExplain }) {
  const gridlines = ['$9M', '$6M', '$3M', '$0M'];
  return (
    <div style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 32px 20px', position: 'relative' }}>
      <div style={{ position: 'relative', height: 380, marginLeft: 44 }}>
        {/* gridlines */}
        {gridlines.map((g, i) => (
          <div key={g} style={{ position: 'absolute', left: -44, right: 0, top: `${(i / 3) * 100}%`, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 34, textAlign: 'right', fontSize: 12.5, color: 'var(--color-text-muted)', fontFeatureSettings: "'tnum' 1" }}>{g}</span>
            <div style={{ flex: 1, height: 1, background: 'var(--color-border)', opacity: 0.7 }} />
          </div>
        ))}
        {/* bars */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: 0 }}>
          {QUARTERS.map((b) => {
            const bg = b.tone === 'active' ? 'var(--color-chart-bar-active)' : b.tone === 'muted' ? 'var(--color-chart-bar-muted)' : 'var(--color-chart-bar)';
            return (
              <div key={b.q} style={{ width: 96, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                <div style={{ fontSize: 18, fontWeight: b.tone === 'active' ? 700 : 600, color: b.tone === 'active' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', marginBottom: 8, fontFeatureSettings: "'tnum' 1" }}>{b.label}</div>
                <div style={{ width: '100%', height: `${(b.value / MAX) * 100}%`, background: bg, borderRadius: '4px 4px 0 0', border: b.tone === 'muted' ? '1px dashed var(--color-border)' : 'none', boxSizing: 'border-box' }} />
              </div>
            );
          })}
        </div>
        {/* annotation callout over Q3 */}
        <div style={{ position: 'absolute', top: 24, left: '52%', width: 340, background: 'var(--color-canvas)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14, zIndex: 3 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--color-text-primary)' }}>Revenue dipped in Q3</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 3 }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--color-primary)' }} />
              <span style={{ fontSize: 13, color: 'var(--color-error)', fontFeatureSettings: "'tnum' 1" }}>−12% QoQ</span>
            </div>
          </div>
          <button onClick={onExplain} style={{ border: 'none', background: 'transparent', color: 'var(--color-primary)', fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Explain this</button>
        </div>
      </div>
      {/* x labels */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: 44, marginTop: 10 }}>
        {QUARTERS.map((b) => <div key={b.q} style={{ width: 96, textAlign: 'center', fontSize: 15, color: 'var(--color-text-secondary)' }}>{b.q}</div>)}
      </div>
    </div>
  );
}
window.RevenueChart = RevenueChart;
