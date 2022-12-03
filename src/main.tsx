import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import './scss/index.scss'
import './vendor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)
