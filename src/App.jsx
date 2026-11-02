import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ModularAtelier from './components/ModularAtelier';
import FaunaShowcase from './components/FaunaShowcase';
import TheWoman from './components/TheWoman';
import OccasionTimeline from './components/OccasionTimeline';
import BrandPillars from './components/BrandPillars';
import InvestmentModel from './components/InvestmentModel';
import WardrobeDrawer from './components/WardrobeDrawer';
import CustomFitModal from './components/CustomFitModal';
import AnimalProductPage from './components/AnimalProductPage';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'product'
  const [activeArchetypeId, setActiveArchetypeId] = useState('butterfly');

  const [wardrobeOpen, setWardrobeOpen] = useState(false);
  const [customFitOpen, setCustomFitOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Initial wardrobe bag with 1 curated starter capsule
  const [wardrobeItems, setWardrobeItems] = useState([
    {
      id: 'initial-sample-01',
      baseName: 'The Sovereign Column Dress',
      baseFabric: 'Cruelty-free Italian Silk Crepe & Satin Duchesse',
      archetypeName: 'The Butterfly',
      stage: 4,
      stageName: 'Couture Kit Suite',
      occasion: 'Grand Galas & Red Carpets',
      price: 3800,
      size: 'US 4',
      color: 'Amethyst Violet',
      includedKits: [
        { name: 'Luminescent Wing Epaulets ($480)' },
        { name: 'Graduated Butterfly Peplum ($790)' },
        { name: 'Sovereign Metamorphosis Train & Wings ($1,850)' }
      ]
    }
  ]);

  const handleAddToCart = (newItem) => {
    setWardrobeItems((prev) => [newItem, ...prev]);
  };

  const handleRemoveItem = (id) => {
    setWardrobeItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setWardrobeOpen(false);
    setCheckoutSuccess(true);
  };

  const handleOpenProductPage = (archetypeId) => {
    setActiveArchetypeId(archetypeId);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1815] font-sans selection:bg-[#B89047] selection:text-white relative">
      
      {/* Sticky Luxury Navbar */}
      <Navbar
        wardrobeCount={wardrobeItems.length}
        onOpenWardrobe={() => setWardrobeOpen(true)}
        onOpenCustomFit={() => setCustomFitOpen(true)}
        onSelectAnimal={(id) => handleOpenProductPage(id)}
        onGoHome={handleBackToHome}
        isProductView={currentView === 'product'}
      />

      {/* Main View Router */}
      {currentView === 'product' ? (
        /* Dedicated Luxury Individual Animal Product Page */
        <AnimalProductPage
          archetypeId={activeArchetypeId}
          onBack={handleBackToHome}
          onSelectArchetype={(id) => {
            setActiveArchetypeId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onAddToCart={handleAddToCart}
          onOpenCustomFit={() => setCustomFitOpen(true)}
        />
      ) : (
        /* Full Runway Experience */
        <main>
          {/* 1. Hero: Haute Metamorphosis */}
          <Hero
            onExploreAtelier={() => {
              const el = document.getElementById('atelier');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onExploreFauna={() => {
              const el = document.getElementById('fauna');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 2. The Problem vs The Opportunity */}
          <ProblemSolution />

          {/* 3. The Signature Modular Atelier */}
          <ModularAtelier
            onAddToCart={handleAddToCart}
            onOpenCustomFit={() => setCustomFitOpen(true)}
          />

          {/* 4. The FAUNA Capsule Collection (6 Archetypes) */}
          <FaunaShowcase
            onSelectArchetypeForAtelier={(id) => handleOpenProductPage(id)}
          />

          {/* 5. The ConvertElle Woman (Constellation Persona) */}
          <TheWoman />

          {/* 6. 24-Hour Day-in-the-Life Metamorphosis Timeline */}
          <OccasionTimeline
            onLaunchAtelier={() => {
              const el = document.getElementById('atelier');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 7. Brand Pillars, Aphrodite Inspiration & Color Palette */}
          <BrandPillars />

          {/* 8. Investment Allocation & Revenue Model */}
          <InvestmentModel />
        </main>
      )}

      {/* Luxury Footer */}
      <Footer
        onOpenCustomFit={() => setCustomFitOpen(true)}
        onOpenAtelier={() => {
          if (currentView === 'product') {
            setCurrentView('home');
            setTimeout(() => {
              const el = document.getElementById('atelier');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            const el = document.getElementById('atelier');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Slide-over Wardrobe Bag Drawer */}
      <WardrobeDrawer
        isOpen={wardrobeOpen}
        onClose={() => setWardrobeOpen(false)}
        items={wardrobeItems}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Bespoke Custom Fit Consultation Modal */}
      <CustomFitModal
        isOpen={customFitOpen}
        onClose={() => setCustomFitOpen(false)}
      />

      {/* Checkout Success Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E8E2D8] p-8 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F5] border border-[#B89047] flex items-center justify-center text-[#B89047]">
              <span className="text-2xl">✨</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-bold">
                Capsule Order Reserved
              </span>
              <h3 className="font-serif text-3xl text-[#1A1815] font-bold">
                Your Modular Wardrobe is Being Hand-Numbered
              </h3>
              <p className="text-sm text-[#4A453F] font-light leading-relaxed">
                Your ConvertElle modular foundation and magnetic detachable attachments have been securely logged with our Master Atelier. A dedicated concierge will reach out to finalize your bespoke packaging and delivery protocol.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057]">
              Order Reference: <span className="text-[#1A1815] font-bold">CVE-{(Math.random() * 100000 | 0).toString().padStart(6, '0')}</span>
            </div>

            <button
              onClick={() => {
                setCheckoutSuccess(false);
                setWardrobeItems([]);
              }}
              className="px-8 py-3.5 rounded-full bg-[#1A1815] hover:bg-[#33302B] text-white font-semibold text-xs uppercase tracking-widest transition-colors shadow-sm"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
