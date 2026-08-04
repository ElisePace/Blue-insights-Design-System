import React from 'react';

export type AlertTone = 'warning' | 'error' | 'info' | 'success' | 'transparency';

export interface AlertProps {
  tone?: AlertTone;
  /** Bold lead line. */
  title?: React.ReactNode;
  showIcon?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Inline notice banner. `transparency` is the beige AI "how this was made" explainer. */
export function Alert(props: AlertProps): JSX.Element;
