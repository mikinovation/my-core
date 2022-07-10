import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

const Textbox = forwardRef<
    HTMLInputElement,
    ComponentPropsWithoutRef<'input'>
    >(({ className, ...props }, ref) => (
      <input
        type="text"
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
        ref={ref}
        className={clsx(className, 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker')}
      />
    ));

export default Textbox;
