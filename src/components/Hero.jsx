import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, RefreshCw, Eye, ShieldCheck } from 'lucide-react';

const occasions = [
  { name: 'Conference', time: '09:00', look: 'Minimalist Crepe Sheath', tag: 'The Base' },
  { name: 'Dinner', time: '18:30', look: 'Brocade Sleeve & Collar Kit', tag: '+ Expression Kit' },
  { name: 'Cocktail', time: '20:30', look: 'Sculptured Peplum & Belt', tag: '+ Statement Kit' },
  { name: 'Gala', time: '22:00', look: 'Cascading Organza Wings & Train', tag: '+ Couture Kit' }
];

export default function Hero({ onExploreAtelier, onExploreFauna }) {
  const [activeOccasionIndex, setActiveOccasionIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOccasionIndex((prev) => (prev + 1) % occasions.length);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  const activeOccasion = occasions[activeOccasionIndex];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF8F5]">
      
      {/* Soft Ambient Warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-convertelle-sand/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-convertelle-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Vision & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DDD6CA] bg-white text-xs uppercase tracking-[0.22em] text-[#666057] font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B89047]" />
              <span>Modular Luxury Fashion</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-[#1A1815]">
                One Garment. <br />
                <span className="italic text-[#B89047] font-light">Endless you.</span>
              </h1>
              <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#666057] font-medium pt-1">
                One woman. Many identities. Endless possibilities.
              </p>
            </div>

            {/* Readable Body Copy */}
            <p className="text-base sm:text-lg text-[#33302B] max-w-2xl font-light leading-relaxed font-sans">
              ConvertElle transforms sophisticated formalwear into expressive evening and couture looks through interchangeable and detachable elements. Wear one tailored base all day, then metamorphose for any room in 30 seconds.
            </p>

            {/* Clean Occasion Metamorphosis Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E2D8] shadow-luxury space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F2EDE4]">
                <div className="flex items-center gap-2 text-[#1A1815]">
                  <RefreshCw className="w-4 h-4 text-[#B89047]" />
                  <span className="text-xs uppercase tracking-widest font-semibold font-mono">Occasion Metamorphosis</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {occasions.map((occ, idx) => (
                    <button
                      key={occ.name}
                      onClick={() => setActiveOccasionIndex(idx)}
                      className={`text-xs px-3 py-1 rounded-full transition-all duration-300 font-medium ${
                        activeOccasionIndex === idx
                          ? 'bg-[#1A1815] text-white shadow-sm'
                          : 'bg-[#F2EDE4] text-[#666057] hover:text-[#1A1815]'
                      }`}
                    >
                      {occ.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs tracking-wider uppercase text-[#B89047] font-mono font-semibold">
                    {activeOccasion.time} hrs • {activeOccasion.tag}
                  </div>
                  <div className="text-xl font-serif text-[#1A1815] font-semibold mt-0.5">
                    {activeOccasion.look}
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] tracking-wider uppercase text-[#666057] block font-mono">Conversion Time</span>
                  <span className="text-xs font-mono font-bold text-[#1A1815]">under 30 sec</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <a
                href="#fauna"
                onClick={onExploreFauna}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1A1815] hover:bg-[#33302B] text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#B89047]" />
                <span>Explore 6 FAUNA Designs</span>
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#DDD6CA] bg-white hover:border-[#B89047] text-[#1A1815] text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm font-medium"
              >
                <span>How Modularity Works</span>
                <ArrowRight className="w-4 h-4 text-[#B89047]" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E8E2D8] text-center sm:text-left">
              <div>
                <div className="text-2xl font-serif text-[#1A1815] font-bold">1</div>
                <div className="text-xs tracking-wider uppercase text-[#666057]">Base Garment</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-[#1A1815] font-bold">4+</div>
                <div className="text-xs tracking-wider uppercase text-[#666057]">Occasions</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-[#B89047] font-bold">6</div>
                <div className="text-xs tracking-wider uppercase text-[#666057]">FAUNA Designs</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-[#1A1815] font-bold">100%</div>
                <div className="text-xs tracking-wider uppercase text-[#666057]">Cruelty Free</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-md aspect-[3/4] p-3 rounded-3xl border border-[#DDD6CA] bg-white shadow-luxury">
              
              <div className="w-full h-full rounded-2xl border border-[#E8E2D8] p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-white">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#1A1815] uppercase px-3 py-1 rounded-full bg-white border border-[#DDD6CA] shadow-sm font-semibold">
                    ConvertElle Atelier
                  </span>
                  <span className="text-[10px] font-cinzel text-[#666057] tracking-widest uppercase">
                    Stage 0{activeOccasionIndex + 1}
                  </span>
                </div>

                {/* Silhouette SVG Visual */}
                <div className="relative flex-1 flex items-center justify-center my-3">
                  <svg viewBox="0 0 300 400" className="w-full h-full max-h-[330px]">
                    
                    {/* Stage 4: Couture Wings/Train */}
                    <g opacity={activeOccasionIndex >= 3 ? "1" : "0.15"} className="transition-opacity duration-500">
                      <path d="M150,150 C80,80 30,120 40,210 C50,260 110,240 140,220 Z" fill="#C5A059" opacity="0.6" stroke="#B89047" strokeWidth="1" />
                      <path d="M150,150 C220,80 270,120 260,210 C250,260 190,240 160,220 Z" fill="#C5A059" opacity="0.6" stroke="#B89047" strokeWidth="1" />
                      <path d="M110,310 C60,370 40,390 10,395 C70,395 120,380 150,380 C180,380 230,395 290,395 C260,390 240,370 190,310 Z" 
                            fill="#F2EDE4" stroke="#B89047" strokeWidth="1.2" />
                    </g>

                    {/* Stage 3: Statement Overskirt / Peplum */}
                    <g opacity={activeOccasionIndex >= 2 ? "1" : "0.2"} className="transition-opacity duration-500">
                      <path d="M115,210 C90,260 85,290 80,330 C120,335 180,335 220,330 C215,290 210,260 185,210 Z" 
                            fill="#E8E2D8" stroke="#1A1815" strokeWidth="1.5" />
                      <path d="M115,210 Q150,225 185,210 Q150,218 115,210" fill="#B89047" />
                    </g>

                    {/* Stage 2: Expression Sleeves */}
                    <g opacity={activeOccasionIndex >= 1 ? "1" : "0.2"} className="transition-opacity duration-500">
                      <path d="M105,120 C75,130 65,170 75,200 C85,200 95,165 112,145 Z" fill="#33302B" />
                      <path d="M195,120 C225,130 235,170 225,200 C215,200 205,165 188,145 Z" fill="#33302B" />
                    </g>

                    {/* Stage 1: Core Base Garment */}
                    <g>
                      <circle cx="150" cy="70" r="16" fill="#1A1815" />
                      <path d="M142,86 L158,86 L165,115 L188,125 L185,210 L175,340 L125,340 L115,210 L112,125 L135,115 Z" 
                            fill="#1A1815" />
                      {/* Concealed Magnetic Snap Points */}
                      <circle cx="120" cy="130" r="3" fill="#B89047" />
                      <circle cx="180" cy="130" r="3" fill="#B89047" />
                      <circle cx="130" cy="210" r="3" fill="#B89047" />
                      <circle cx="170" cy="210" r="3" fill="#B89047" />
                    </g>
                  </svg>
                </div>

                {/* Meta Badge */}
                <div className="z-10 bg-white rounded-xl p-3 border border-[#E8E2D8] shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#666057] uppercase tracking-wider block font-mono">Current Silhouette</span>
                    <span className="text-xs font-serif font-bold text-[#1A1815]">{activeOccasion.tag}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#B89047] font-mono font-bold block">Magnetic Dock</span>
                    <span className="text-[11px] text-[#1A1815]">Concealed Seam</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
