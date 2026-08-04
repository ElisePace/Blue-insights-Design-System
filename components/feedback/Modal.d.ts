import React from 'react';

export interface ModalProps {
  open?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  onClose?: () => void;
  /** Footer action row (buttons), right-aligned. */
  footer?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Centered dialog over a dimmed backdrop.
 * @startingPoint section="Feedback" subtitle="Confirmation dialog with footer actions" viewport="700x460"
 */
export function Modal(props: ModalProps): JSX.Element | null;
