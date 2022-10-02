import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.type';
import { BUTTON_COLOR, BUTTON_SIZE } from './Button.const';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonBase(
    {
      color = BUTTON_COLOR.PRIMARY,
      size = BUTTON_SIZE.MD,
      ...props
    }: ButtonProps,
    ref,
  ) {
    return <button {...props} ref={ref} className={`btn ${color} ${size}`} />;
  },
);
