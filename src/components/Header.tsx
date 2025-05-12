import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Palette } from 'lucide-react';
import Button from './common/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">ThemeForge</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#themes">Themes</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-blue-700 font-medium transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tutorials</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
              </div>
            </div>
            
            <NavLink href="#pricing">Pricing</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              Login
            </a>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <a href="#themes" className="block py-2 text-gray-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>
              Themes
            </a>
            <a href="#features" className="block py-2 text-gray-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>
              Features
            </a>
            <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>
              How It Works
            </a>
            <a href="#pricing" className="block py-2 text-gray-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>
              Pricing
            </a>
            <a href="#" className="block py-2 text-gray-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>
              Resources
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a href="#" className="block py-2 text-gray-600 hover:text-blue-700 font-medium" onClick={toggleMenu}>
                Login
              </a>
              <div className="mt-2">
                <Button fullWidth>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-blue-700 font-medium transition-colors"
  >
    {children}
  </a>
);

export default Header;