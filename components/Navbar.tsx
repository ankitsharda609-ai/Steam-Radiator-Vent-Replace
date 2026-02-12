
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <i className="fas fa-wind text-blue-600 text-2xl"></i>
            <span className="text-xl font-bold tracking-tight text-slate-900">SteamVent Pro</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link to="/" className={`${isActive('/') ? 'text-blue-600' : 'text-slate-600'} hover:text-blue-600 transition`}>Home</Link>
            <Link to="/diagnostics" className={`${isActive('/diagnostics') ? 'text-blue-600' : 'text-slate-600'} hover:text-blue-600 transition flex items-center`}>
              <i className="fas fa-microchip mr-1.5 text-xs"></i> AI Diagnostic
            </Link>
            <Link to="/faq" className={`${isActive('/faq') ? 'text-blue-600' : 'text-slate-600'} hover:text-blue-600 transition`}>FAQ</Link>
            <a href="tel:8443406413" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              (844) 340-6413
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Home</Link>
            <Link to="/diagnostics" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">AI Diagnostic</Link>
            <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">FAQ</Link>
            <a href="tel:8443406413" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold">
              Call (844) 340-6413
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
