import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Layout from './pages/Layout.jsx'; 
import Add_Stock from './pages/Add_Stock.jsx';
// import Portfolio from './pages/Portfolio.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add_stock" element={<Add_Stock />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
