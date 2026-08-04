import React from 'react';

export interface ProgressBarProps {
  /** 0–100. Omit for an indeterminate look. */
  value?: number | null;
  height?: number;
  style?: React.CSSProperties;
}

/** Thin progress track — used while the agent works. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
