import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SUITES, SuiteOption } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

interface SuitesSectionProps {
  onSelectSuiteForBooking: (suiteId: string) => void;
}

export function SuitesSection({ onSelectSuiteForBooking }: SuitesSectionProps) {
  const [activeSuiteId, setActiveSuiteId] = useState<string>(SUITES[2].id);
  const activeSuite: SuiteOption = SUITES.find((s) => s.id === activeSuiteId) || SUITES[0];

  return (
    <section id="suites" className="py-20 md:py-28 bg-[#0E1113] border-b border-[#1E2429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
              01. Suites &amp; Penthouses
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FBF9F5] leading-[1.12] text-balance">
              Private Residences Above the Horizon
            </h2>
          </div>

          {/* Interactive Suite Tabs */}
          <div
            role="tablist"
            aria-label="Suite Categories"
            className="flex flex-wrap items-center gap-2 bg-[#14181B] p-1.5 border border-[#242B30] self-start lg:self-auto"
          >
            {SUITES.map((suite) => {
              const isSelected = suite.id === activeSuite.id;
              return (
                <button
                  key={suite.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveSuiteId(suite.id)}
                  className={`px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#0B0D0E] font-semibold'
                      : 'text-[#C7BEB0] hover:text-[#FBF9F5]'
                  }`}
                >
                  {suite.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Balanced Split-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-[#121518] border border-[#242B30]">
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[520px]">
            <ResilientImage
              src={activeSuite.image}
              alt={`${activeSuite.name} interior overlooking coastal bay at twilight`}
              className="w-full h-full lg:h-full object-cover"
              fallbackTitle={activeSuite.name}
            />
          </div>

          <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#A8A196] mb-3">
                <span className="text-[#E3BE7F] font-medium">{activeSuite.tier}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{activeSuite.size}</span>
                <span aria-hidden="true">·</span>
                <span>{activeSuite.floor}</span>
                <span aria-hidden="true">·</span>
                <span>{activeSuite.capacity}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#FBF9F5]">
                {activeSuite.name}
              </h3>

              <p className="font-serif italic text-lg text-[#D4AF37] mt-1.5">
                {activeSuite.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#C7BEB0] leading-relaxed mt-5 font-light">
                {activeSuite.description}
              </p>

              <div className="mt-7 pt-6 border-t border-[#242B30]">
                <h4 className="text-xs uppercase tracking-[0.18em] text-[#A8A196] mb-3.5">
                  Architectural Distinctions
                </h4>
                <ul className="space-y-2.5">
                  {activeSuite.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-[#EDE8E1]">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-[#242B30]">
                <p className="text-xs text-[#A8A196] leading-relaxed">
                  Included Privileges:{' '}
                  <span className="text-[#EDE8E1]">
                    {activeSuite.amenities.join(' · ')}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#242B30] flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#A8A196]">Indicative Nightly Rate</p>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#FBF9F5] tabular-nums">
                  €{activeSuite.nightlyRate.toLocaleString()}
                  <span className="text-sm font-sans font-normal text-[#A8A196]"> / night</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectSuiteForBooking(activeSuite.id)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB]"
              >
                <span>Reserve This Suite</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
