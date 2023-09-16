import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
} from "react-router-dom";
import AppRouter from './AppRouter.jsx'
import './styles.css'
import NavigationBar from './components/navigationBar/NavigationBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <AppRouter />
    </BrowserRouter> 
  </React.StrictMode>,
)
