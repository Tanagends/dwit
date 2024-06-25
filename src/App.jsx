import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import GraphicDesign from './routes/GraphicDesign';
import WebDesign from './routes/WebDesign';
import Contacts from './routes/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

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
      <Link to='https://wa.me/263771975597' className='text-app sticky ml-auto bottom-[20%] block drop-shadow-lg w-fit animate-bounce'><i className='bi bi-whatsapp text-4xl p-4'></i></Link>
    <Footer/>
    </>
  )
}

export default App
