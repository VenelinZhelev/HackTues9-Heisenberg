import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componens/App/App';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './componens/Navbar/navbar';
import MyFooter from "./componens/footer/footer";

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

const Footer = ReactDOM.createRoot(document.getElementById('footer'));
Footer.render(
  <React.StrictMode>
    <MyFooter />
  </React.StrictMode>
);