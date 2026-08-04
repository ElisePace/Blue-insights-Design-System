import React from 'react';

/** ProgressBar — thin determinate/indeterminate track (agent working). */
export function ProgressBar({ value = null, height = 4, style = {}, ...rest }) {
  const indeterminate = value == null;
  const pct = indeterminate ? 40 : Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : pct}
      style={{
        width: '100%',
        height,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--color-surface-2)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          borderRadius: 'var(--radius-pill)',
          background: 'var(--color-primary)',
          transition: 'width var(--duration-normal) var(--ease-standard)',
        }}
      />
    </div>
  );
}
