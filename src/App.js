import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailForm from './shared/emailForm/EmailForm'
import AboutPage from './aboutPage/AboutPage'
import Navigation from './shared/Navigation'
import Home from './home/Home'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Navigation/>
	  <Routes>
	<Route path="/" element={<Home/>}/>  
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<EmailForm />} />
      </Routes>
    </div>
  );
}

