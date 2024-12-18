import React from 'react';
import Navbar from '../components/Navbar.jsx';  // Your existing Navbar component
import { Outlet } from 'react-router-dom'; // This renders the current route's component

const Layout = () => {
  return (
    <div>
      <Navbar />  {/* This will be shown on all pages */}
      <div className="p-4">
        <Outlet />  {/* This renders the specific page component based on the route */}
      </div>
    </div>
  );
};

export default Layout;
