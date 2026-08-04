import React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  /** Render inside a bordered row (share confirmation pattern). */
  boxed?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Square checkbox with label; `boxed` for confirmation rows. */
export function Checkbox(props: CheckboxProps): JSX.Element;
