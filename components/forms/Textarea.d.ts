import React from 'react';

export interface TextareaProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

/** Multi-line text input. */
export function Textarea(props: TextareaProps): JSX.Element;
