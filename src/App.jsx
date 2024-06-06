import React from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import GraphicDesign from './routes/GraphicDesign';
import WebDesign from './routes/WebDesign';
import Contacts from './routes/Contacts';

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/GraphicDesign">Graphic Design</Link>
      <Link to="/WebDesign">Web Design</Link>
      <Link to="/Contacts">Contacts</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/WebDesign" element={<WebDesign />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      </>
  )
}

export default App
