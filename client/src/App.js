import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import RecipePage from './pages/RecipePage.js';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:documentId' element={<RecipePage />} />
      </Routes>
    
  );
}

export default App;