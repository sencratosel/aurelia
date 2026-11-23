import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

const NAV_LINKS = [
  { label: 'Suites', href: '#suites' },
  { label: 'Casino', href: '#casino' },
  { label: 'Dining', href: '#dining' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Gallery', href: '#gallery' },
];

export function Navbar({ onOpenReservation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#0B0D0E]/95 backdrop-blur-md border-b border-[#242B30]'
            : 'bg-gradient-to-b from-[#0B0D0E]/90 via-[#0B0D0E]/55 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] hover:text-[#E3BE7F] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            Aurelia Grand
          </a>

          {/* Zone 2: Concise single-line nav links */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-[#D1C7B7] hover:text-[#FBF9F5] underline-offset-8 hover:underline decoration-[#D4AF37] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenReservation}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.14em] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB]"
            >
              Reserve Stay
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#EDE8E1] hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#0B0D0E]/98 backdrop-blur-xl pt-24 pb-10 px-6 flex flex-col justify-between">
          <nav aria-label="Mobile Navigation" className="flex flex-col items-center space-y-5 pt-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-serif text-2xl text-[#FBF9F5] hover:text-[#D4AF37] transition-colors py-1.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="max-w-xs w-full mx-auto pt-6 border-t border-[#242B30] text-center space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
            >
              Inquire About a Stay
            </button>
            <p className="text-xs text-[#8E867B]">
              Coastal Sanctuary · Private Gaming 18+
            </p>
          </div>
        </div>
      )}
    </>
  );
}
