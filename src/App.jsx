import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import GraphicDesign from './routes/GraphicDesign';
import WebDesign from './routes/WebDesign';
import Contacts from './routes/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Graphic Design" element={<GraphicDesign />} />
        <Route path="/Web Design" element={<WebDesign />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
