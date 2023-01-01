import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import './style.css';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';


// Esto es nuestro punto de entrada:

// Para pasar valores como numeros se pone entre {}
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={123}/>
    </React.StrictMode>
)