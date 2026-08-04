import React from 'react';

export type BadgeTone = 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps {
  /** Semantic tone; maps to status colours. */
  tone?: BadgeTone;
  /** Show a leading status dot. */
  dot?: boolean;
  /** Uppercase + tracked (for labels like RESTRICTED). */
  uppercase?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Small status/label pill. Status is always colour + label, never colour alone.
 * @startingPoint section="Core" subtitle="Status pills — confirmed, review, blocked" viewport="700x120"
 */
export function Badge(props: BadgeProps): JSX.Element;
