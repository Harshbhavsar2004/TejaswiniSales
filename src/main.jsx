import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopcontextProvider from './Context/ShopContect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopcontextProvider><App /></ShopcontextProvider>
  </React.StrictMode>,
)
