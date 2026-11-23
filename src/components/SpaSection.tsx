import { ArrowRight } from 'lucide-react';
import { RESORT_IMAGES, SPA_TREATMENTS } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

interface SpaSectionProps {
  onReserveSpa: (treatmentTitle: string) => void;
}

export function SpaSection({ onReserveSpa }: SpaSectionProps) {
  return (
    <section id="wellness" className="py-20 md:py-28 bg-[#0B0D0E] border-b border-[#1E2429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
            04. Celestial Thermal Spa
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FBF9F5] leading-[1.12] text-balance">
            Restorative Stillness Above the Sea
          </h2>
          <p className="text-sm sm:text-base text-[#C7BEB0] mt-4 font-light leading-relaxed">
            A 35,000-square-foot coastal sanctuary sculpted in dark basalt stone, thermal saltwater pools,
            and quiet cedar treatment suites.
          </p>
        </div>

        {/* Wide Atmospheric Spa Visual */}
        <div className="relative aspect-[16/9] max-h-[520px] w-full overflow-hidden border border-[#242B30] mb-10">
          <ResilientImage
            src={RESORT_IMAGES.spa}
            alt="Celestial Thermal Spa heated saltwater infinity pool overlooking the sea at twilight"
            className="w-full h-full object-cover"
            fallbackTitle="Celestial Thermal Spa Sanctuary"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/30 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs text-[#E3BE7F] mb-1">Daily Thermal Sanctuary · 07:00 – 22:00</p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">
                Heated Saltwater Infinity Colonnade
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onReserveSpa('Celestial Thermal Hydrotherapy Circuit')}
              className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB]"
            >
              Reserve Thermal Access
            </button>
          </div>
        </div>

        {/* 2x2 Signature Rituals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPA_TREATMENTS.map((ritual) => (
            <div
              key={ritual.id}
              className="bg-[#121518] border border-[#242B30] p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A8A196] mb-3">
                  <span>
                    <span className="text-[#E3BE7F]">{ritual.category}</span>
                    <span aria-hidden="true" className="mx-2">·</span>
                    <span className="tabular-nums">{ritual.duration}</span>
                  </span>
                  <span className="font-mono tabular-nums text-[#EDE8E1]">€{ritual.price}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#FBF9F5]">{ritual.title}</h3>
                <p className="text-sm text-[#C7BEB0] leading-relaxed mt-3 font-light">
                  {ritual.description}
                </p>
                <p className="text-xs text-[#A8A196] mt-4">
                  Benefit: <span className="text-[#EDE8E1]">{ritual.benefits}</span>
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#242B30] flex justify-end">
                <button
                  type="button"
                  onClick={() => onReserveSpa(ritual.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E3BE7F] hover:text-[#FBF9F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Reserve Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
