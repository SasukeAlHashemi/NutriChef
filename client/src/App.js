import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import RecipePage from './pages/RecipePage.js';
import Login from './pages/Login.js'; // ✅ Make sure this import exists

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:documentId" element={<RecipePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
}

export default App;

