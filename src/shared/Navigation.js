import React from 'react';
import './Navigation.css';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.jpg'

export default function Navigation() {
  const navigate = useNavigate();

  function onClick(destination) {
    navigate(destination);
  }

  return (
    <div className="navigation-banner" style={{ backgroundColor: 'white' }}>
	  <div className="logo-container">
	  <img src={logo} alt="logo" className="logo"/>
	  </div>
	  <div className="navigation-items">
      <span onClick={() => onClick("/")} className="navigation-item">Home</span>
      <span onClick={() => onClick("/about")} className="navigation-item">About</span>
      <span onClick={() => onClick("/services")} className="navigation-item">Services</span>
    </div>
	  </div>
  );
}

