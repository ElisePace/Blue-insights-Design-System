import React from 'react';

export interface AvatarProps {
  /** Initials shown when no image is supplied. */
  initials?: string;
  src?: string | null;
  /** Diameter in px. */
  size?: number;
  style?: React.CSSProperties;
}

/** Circular user badge with initials or image. */
export function Avatar(props: AvatarProps): JSX.Element;
