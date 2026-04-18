import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Zap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Safety', href: '/#safety' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && location === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" data-testid="nav-logo">
          <div className="bg-primary text-black p-1.5 rounded-md flex items-center justify-center">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            Rapido<span className="text-primary">Ride</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#') && location === '/') {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }
              }}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
          <Link href="/login">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 hover:text-white" data-testid="nav-login-btn">
              Login
            </Button>
          </Link>
          <Link href="/book">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold" data-testid="nav-book-btn">
              Book Ride
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="nav-mobile-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black absolute w-full px-4 py-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#') && location === '/') {
                  e.preventDefault();
                  handleLinkClick(link.href);
                } else {
                  handleLinkClick(link.href);
                }
              }}
              className="text-base font-medium text-gray-300 hover:text-primary py-2 block"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                Login
              </Button>
            </Link>
            <Link href="/book" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-black font-bold">
                Book Ride
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}