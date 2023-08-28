import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailForm from './shared/emailForm/EmailForm'
import AboutPage from './aboutPage/AboutPage'

export default function App() {
  return (
    <div className="App">
      <AboutPage/>
	  <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<EmailForm />} />
      </Routes>
    </div>
  );
}

