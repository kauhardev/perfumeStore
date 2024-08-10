import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AuthContext from './components/context/AuthContext.jsx'
import { store } from './redux/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <AuthContext>
    <App />
    </AuthContext>
  </Provider>
  </BrowserRouter>,
)
