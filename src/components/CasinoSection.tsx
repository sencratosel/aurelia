import { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { CASINO_SALONS, RESORT_IMAGES } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

interface CasinoSectionProps {
  onOpenGamingPolicy: () => void;
  onInquireSalon: () => void;
}

export function CasinoSection({ onOpenGamingPolicy, onInquireSalon }: CasinoSectionProps) {
  const [activeSalonId, setActiveSalonId] = useState(CASINO_SALONS[0].id);
  const activeSalon = CASINO_SALONS.find((s) => s.id === activeSalonId) || CASINO_SALONS[0];

  return (
    <section id="casino" className="py-20 md:py-28 bg-[#0B0D0E] border-b border-[#1E2429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
            02. Private Gaming Salons
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FBF9F5] leading-[1.12] text-balance">
            Salon Noir &amp; Championship Tables
          </h2>
          <p className="text-sm sm:text-base text-[#C7BEB0] mt-4 font-light leading-relaxed">
            Fourteen private salons and a sweeping limestone gaming hall crafted in walnut, emerald baize,
            and warm architectural light.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Salon Switcher & Details */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#121518] border border-[#242B30] p-7 sm:p-10">
            <div>
              <div
                role="tablist"
                aria-label="Gaming Salons"
                className="flex flex-wrap gap-2 pb-6 border-b border-[#242B30]"
              >
                {CASINO_SALONS.map((salon) => {
                  const selected = salon.id === activeSalon.id;
                  return (
                    <button
                      key={salon.id}
                      role="tab"
                      type="button"
                      aria-selected={selected}
                      onClick={() => setActiveSalonId(salon.id)}
                      className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                        selected
                          ? 'bg-[#D4AF37] text-[#0B0D0E] font-semibold'
                          : 'bg-[#181C20] text-[#C7BEB0] hover:text-[#FBF9F5]'
                      }`}
                    >
                      {salon.title}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A8A196] mb-3">
                  <span className="text-[#E3BE7F] font-medium">{activeSalon.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums text-[#EDE8E1]">{activeSalon.limits}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeSalon.attire}</span>
                </div>

                <h3 className="font-serif text-3xl font-medium text-[#FBF9F5]">
                  {activeSalon.title}
                </h3>

                <p className="text-sm sm:text-base text-[#C7BEB0] leading-relaxed mt-4 font-light">
                  {activeSalon.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-[#242B30] pt-6">
                  {activeSalon.highlights.map((item) => (
                    <li key={item} className="text-sm text-[#EDE8E1] flex items-start gap-3">
                      <span className="text-[#D4AF37] font-serif text-base leading-none mt-0.5" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#242B30] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={onOpenGamingPolicy}
                className="inline-flex items-center gap-2 text-xs text-[#A8A196] hover:text-[#E3BE7F] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span>18+ Responsible Gaming &amp; Salon Entry Policy</span>
              </button>

              <button
                type="button"
                onClick={onInquireSalon}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#0B0D0E] text-[#E3BE7F] text-xs font-semibold uppercase tracking-[0.14em] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Request Private Table</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Salon Noir Photograph */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[540px] border border-[#242B30]">
            <ResilientImage
              src={RESORT_IMAGES.casino}
              alt="Salon Noir private high-limit baccarat and roulette tables under crystal chandeliers"
              className="w-full h-full lg:h-full object-cover"
              fallbackTitle="Salon Noir High-Limit Gaming"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
