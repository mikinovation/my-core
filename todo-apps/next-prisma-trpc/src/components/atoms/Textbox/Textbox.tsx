import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

export const TEXTBOX_BORDER_COLOR = {
  INFO: 'input-info',
  ERROR: 'input-error',
} as const;

export type TextboxBorderColor =
  typeof TEXTBOX_BORDER_COLOR[keyof typeof TEXTBOX_BORDER_COLOR];

export type BaseTextbox = {
  borderColor?: TextboxBorderColor;
};

export type Props = ComponentPropsWithoutRef<'input'> & BaseTextbox;

export const Textbox = forwardRef<HTMLInputElement, Props>(function TextboxBase(
  { borderColor, ...props },
  ref,
) {
  return (
    <input
      type="text"
      {...props}
      ref={ref}
      placeholder={props.placeholder}
      className={`input input-bordered w-full ${borderColor}`}
    />
  );
});
