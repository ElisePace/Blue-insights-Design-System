import React from 'react';

export interface Step {
  label: React.ReactNode;
  state?: 'done' | 'active' | 'pending';
  /** Optional trailing note, e.g. "3/3…". */
  note?: React.ReactNode;
}

export interface StepListProps {
  steps: Step[];
  style?: React.CSSProperties;
}

/** The agent "show your working" progress checklist. */
export function StepList(props: StepListProps): JSX.Element;
