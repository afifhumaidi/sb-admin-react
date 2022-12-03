import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound from './pages/NotFound'
import './scss/index.scss'
import './vendor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NotFound />
  </React.StrictMode>
)
