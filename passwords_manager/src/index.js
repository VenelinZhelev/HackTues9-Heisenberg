import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componens/App/App';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './componens/Navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Navbar = ReactDOM.createRoot(document.getElementById('navbar'));
Navbar.render(
  <React.StrictMode>
    <MyNavbar />
  </React.StrictMode>
);