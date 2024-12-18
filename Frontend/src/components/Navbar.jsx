import React from 'react';
import { Link } from 'react-router-dom';
import trading from '../assets/trading.jpg';
const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-6">
      <div className="flex justify-between items-center">
        {/* Leftmost Image (Logo) */}
        <img 
          src={trading} 
          alt="Logo" 
          className="h-10 w-auto rounded-md"  // Adjust size as needed
        />
        
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-black hover:bg-red-600 px-4 py-2 rounded-lg transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard" 
              className="text-black hover:bg-red-600 px-4 py-2 rounded-lg transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/add_stock" 
              className="text-black hover:bg-red-600 px-4 py-2 rounded-lg transition duration-300"
            >
              Add Stock
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className="text-black hover:bg-red-600 px-4 py-2 rounded-lg transition duration-300"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
