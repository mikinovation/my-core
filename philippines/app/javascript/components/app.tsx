import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<div>Hello, Rails 7!</div>);