import React from 'react';

export interface RefBadgeProps {
  /** Source number. */
  n: number;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** Small blue citation number that links an evidence claim to a source. */
export function RefBadge(props: RefBadgeProps): JSX.Element;
