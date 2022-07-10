import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef<
    HTMLButtonElement,
    ComponentPropsWithoutRef<'button'>
    >(({ className, ...props }, ref) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <button {...props} ref={ref} className={clsx(className, 'bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded')} type="button" />
    ));

export default Button;
