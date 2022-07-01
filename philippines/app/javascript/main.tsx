import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
import {Router} from "./router";

root.render(
    <StrictMode>
        <Router />
    </StrictMode>
);