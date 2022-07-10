import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Textbox = forwardRef<
    HTMLInputElement,
    ComponentPropsWithoutRef<'input'>
    >(({ className, ...props }, ref) => (
      <input
        type="text"
/* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
        ref={ref}
        className={clsx(className, styles.textbox)}
      />
    ));

export default Textbox;
