import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DINING_VENUES, RESORT_IMAGES } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

interface DiningSectionProps {
  onReserveTable: (venueName: string) => void;
}

export function DiningSection({ onReserveTable }: DiningSectionProps) {
  const [activeVenueId, setActiveVenueId] = useState(DINING_VENUES[0].id);
  const activeVenue = DINING_VENUES.find((v) => v.id === activeVenueId) || DINING_VENUES[0];

  return (
    <section id="dining" className="py-20 md:py-28 bg-[#0E1113] border-b border-[#1E2429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
              03. Haute Gastronomy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FBF9F5] leading-[1.12] text-balance">
              Culinary Devotion &amp; Rare Vintages
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Dining Venues"
            className="flex flex-wrap gap-2 bg-[#14181B] p-1.5 border border-[#242B30] self-start lg:self-auto"
          >
            {DINING_VENUES.map((venue) => {
              const selected = venue.id === activeVenue.id;
              return (
                <button
                  key={venue.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActiveVenueId(venue.id)}
                  className={`px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    selected
                      ? 'bg-[#D4AF37] text-[#0B0D0E] font-semibold'
                      : 'text-[#C7BEB0] hover:text-[#FBF9F5]'
                  }`}
                >
                  {venue.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Gastronomy Visual & Chef Quote */}
          <div className="lg:col-span-5 flex flex-col bg-[#121518] border border-[#242B30]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <ResilientImage
                src={RESORT_IMAGES.dining}
                alt="Seared Miyazaki A5 Wagyu with shaved black truffle and gold leaf at L'Aura Gastronomie"
                className="w-full h-full object-cover"
                fallbackTitle={activeVenue.name}
              />
            </div>

            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
              <blockquote className="font-serif italic text-xl text-[#EDE8E1] leading-relaxed">
                &ldquo;Cooking is an act of devotion where every ingredient must speak its purest truth.&rdquo;
              </blockquote>
              <div className="mt-6 pt-5 border-t border-[#242B30] text-xs text-[#A8A196] space-y-1.5">
                <p className="text-[#E3BE7F] font-medium">{activeVenue.chef}</p>
                <p>{activeVenue.hours}</p>
                <p>{activeVenue.dressCode}</p>
              </div>
            </div>
          </div>

          {/* Right: Tasting Journey */}
          <div className="lg:col-span-7 bg-[#121518] border border-[#242B30] p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs text-[#E3BE7F] mb-2">{activeVenue.cuisine}</p>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#FBF9F5]">
                {activeVenue.name}
              </h3>
              <p className="font-serif italic text-lg text-[#C7BEB0] mt-1">
                {activeVenue.tagline}
              </p>
              <p className="text-sm sm:text-base text-[#C7BEB0] leading-relaxed mt-4 font-light">
                {activeVenue.description}
              </p>

              <div className="mt-8 pt-6 border-t border-[#242B30]">
                <h4 className="text-xs uppercase tracking-[0.18em] text-[#A8A196] mb-4">
                  Seasonal Tasting Highlights
                </h4>
                <div className="divide-y divide-[#242B30]">
                  {activeVenue.tastingMenu.map((item) => (
                    <div key={item.dish} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-serif text-xl text-[#FBF9F5]">{item.dish}</span>
                        <span className="text-xs text-[#A8A196]">{item.course}</span>
                      </div>
                      <p className="text-sm text-[#C7BEB0] mt-1 font-light">{item.description}</p>
                      <p className="text-xs text-[#E3BE7F] mt-1.5">
                        Sommelier Pairing: {item.pairing}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#242B30] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#A8A196]">
                Private dining rooms available for parties up to 14 guests.
              </p>
              <button
                type="button"
                onClick={() => onReserveTable(activeVenue.name)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB]"
              >
                <span>Request Private Table</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
