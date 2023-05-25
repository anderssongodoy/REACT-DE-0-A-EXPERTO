import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'

// import { HelloWorldApp } from './HelloWorldApp'

import './style.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = { 10 }/>
        {/* <FirstApp title="Hola, Soy Vegeta"/> */}
    </React.StrictMode>
)