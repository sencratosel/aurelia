import { useState, FormEvent } from 'react';
import { Calendar, Users, BedDouble } from 'lucide-react';
import { RESORT_IMAGES, SUITES } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

export interface QuickInquiryParams {
  suiteId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface HeroProps {
  onQuickReserve: (params: QuickInquiryParams) => void;
  onExploreResort: () => void;
  onViewSuites: () => void;
}

export function Hero({ onQuickReserve, onExploreResort, onViewSuites }: HeroProps) {
  const [suiteId, setSuiteId] = useState('presidential-imperial');
  const [checkIn, setCheckIn] = useState('2026-12-12');
  const [checkOut, setCheckOut] = useState('2026-12-16');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onQuickReserve({ suiteId, checkIn, checkOut, guests });
  };

  return (
    <section
      id="top"
      className="relative min-h-[760px] lg:min-h-[860px] flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#070809]"
    >
      {/* Background Architectural Photograph + Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <ResilientImage
          src={RESORT_IMAGES.hero}
          alt="Aurelia Grand Resort & Casino illuminated travertine arches and reflecting pool at twilight"
          className="w-full h-full object-cover"
          fallbackTitle="Aurelia Grand Resort & Casino"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/55 to-[#0B0D0E]/80"
          aria-hidden="true"
        />
      </div>

      {/* Hero Centerpiece */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 md:pt-16 text-center my-auto">
        <p className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#E3BE7F] mb-5">
          Mediterranean Coast <span aria-hidden="true" className="mx-2 text-[#8E867B]">·</span> Five-Star Sanctuary{' '}
          <span aria-hidden="true" className="mx-2 text-[#8E867B]">·</span> 18+ Private Gaming
        </p>

        <h1 className="font-serif font-semibold text-[#FBF9F5] tracking-[0.04em] leading-[1.06] text-[clamp(2.75rem,5.5vw,4.75rem)] text-balance max-w-4xl mx-auto">
          Aurelia Grand Resort &amp; Casino
        </h1>

        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E3BE7F] mt-4 font-normal">
          Where Luxury Meets Excitement.
        </p>

        <p className="text-sm sm:text-base text-[#D1C7B7] max-w-2xl mx-auto mt-6 leading-relaxed font-light">
          An opulent private coastal enclave uniting grand penthouse suites, discreet high-limit gaming salons,
          Michelin-inspired gastronomy, and restorative thermal hydrotherapy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={onExploreResort}
            className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] font-semibold text-xs uppercase tracking-[0.18em] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB]"
          >
            Explore the Resort
          </button>
          <button
            type="button"
            onClick={onViewSuites}
            className="px-7 py-3.5 bg-[#121518]/90 hover:bg-[#1B2025] text-[#EDE8E1] border border-[#D4AF37]/40 font-medium text-xs uppercase tracking-[0.18em] transition-colors backdrop-blur-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            View Suites
          </button>
        </div>
      </div>

      {/* Full-Width Reservation Quick-Bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full mt-12">
        <div className="bg-[#101315]/95 border border-[#2A3138] backdrop-blur-md p-5 md:p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
          >
            <div>
              <label
                htmlFor="hero-suite"
                className="flex items-center gap-1.5 text-xs text-[#A8A196] mb-2"
              >
                <BedDouble className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                <span>Suite Selection</span>
              </label>
              <select
                id="hero-suite"
                value={suiteId}
                onChange={(e) => setSuiteId(e.target.value)}
                className="w-full h-11 bg-[#161A1E] border border-[#2B333B] text-sm text-[#EDE8E1] px-3 focus:border-[#D4AF37] focus:outline-none"
              >
                {SUITES.map((suite) => (
                  <option key={suite.id} value={suite.id}>
                    {suite.name} (€{suite.nightlyRate}/nt)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="hero-checkin"
                className="flex items-center gap-1.5 text-xs text-[#A8A196] mb-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                <span>Arrival Date</span>
              </label>
              <input
                id="hero-checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className="w-full h-11 bg-[#161A1E] border border-[#2B333B] text-sm text-[#EDE8E1] px-3 tabular-nums focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="hero-checkout"
                className="flex items-center gap-1.5 text-xs text-[#A8A196] mb-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                <span>Departure Date</span>
              </label>
              <input
                id="hero-checkout"
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="w-full h-11 bg-[#161A1E] border border-[#2B333B] text-sm text-[#EDE8E1] px-3 tabular-nums focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="hero-guests"
                className="flex items-center gap-1.5 text-xs text-[#A8A196] mb-2"
              >
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                <span>Party Size</span>
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-11 bg-[#161A1E] border border-[#2B333B] text-sm text-[#EDE8E1] px-3 tabular-nums focus:border-[#D4AF37] focus:outline-none"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={6}>6 Guests (Imperial Suite)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full h-11 px-5 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB]"
            >
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
