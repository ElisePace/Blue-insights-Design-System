import React from 'react';

export interface SourceRowProps {
  /** Source index (matches its RefBadge). */
  n: number;
  name: React.ReactNode;
  sublabel?: React.ReactNode;
  /** Trailing action label; null to hide. */
  action?: React.ReactNode;
  onAction?: () => void;
  style?: React.CSSProperties;
}

/** A "sources in scope" list row — numbered square, name, Preview action. */
export function SourceRow(props: SourceRowProps): JSX.Element;
