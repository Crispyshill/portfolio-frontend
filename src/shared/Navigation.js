import React from 'react';
import './Navigation.css';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  function onClick(destination) {
    navigate(destination);
  }

  return (
    <div className="navigation-banner">
      <span onClick={() => onClick("/")} className="navigation-item">Home</span>
      <span onClick={() => onClick("/about")} className="navigation-item">About</span>
      <span onClick={() => onClick("/services")} className="navigation-item">Services</span>
    </div>
  );
}

