import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
// HelloWorldApp:
import { HelloWorldApp } from './HelloWorldApp';

// Esto es nuestro punto de entrada:

// Para pasar valores como numeros se pone entre {}
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp title='Hola me llamo demi' subtitle={123}/>
    </React.StrictMode>
)