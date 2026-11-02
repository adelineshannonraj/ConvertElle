import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Shield, HeartHandshake, Check } from 'lucide-react';

export default function Footer({ onOpenCustomFit, onOpenAtelier }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#FAF8F5] border-t border-[#E8E2D8] text-[#33302B] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Newsletter Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#DDD6CA] bg-[#FAF8F5] text-[10px] uppercase font-mono tracking-widest text-[#B89047] font-bold">
                <Sparkles className="w-3 h-3" />
                <span>ConvertElle Private Circle</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#1A1815]">
                Be the first to access limited FAUNA drops.
              </h3>
              <p className="text-xs text-[#666057] font-light max-w-lg leading-relaxed">
                Receive private invites to our seasonal archetype releases and fitting salons in Paris, New York, and London.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Welcome to the Private Circle. Your invite is registered.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3 rounded-full bg-[#FAF8F5] border border-[#DDD6CA] text-[#1A1815] text-xs placeholder:text-[#666057] focus:border-[#1A1815] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#1A1815] hover:bg-[#33302B] text-white font-semibold text-xs uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Request Entry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2 space-y-3">
            <span className="font-cinzel tracking-[0.25em] text-lg font-bold text-[#1A1815] block">
              CONVERTELLE
            </span>
            <p className="font-serif italic text-lg text-[#1A1815]">
              "One Garment. Endless you."
            </p>
            <p className="text-xs text-[#666057] font-light leading-relaxed max-w-sm">
              Modular luxury formalwear designed for the modern woman who refuses to be defined by a single identity.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#B89047] font-semibold pt-1">
              <Shield className="w-3.5 h-3.5" />
              <span>100% Cruelty-Free Biomimicry</span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-cinzel text-[#1A1815] font-bold block">
              FAUNA Designs
            </span>
            <ul className="space-y-2 text-xs text-[#666057]">
              <li>The Butterfly (Transformation)</li>
              <li>The Peacock (Individuality)</li>
              <li>The Tiger (Strength)</li>
              <li>The Swan (Grace)</li>
              <li>The Leopard (Confidence)</li>
              <li>The Jellyfish (Fluidity)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-cinzel text-[#1A1815] font-bold block">
              Architecture
            </span>
            <ul className="space-y-2 text-xs text-[#666057]">
              <li>The Base Garment</li>
              <li>Expression Kit</li>
              <li>Statement Kit</li>
              <li>Couture Gown Suite</li>
              <li>Occasion Timeline</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-cinzel text-[#1A1815] font-bold block">
              Atelier Service
            </span>
            <ul className="space-y-2 text-xs text-[#666057]">
              <li>
                <button onClick={onOpenCustomFit} className="text-left hover:text-[#B89047] transition-colors flex items-center gap-1 font-semibold text-[#1A1815]">
                  <span>Book Custom Fit</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B89047]" />
                </button>
              </li>
              <li>Aphrodite Provenance</li>
              <li>The ConvertElle Woman</li>
              <li>New York • Paris • Milan</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#666057] font-mono gap-4">
          <div>
            © {new Date().getFullYear()} ConvertElle Haute Modularity. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Cruelty-Free Biomimicry</span>
            <span>Patent-Pending Magnetic Clasp</span>
            <span>Ethical Luxury</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
