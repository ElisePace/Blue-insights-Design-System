import React from 'react';

export type AiChipKind = 'accountability' | 'consent' | 'privacy' | 'transparency' | 'risk' | 'bias';

export interface AiChipProps {
  /** Trust semantic — sets colour and square mark. */
  kind?: AiChipKind;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Labelled AI trust/interpretability marker (accountability, consent, privacy, risk, bias).
 * @startingPoint section="AI" subtitle="Trust & interpretability markers" viewport="700x150"
 */
export function AiChip(props: AiChipProps): JSX.Element;
