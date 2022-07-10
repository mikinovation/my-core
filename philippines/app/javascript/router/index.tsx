import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from '../components/layouts/BasicLayout';
import HomePage from '../pages';
import LoginPage from '../pages/login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
