import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-2 rounded-xl">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              DropCart
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors rounded-lg">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors rounded-lg">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors rounded-lg">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors rounded-lg">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors rounded-lg">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-lg font-semibold">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
