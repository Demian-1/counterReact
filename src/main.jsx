import React from 'react';
import ReactDOM from 'react-dom/client';
// HelloWorldApp:
import { HelloWorldApp } from './HelloWorldApp';

// Esto es nuestro punto de entrada:

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
    </React.StrictMode>
)