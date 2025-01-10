import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
