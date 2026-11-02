import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { faunaArchetypes } from '../data/faunaCollection';

export default function Navbar({ 
  onOpenWardrobe, 
  wardrobeCount, 
  onOpenCustomFit, 
  onSelectAnimal, 
  onGoHome,
  isProductView 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faunaDropdownOpen, setFaunaDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAUNA Collection', href: '#fauna' },
    { name: 'Modular Atelier', href: '#atelier' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Day-to-Night', href: '#timeline' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] py-3.5 shadow-sm' 
        : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#E8E2D8]/60 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <div 
            onClick={onGoHome}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-9 h-9 transition-transform duration-500 group-hover:scale-105">
                <path d="M48,50 C30,35 15,30 20,15 C28,10 42,25 48,45 Z" fill="#B89047" opacity="0.9" />
                <path d="M48,50 C30,60 18,70 24,85 C32,88 44,70 48,55 Z" fill="#B89047" opacity="0.8" />
                <path d="M48,50 C35,42 28,32 32,22" stroke="#FAF8F5" strokeWidth="1.2" fill="none" />
                <path d="M48,50 C36,58 30,68 34,78" stroke="#FAF8F5" strokeWidth="1.2" fill="none" />
                <path d="M52,20 C75,12 85,32 70,45 C85,55 80,82 55,82 C48,82 50,72 56,72 C68,72 72,58 64,52 C58,48 54,48 52,48 L52,52" 
                      fill="none" stroke="#1A1815" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M52,22 L52,78" stroke="#1A1815" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel tracking-[0.25em] text-lg font-bold text-[#1A1815]">
                CONVERTELLE
              </span>
              <span className="text-[9px] tracking-[0.28em] uppercase text-[#666057] font-sans -mt-0.5">
                Haute Modularity
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            
            <button
              onClick={onGoHome}
              className={`text-xs uppercase tracking-[0.16em] transition-colors py-1 relative ${
                !isProductView ? 'text-[#B89047] font-bold' : 'text-[#33302B] hover:text-[#B89047]'
              }`}
            >
              Runway Overview
              {!isProductView && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B89047]" />}
            </button>

            {/* FAUNA Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setFaunaDropdownOpen(true)}
              onMouseLeave={() => setFaunaDropdownOpen(false)}
            >
              <button
                className={`text-xs uppercase tracking-[0.16em] transition-colors py-1 flex items-center gap-1 ${
                  isProductView ? 'text-[#B89047] font-bold' : 'text-[#33302B] hover:text-[#B89047]'
                }`}
              >
                <span>6 Animal Designs</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#B89047]" />
              </button>

              {faunaDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="p-2.5 rounded-2xl bg-white border border-[#E8E2D8] shadow-luxury space-y-1">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#666057] px-3 py-1 border-b border-[#F2EDE4]">
                      Choose Archetype
                    </div>
                    {faunaArchetypes.map((arch) => (
                      <button
                        key={arch.id}
                        onClick={() => {
                          setFaunaDropdownOpen(false);
                          onSelectAnimal(arch.id);
                        }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-[#F2EDE4] transition-all flex items-center justify-between text-[#1A1815] group"
                      >
                        <span className="font-serif font-medium group-hover:text-[#B89047]">
                          {arch.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#666057]">
                          {arch.identity}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (isProductView) onGoHome();
                }}
                className="text-xs uppercase tracking-[0.16em] text-[#33302B] hover:text-[#B89047] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89047] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Cruelty-Free Badge */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#E8E2D8] bg-white text-[10px] tracking-wider text-[#666057] font-medium shadow-sm">
              <Sparkles className="w-3 h-3 text-[#B89047]" />
              <span>100% Cruelty-Free</span>
            </div>

            {/* Custom Fit button */}
            <button
              onClick={onOpenCustomFit}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-widest text-[#1A1815] border border-[#DDD6CA] rounded-full hover:border-[#B89047] hover:bg-white transition-all bg-[#F2EDE4]/60 font-medium"
            >
              <span>Custom Fit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B89047]" />
            </button>

            {/* Wardrobe Bag Button */}
            <button
              onClick={onOpenWardrobe}
              className="relative p-2.5 rounded-full border border-[#DDD6CA] hover:border-[#B89047] bg-white text-[#1A1815] transition-all shadow-sm group"
              aria-label="View Wardrobe Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#1A1815] group-hover:text-[#B89047] transition-colors" />
              {wardrobeCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#1A1815] text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                  {wardrobeCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1815] hover:text-[#B89047]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E2D8] px-6 py-6 transition-all duration-300 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGoHome();
              }}
              className="text-left text-sm uppercase tracking-widest text-[#B89047] font-bold py-1 border-b border-[#F2EDE4]"
            >
              Runway Overview
            </button>

            <div className="space-y-1.5 pt-1 border-b border-[#F2EDE4] pb-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#666057] block mb-1">
                Explore The 6 Animal Designs:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {faunaArchetypes.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectAnimal(a.id);
                    }}
                    className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-left text-xs font-serif text-[#1A1815] hover:text-[#B89047]"
                  >
                    {a.name}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (isProductView) onGoHome();
                }}
                className="text-sm uppercase tracking-widest text-[#1A1815] hover:text-[#B89047] py-1 border-b border-[#F2EDE4]"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomFit();
              }}
              className="mt-3 w-full py-3 text-xs uppercase tracking-widest text-white bg-[#1A1815] font-semibold rounded-full hover:bg-[#33302B] transition-colors text-center"
            >
              Book Bespoke Fitting
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
