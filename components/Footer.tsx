
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white mb-4">
              <i className="fas fa-wind text-blue-500 text-xl"></i>
              <span className="text-xl font-bold tracking-tight">SteamVent Pro</span>
            </div>
            <p className="max-w-xs mx-auto md:mx-0">
              Expert steam heating solutions for Cambridge and the Greater Boston area. Efficiency and silence, guaranteed.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Cambridge, MA</li>
              <li>Somerville, MA</li>
              <li>Brookline, MA</li>
              <li>Boston, MA</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <p className="text-sm">100 Massachusetts Ave</p>
            <p className="text-sm mb-2">Cambridge, MA 02139</p>
            <p className="text-white font-bold">(844) 340-6413</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Steam Radiator Vent Replace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
