import { RESORT_METRICS } from '../data/resortData';

export function ResortOverview() {
  return (
    <section id="overview" className="py-20 md:py-28 bg-[#0B0D0E] border-b border-[#1E2429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
              The Coastal Estate
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FBF9F5] leading-[1.12] text-balance">
              Designed without compromise, preserved for the exceptional.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#C7BEB0] text-base leading-relaxed font-light">
            <p>
              Conceived as an opulent Mediterranean palace reborn in monolithic travertine and champagne brass,
              Aurelia Grand was created for those who demand nothing less than perfection. Every colonnade,
              reflecting lagoon, and private terrace balances architectural serenity with the pulse of midnight intrigue.
            </p>
            <p>
              From arrival by private chauffeur or coastal helipad to unhurried evenings across Salon Noir and
              L&apos;Aura Gastronomie, every detail is orchestrated by our dedicated concierge team around your
              rhythm.
            </p>
          </div>
        </div>

        {/* 6-Column Estate Distinctions Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-[#1E2429]">
          {RESORT_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-6 border-r border-b border-[#1E2429] bg-[#0E1113]"
            >
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#E3BE7F] tabular-nums">
                {metric.value}
              </p>
              <p className="text-xs text-[#A8A196] mt-2 leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
