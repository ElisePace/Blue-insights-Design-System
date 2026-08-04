import React from 'react';

export interface IconButtonProps {
  /** Optional text label rendered beside the icon (e.g. "Dark"). */
  label?: React.ReactNode;
  variant?: 'bordered' | 'ghost' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** The icon node. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** A square/pill control holding one icon, optionally with a short label. */
export function IconButton(props: IconButtonProps): JSX.Element;
