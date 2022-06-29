import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
const container = document.getElementById('app');
const root = createRoot(container);
import {Home} from './pages';
import {Login} from './pages/login';

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);