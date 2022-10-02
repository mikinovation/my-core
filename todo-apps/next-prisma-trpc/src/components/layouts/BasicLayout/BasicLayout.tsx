import React from 'react';
import { Outlet } from 'react-router';
import { BasicHeader } from '../../organisms/BasicHeader/BasicHeader';
import { BasicFooter } from '../../organisms/BasicFooter/BasicFooter';

export const BasicLayout = () => (
  <div>
    <BasicHeader />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-24">
      <Outlet />
    </div>
    <div className="w-full bg-white flex justify-center">
      <BasicFooter />
    </div>
  </div>
);
