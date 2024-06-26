import React from 'react';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import Location from "./pages/Location.jsx";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const basename = import.meta.env.MODE === "production" ? "/OpenclassroomsProjectKasa" : "";
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" replace />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
