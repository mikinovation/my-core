import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { TextboxBorderColor } from '../Textbox/Textbox';

export type BaseSelectbox = {
  options: {
    value: string;
    label: string;
  }[];
  value: string | number | undefined;
  initialLabel?: string;
};

export type Props = ComponentPropsWithoutRef<'input'> & BaseSelectbox;

export const Selectbox = forwardRef<HTMLSelectElement, Props>(
  function SelectboxBase({ options, ...props }, ref) {
    return (
      <select {...props} ref={ref} className={`select select-bordered w-full`}>
        <option value="">{props.initialLabel || '-'}</option>
        {options.map((o) => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>
    );
  },
);
