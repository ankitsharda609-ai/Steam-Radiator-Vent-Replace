
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block bg-blue-500/30 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest border border-white/20">
            Cambridge's #1 Steam Specialists
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            Quiet, Efficient Steam <br className="hidden md:block" /> Heat Starts Here.
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
            Stop the hissing and banging. Our expert technicians specialize in high-performance radiator vent replacement and boiler maintenance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/diagnostics" className="w-full sm:w-auto bg-white text-blue-800 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:bg-slate-100 transition-all hover:scale-105">
              AI System Diagnosis
            </Link>
            <a href="tel:8443406413" className="w-full sm:w-auto bg-blue-900 border border-blue-400/50 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center">
              <i className="fas fa-phone mr-3"></i> Call (844) 340-6413
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white py-8 border-b border-slate-100">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
            <div className="flex items-center space-x-2"><i className="fas fa-award text-2xl"></i><span className="font-bold">Certified Techs</span></div>
            <div className="flex items-center space-x-2"><i className="fas fa-shield-alt text-2xl"></i><span className="font-bold">Fully Insured</span></div>
            <div className="flex items-center space-x-2"><i className="fas fa-history text-2xl"></i><span className="font-bold">24/7 Response</span></div>
            <div className="flex items-center space-x-2"><i className="fas fa-star text-2xl"></i><span className="font-bold">5-Star Local</span></div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Expert Solutions for Your Steam System</h2>
            <p className="text-slate-600 text-lg">We don't just fix radiators; we optimize your entire heating cycle for maximum comfort and minimum cost.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 border border-slate-100 rounded-3xl shadow-sm bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fas fa-tools text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Vent Replacement</h3>
              <p className="text-slate-600 leading-relaxed">Old air vents are the #1 cause of cold radiators and high bills. We install high-capacity, silent valves engineered to last.</p>
            </div>
            <div className="group p-8 border border-slate-100 rounded-3xl shadow-sm bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fas fa-volume-up text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Noise Mitigation</h3>
              <p className="text-slate-600 leading-relaxed">Stop the "Secondary Hissing." We diagnose pitch issues and failing main vents that cause your radiators to scream.</p>
            </div>
            <div className="group p-8 border border-slate-100 rounded-3xl shadow-sm bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fas fa-burn text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Boiler Service</h3>
              <p className="text-slate-600 leading-relaxed">Full system checkups: flushing sediment, checking sight glass clarity, and adjusting pressure for safe, reliable winter heating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 italic">"The Cambridge Classic"</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    Historic Cambridge homes often suffer from "Secondary Hissing." This isn't just noise—it's your money escaping. 
                    Most systems have failed **Main Vents** in the basement, forcing individual radiator vents to do 10x the work.
                </p>
                <div className="flex items-center space-x-4 mb-8">
                    <img src="https://picsum.photos/seed/tech/80/80" alt="Specialist" className="rounded-full border-4 border-white shadow-lg" />
                    <div>
                        <p className="font-bold text-slate-900">Arthur Ventman</p>
                        <p className="text-sm text-slate-500 underline">Lead Steam Consultant</p>
                    </div>
                </div>
                <Link to="/faq" className="text-blue-600 font-bold hover:underline flex items-center">
                    Learn about Main Vents &rarr;
                </Link>
            </div>
            <div className="md:w-1/2 relative">
                <img src="https://picsum.photos/seed/steam/600/400" alt="Steam Radiator" className="rounded-3xl shadow-2xl relative z-10" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Request Your Free Estimate</h2>
            <p className="text-xl mb-12 text-slate-400">Serving Cambridge, Somerville, and Boston with same-day diagnostic calls.</p>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <h4 className="font-bold text-lg">Main Office</h4>
                    <p className="text-slate-400">100 Massachusetts Ave, Cambridge, MA 02139</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                    <h4 className="font-bold text-lg">Service Hotline</h4>
                    <p className="text-slate-400 font-mono text-2xl mt-1">(844) 340-6413</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Get a Quick Quote</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none" />
                <input type="text" placeholder="Last Name" className="w-full p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none" />
              <textarea placeholder="Describe your radiator issue (hissing, banging, cold...)" className="w-full p-4 border rounded-xl h-32 bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none"></textarea>
              <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
