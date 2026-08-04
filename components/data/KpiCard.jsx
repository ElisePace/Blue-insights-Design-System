import React from 'react';

const DELTA_COLORS = {
  positive: 'var(--color-success)',
  negative: 'var(--color-error)',
  warning: 'var(--color-warning)',
  neutral: 'var(--color-text-muted)',
};

/**
 * KpiCard — labelled metric tile: uppercase label, big tabular number, optional delta.
 * The backbone of the dashboard KPI row.
 */
export function KpiCard({
  label,
  value,
  delta = null,
  deltaTone = 'neutral',
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        background: 'var(--color-surface-1)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '14px 16px',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12.5,
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-text-muted)',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 26,
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-text-primary)',
          fontFeatureSettings: "'tnum' 1, 'lnum' 1",
          marginTop: 6,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      {delta != null ? (
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 'var(--font-weight-semibold)',
            color: DELTA_COLORS[deltaTone] || DELTA_COLORS.neutral,
            fontFeatureSettings: "'tnum' 1",
            marginTop: 6,
          }}
        >
          {delta}
        </div>
      ) : null}
    </div>
  );
}
