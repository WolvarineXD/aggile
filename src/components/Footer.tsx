import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { VisitorCounter } from '../services/VisitorCounter';

const Footer = () => {
  const [totalVisitors, setTotalVisitors] = useState<number>(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const visitorCounter = new VisitorCounter();

    const fetchCounts = async () => {
      try {
        const total = await visitorCounter.getTotalVisitors();
        setTotalVisitors(total);
      } catch (error) {
        console.error('Error fetching visitor counts:', error);
      }
    };

    fetchCounts();

    const lastVisit = sessionStorage.getItem('lastVisit');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastVisit || now - parseInt(lastVisit) > oneHour) {
      visitorCounter.incrementTotalVisitors()
        .then(newTotal => {
          setTotalVisitors(newTotal);
          sessionStorage.setItem('lastVisit', now.toString());
        })
        .catch(console.error);
    }
  }, []);

  return (
    <footer className="bg-theme-darkGray">
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">India Digital Vision</h3>
              <p className="text-white/60">
                Showcasing India's innovative digital public infrastructure and technologies that are transforming the nation.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/60 hover:text-theme-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/60 hover:text-theme-orange transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/60 hover:text-theme-orange transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Visitors Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-theme-gray p-4 rounded-lg">
                  <div className="text-xl font-bold text-theme-orange">Total Visitors</div>
                  <p className="text-white/60 text-sm">{totalVisitors.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2024. India Digital Vision</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/contact" className="text-white/60 hover:text-theme-orange text-sm transition-colors">
                Contact Us
              </Link>
              <Link to="#" className="text-white/60 hover:text-theme-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/60 hover:text-theme-orange text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-theme-orange p-3 rounded-full shadow-lg hover:bg-theme-orange/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
