import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import {Router} from "./router";
import "./i18n/config";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <StrictMode>
        <Router />
    </StrictMode>
);