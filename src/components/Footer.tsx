interface FooterProps {
  onOpenGamingPolicy: () => void;
  onOpenReservation: () => void;
}

export function Footer({ onOpenGamingPolicy, onOpenReservation }: FooterProps) {
  return (
    <footer className="bg-[#070809] py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E2429]">
          <div className="md:col-span-5 space-y-3">
            <p className="font-serif text-2xl font-semibold tracking-[0.14em] uppercase text-[#FBF9F5]">
              Aurelia Grand
            </p>
            <p className="font-serif italic text-lg text-[#E3BE7F]">
              Where Luxury Meets Excitement.
            </p>
            <p className="text-sm text-[#8E867B] max-w-sm leading-relaxed font-light">
              Cap d&apos;Azur Promenade, Mediterranean Coast. A private coastal sanctuary uniting grand
              residences, high-limit gaming salons, haute gastronomy, and thermal wellness.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#A8A196] mb-3">
              The Estate
            </h3>
            <ul className="space-y-2 text-sm text-[#C7BEB0]">
              <li>
                <a href="#suites" className="hover:text-[#E3BE7F] transition-colors">
                  Suites &amp; Penthouses
                </a>
              </li>
              <li>
                <a href="#casino" className="hover:text-[#E3BE7F] transition-colors">
                  Salon Noir Gaming
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#E3BE7F] transition-colors">
                  Haute Gastronomy
                </a>
              </li>
              <li>
                <a href="#wellness" className="hover:text-[#E3BE7F] transition-colors">
                  Celestial Thermal Spa
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E3BE7F] transition-colors">
                  Estate Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#A8A196] mb-3">
              Concierge &amp; Standards
            </h3>
            <p className="text-sm text-[#C7BEB0]">
              Direct Concierge:{' '}
              <span className="font-mono tabular-nums text-[#EDE8E1]">+377 98 06 44 10</span>
            </p>
            <p className="text-sm text-[#C7BEB0]">concierge@aureliagrand.example</p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenReservation}
                className="text-xs uppercase tracking-[0.14em] text-[#E3BE7F] hover:text-[#FBF9F5] transition-colors cursor-pointer"
              >
                Reserve Stay
              </button>
              <button
                type="button"
                onClick={onOpenGamingPolicy}
                className="text-xs uppercase tracking-[0.14em] text-[#A8A196] hover:text-[#E3BE7F] transition-colors cursor-pointer"
              >
                18+ Responsible Gaming
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#716A60]">
          <p>© 2026 Aurelia Grand Resort &amp; Casino · Fictional Hospitality Demonstration Concept</p>
          <p>18+ Private Gaming · No real reservations or financial transactions</p>
        </div>
      </div>
    </footer>
  );
}
