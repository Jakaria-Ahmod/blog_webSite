import { Menu as MenuIcon, X } from 'lucide-react'; // hamburger icon
import React from 'react';
import Logo from './components/Logo';
import Menu from './components/Menu';

const Heder: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-[21px] px-4 md:px-0">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <Menu />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <Menu />
        </div>
      )}
    </header>
  );
};

export default Heder;
