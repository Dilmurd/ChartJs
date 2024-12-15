import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "number-brm"
import { StateProvider } from './context/index.jsx'
import { reducer, initialState } from './context/reducer.js'
import { BrowserRouter } from 'react-router-dom'
import "./i18next.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App  />
      </StateProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
