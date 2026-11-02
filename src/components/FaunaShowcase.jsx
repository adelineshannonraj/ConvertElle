import React, { useState } from 'react';
import { Eye, ArrowRight, Sparkles, Layers, ShieldCheck, Check, Compass, Info } from 'lucide-react';
import { faunaArchetypes } from '../data/faunaCollection';

export default function FaunaShowcase({ onSelectArchetypeForAtelier }) {
  const [hoveredPortal, setHoveredPortal] = useState(null);

  // 5 interactive hotspots mapped directly to the columns of the master artwork
  const portals = [
    {
      id: 'swan',
      title: 'GRACE',
      subtitle: 'The Swan',
      archetypeId: 'swan',
      leftPercent: '0%',
      widthPercent: '20%',
      accent: '#FAF8F5'
    },
    {
      id: 'tiger',
      title: 'LEAD',
      subtitle: 'The Lioness / Tiger',
      archetypeId: 'tiger',
      leftPercent: '20%',
      widthPercent: '20%',
      accent: '#B45A1D'
    },
    {
      id: 'butterfly',
      title: 'TRANSFORM',
      subtitle: 'The Butterfly',
      archetypeId: 'butterfly',
      leftPercent: '40%',
      widthPercent: '20%',
      accent: '#9C427B'
    },
    {
      id: 'peacock',
      title: 'EXPRESS',
      subtitle: 'The Peacock',
      archetypeId: 'peacock',
      leftPercent: '60%',
      widthPercent: '20%',
      accent: '#0D4D5C'
    },
    {
      id: 'jellyfish',
      title: 'ADAPT',
      subtitle: 'The Marine Realm',
      archetypeId: 'jellyfish',
      leftPercent: '80%',
      widthPercent: '20%',
      accent: '#D47238'
    }
  ];

  return (
    <section id="fauna" className="py-24 relative overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ========================================================================= */}
        {/* GRAND INTRO GATEWAY FOR FAUNA: THE ANIMAL WITHIN MASTER ARTWORK            */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          {/* Header Title */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DDD6CA] bg-white text-xs uppercase tracking-[0.25em] text-[#B89047] font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haute Couture Capsule Intro</span>
            </div>
            
            <h2 className="font-serif text-5xl sm:text-6xl text-[#1A1815] font-normal leading-tight">
              FAUNA <br />
              <span className="italic text-[#B89047] text-3xl sm:text-4xl">The Animal Within</span>
            </h2>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#666057]">
              GRACE ☥ STRENGTH ☥ TRANSFORMATION / INDIVIDUALITY ⚡ ADAPTABILITY
            </p>
          </div>

          {/* Master Artwork Interactive Presentation Frame */}
          <div className="relative rounded-3xl overflow-hidden border border-[#DDD6CA] shadow-2xl bg-[#0D0D0D] group">
            
            {/* The Master Image */}
            <img 
              src="/images/fauna-intro.jpg" 
              alt="FAUNA - The Animal Within Collection" 
              className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Interactive 5-Column Overlay for Desktop Clicking */}
            <div className="absolute inset-0 hidden md:flex z-20">
              {portals.map((p) => {
                const isHovered = hoveredPortal === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => onSelectArchetypeForAtelier(p.archetypeId)}
                    onMouseEnter={() => setHoveredPortal(p.id)}
                    onMouseLeave={() => setHoveredPortal(null)}
                    style={{ width: p.widthPercent }}
                    className="h-full relative cursor-pointer transition-all duration-300 hover:bg-white/10 flex flex-col justify-end p-4 text-center group/col"
                  >
                    {/* Hover Glow Banner */}
                    <div className={`transition-all duration-300 p-3 rounded-2xl backdrop-blur-md border border-white/30 text-white ${
                      isHovered ? 'opacity-100 translate-y-0 bg-black/80 shadow-lg' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">
                        {p.title}
                      </div>
                      <div className="font-serif text-sm font-bold">
                        {p.subtitle}
                      </div>
                      <span className="text-[10px] text-white/80 block mt-0.5 underline">
                        Click to Customize Outfit →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Touch Overlay Hint */}
            <div className="absolute bottom-3 right-3 md:hidden z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-mono text-white">
              Tap below to explore archetypes
            </div>

          </div>

          {/* 5 Interactive Quick-Select Pills directly below image */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pt-2">
            {portals.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectArchetypeForAtelier(p.archetypeId)}
                className="px-4 py-2 rounded-full bg-white border border-[#DDD6CA] hover:border-[#1A1815] text-xs font-serif font-bold text-[#1A1815] hover:text-[#B89047] transition-all shadow-sm flex items-center gap-2"
              >
                <span className="text-[10px] font-mono text-[#B89047] uppercase font-semibold">{p.title}:</span>
                <span>{p.subtitle}</span>
                <ArrowRight className="w-3 h-3 text-[#B89047]" />
              </button>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* INDIVIDUAL ARCHETYPE PRODUCT CARDS                                        */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-8 border-t border-[#E8E2D8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-semibold block">
                Atelier Catalog
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                Choose an Archetype to Configure
              </h3>
            </div>
            <p className="text-xs text-[#666057] max-w-md font-light leading-relaxed">
              Every archetype is tailored with concealed magnetic docking, allowing instant conversion between The Base Garment and The Full Haute Couture Suite.
            </p>
          </div>

          {/* 6 Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faunaArchetypes.map((arch) => {
              const basePrice = 680;
              const expressionPrice = parseInt(arch.kits[0].price.replace(/[^0-9]/g, ''), 10);
              const statementPrice = parseInt(arch.kits[1].price.replace(/[^0-9]/g, ''), 10);
              const couturePrice = parseInt(arch.kits[2].price.replace(/[^0-9]/g, ''), 10);
              const fullSuitePrice = basePrice + expressionPrice + statementPrice + couturePrice;

              return (
                <div
                  key={arch.id}
                  className="rounded-3xl bg-white border border-[#E8E2D8] hover:border-[#B89047] transition-all duration-300 shadow-sm hover:shadow-luxury flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Visual Header */}
                  <div 
                    className="p-6 relative overflow-hidden flex flex-col justify-between min-h-[190px]"
                    style={{
                      backgroundColor: '#FAF8F5',
                      borderBottom: '1px solid #E8E2D8'
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{ backgroundColor: arch.palette[0].hex }}
                    />

                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B89047] font-bold px-2.5 py-1 rounded-full bg-white border border-[#DDD6CA]">
                        {arch.identity}
                      </span>
                      <span className="text-[11px] font-mono text-[#666057] italic">
                        {arch.latin}
                      </span>
                    </div>

                    <div className="my-auto text-center py-3 z-10">
                      <h4 className="font-serif text-3xl font-semibold text-[#1A1815] group-hover:text-[#B89047] transition-colors">
                        {arch.name}
                      </h4>
                      <p className="text-xs text-[#666057] italic mt-1 font-serif max-w-xs mx-auto">
                        "{arch.quote}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#666057] z-10">
                      <span>Base: ${basePrice}</span>
                      <span className="text-[#1A1815] font-bold">Couture: ${fullSuitePrice.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Card Body & Specs */}
                  <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                        {arch.tagline}
                      </p>

                      {/* Lookbook Live Photos Badge */}
                      {arch.gallery && arch.gallery.length > 0 && (
                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                          <span className="text-[10px] font-mono uppercase text-[#B89047] font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#B89047]" />
                            <span>Base to Couture Lookbook</span>
                          </span>
                          <div className="flex items-center gap-1">
                            {arch.gallery.slice(0, 2).map((img, idx) => (
                              <img
                                key={idx}
                                src={img.src}
                                alt={img.title}
                                className="w-6 h-6 rounded-md object-cover border border-[#DDD6CA]"
                                title={img.title}
                              />
                            ))}
                            {arch.gallery.length > 2 && (
                              <span className="text-[9px] font-mono text-[#666057] px-1 rounded bg-white border border-[#DDD6CA]">
                                +{arch.gallery.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Materials pills */}
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#666057] block">
                          Couture Fabrication:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {arch.materials.slice(0, 3).map((mat, i) => (
                            <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] text-[#4A453F]">
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Color Swatches */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#666057] block">
                          Palette Accents:
                        </span>
                        <div className="flex items-center gap-1.5">
                          {arch.palette.map((c, i) => (
                            <span
                              key={i}
                              title={c.name}
                              className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <button
                      onClick={() => onSelectArchetypeForAtelier(arch.id)}
                      className="w-full py-3.5 rounded-full bg-[#1A1815] hover:bg-[#33302B] text-white font-medium text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 group-hover:bg-[#B89047]"
                    >
                      <span>Customize & Shop Design</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
