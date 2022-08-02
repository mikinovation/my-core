import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from '../components/layouts/BasicLayout';
import HomePage from '../pages';
import LoginPage from '../pages/login';
import Teachers from "../pages/teachers";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
            <Route path="teachers" element={<Teachers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
