import React from 'react';

export interface CardProps {
  /** Optional header title; renders a surface-2 header bar. */
  title?: React.ReactNode;
  /** Node aligned to the right of the header. */
  headerRight?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  surface?: 'surface-1' | 'canvas' | 'surface-2';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Base surface container — soft fill, 1px border, 12px radius.
 * @startingPoint section="Data" subtitle="Surface container with optional header" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
