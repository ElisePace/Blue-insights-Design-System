import React from 'react';

export type FindingTone = 'evidence' | 'assumption' | 'unknown' | 'primary';

export interface FindingSectionProps {
  /** Colour-codes the header dot: evidence (blue), assumption (amber), unknown (gray). */
  tone?: FindingTone;
  /** Uppercase header label, e.g. "EVIDENCE". */
  label: React.ReactNode;
  /** Muted meta beside the label, e.g. "3 facts". */
  meta?: React.ReactNode;
  open?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * The Research-sidekick disclosure block — Blue Insights' signature interpretability primitive.
 * @startingPoint section="AI" subtitle="Evidence / Assumption / Unknown disclosure" viewport="700x260"
 */
export function FindingSection(props: FindingSectionProps): JSX.Element;
