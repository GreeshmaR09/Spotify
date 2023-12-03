import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Combined from './Pages.js/Combined';
import Loginpage from './Pages.js/Loginpage';
import AppRouter from './Approuter/AppRouter';
import App from './App';
import APIfetch from './APIfetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <StrictMode>
       <App/> 
    </StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
