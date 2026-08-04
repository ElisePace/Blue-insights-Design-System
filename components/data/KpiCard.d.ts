import React from 'react';

export interface KpiCardProps {
  /** Metric label (e.g. "Records analysed"). */
  label: React.ReactNode;
  /** The big number — tabular figures applied automatically. */
  value: React.ReactNode;
  /** Optional change line beneath the value. */
  delta?: React.ReactNode;
  deltaTone?: 'positive' | 'negative' | 'warning' | 'neutral';
  style?: React.CSSProperties;
}

/**
 * Labelled metric tile — the dashboard KPI backbone.
 * @startingPoint section="Data" subtitle="Metric tile with label, value & delta" viewport="700x150"
 */
export function KpiCard(props: KpiCardProps): JSX.Element;
