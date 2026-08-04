import React from 'react';

export interface AppBarProps {
  /** Product name; its first letter forms the square mark. */
  product?: string;
  breadcrumb?: React.ReactNode;
  /** Right-side utility nodes (buttons, theme toggle) rendered before the avatar. */
  right?: React.ReactNode;
  initials?: string;
  style?: React.CSSProperties;
}

/**
 * Product top bar — brand mark, breadcrumb, utilities and avatar.
 * @startingPoint section="Navigation" subtitle="Product top bar with brand & utilities" viewport="900x64"
 */
export function AppBar(props: AppBarProps): JSX.Element;
