import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
// HelloWorldApp:
import { HelloWorldApp } from './HelloWorldApp';

// Esto es nuestro punto de entrada:

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp/>
    </React.StrictMode>
)