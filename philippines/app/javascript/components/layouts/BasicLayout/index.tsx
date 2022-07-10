import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../molecules/Navbar';
import Footer from '../../organisms/Footer';

const BasicLayout: FC = memo(() => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
));

export default BasicLayout;
