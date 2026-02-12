
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-blue-500`}></i>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Why is my radiator hissing constantly?",
      answer: "A constant hiss usually means the radiator air vent is stuck open. This allows valuable steam to leak into the room rather than condensing inside the radiator. This 'Secondary Hissing' is a major source of energy loss and requires a professional vent replacement."
    },
    {
      question: "What is a 'Main Vent' and why does it matter?",
      answer: "While radiators have vents, your basement steam pipes have 'Main Vents.' Their job is to let large volumes of air out quickly so steam can reach the radiators. If these fail, your system has to push all that air through tiny radiator vents, causing slow heating and massive pressure spikes."
    },
    {
      question: "How do I choose the right vent size?",
      answer: "Vents come in different 'venting capacities.' Larger radiators or those further from the boiler typically need faster-venting valves. Choosing the wrong size leads to uneven heat where some rooms are boiling while others are freezing."
    },
    {
      question: "What is boiler 'Surging'?",
      answer: "If you see your water level bouncing wildly in the sight glass, your boiler is 'surging.' This is often caused by dirty water or oils in the system. It causes water to be thrown into the pipes, leading to loud banging (water hammer) and cold radiators."
    },
    {
      question: "How often should I maintain my steam system?",
      answer: "You should flush your low-water cutoff weekly during the winter. We recommend a professional 'Pre-Winter Diagnostic' every autumn to clean burners, check vent health, and ensure your system is running at the standard 2 PSI max."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="text-blue-600 font-bold mb-8 inline-block hover:underline">
          <i className="fas fa-arrow-left mr-2"></i> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Expert Steam System FAQ</h1>
          <p className="text-xl text-slate-600">Common questions from our Cambridge and Boston area clients.</p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-16 p-10 bg-blue-600 rounded-3xl text-white text-center shadow-2xl shadow-blue-500/20">
          <h2 className="text-3xl font-bold mb-4">Still hearing noise?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Our technicians can diagnose your system over the phone or via a local Cambridge visit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:8443406413" className="w-full sm:w-auto bg-white text-blue-700 px-8 py-3 rounded-xl font-bold text-xl hover:bg-slate-100 transition-colors">
              Call (844) 340-6413
            </a>
            <Link to="/diagnostics" className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold text-xl hover:bg-white/10 transition-colors">
              Use AI Diagnostic
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
