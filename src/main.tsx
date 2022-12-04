import React from 'react'
import ReactDOM from 'react-dom/client'
import Blank from './pages/Blank'
import './scss/index.scss'
import './vendor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Blank />
  </React.StrictMode>
)
