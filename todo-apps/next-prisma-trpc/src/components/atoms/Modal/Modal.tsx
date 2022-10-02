import React, { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

export const Modal = ({ label, children }: Props) => {
  return (
    <>
      <label htmlFor="modal" className="btn modal-button">
        {label}
      </label>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">{children}</div>
    </>
  );
};
