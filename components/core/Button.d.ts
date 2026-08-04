import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlinePrimary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  /** Visual weight. Use `primary` for the single main action per view. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Icon node rendered before the label (e.g. a Lucide icon). */
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * The primary action control.
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost & outline actions" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
