import React from 'react';

export interface InputProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** Optional leading icon (e.g. search glyph). */
  leadingIcon?: React.ReactNode;
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Single-line text field with optional leading icon. */
export function Input(props: InputProps): JSX.Element;
