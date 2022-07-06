import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayout } from '../components/layouts/BasicLayout';
import { Home } from '../pages';
import { Login } from '../pages/login';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
