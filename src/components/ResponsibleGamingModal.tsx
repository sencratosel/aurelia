import { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface ResponsibleGamingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRINCIPLES = [
  'Strict 18+ government-issued identification verified upon private salon entry.',
  'Voluntary time-out intervals and customizable play limit tools available with salon hosts.',
  'Trained hospitality floor directors dedicated to guest composure and well-being.',
  'Zero credit lines extended without comprehensive private-client verification.',
];

const HELPLINES = [
  { name: 'National Problem Gambling Helpline (US)', contact: '1-800-522-4700 · ncpgambling.org' },
  { name: 'GamCare (UK)', contact: '0808 8020 133 · gamcare.org.uk' },
  { name: 'Gambling Therapy Worldwide', contact: 'gamblingtherapy.org' },
];

export function ResponsibleGamingModal({ isOpen, onClose }: ResponsibleGamingModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="responsible-gaming-title"
      className="fixed inset-0 z-50 bg-[#070809]/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#121518] border border-[#2B333B]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#242B30]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
            <h2 id="responsible-gaming-title" className="font-serif text-2xl text-[#FBF9F5]">
              18+ Responsible Gaming &amp; Notice
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close responsible gaming policy"
            className="p-2 text-[#A8A196] hover:text-[#FBF9F5] border border-[#242B30] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm text-[#C7BEB0] leading-relaxed">
          <p>
            Aurelia Grand promotes strictly responsible, entertaining gaming. Admittance to private gaming
            salons is limited exclusively to guests aged 18 years and older (or legal jurisdiction age).
          </p>

          <div className="p-4 bg-[#161A1E] border border-[#242B30] text-xs text-[#E3BE7F]">
            Demonstration Notice: This website is an interactive fictional luxury resort prototype. No
            real-money wagering, deposits, financial transactions, or commercial hotel bookings occur here.
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#A8A196] mb-3">
              Salon Standards
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EDE8E1]">
              {PRINCIPLES.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37]" aria-hidden="true">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#242B30]">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#A8A196] mb-2.5">
              Independent Support Resources
            </h3>
            <div className="space-y-1.5 text-xs">
              {HELPLINES.map((help) => (
                <p key={help.name}>
                  <span className="text-[#EDE8E1] font-medium">{help.name}:</span>{' '}
                  <span className="text-[#A8A196]">{help.contact}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[#242B30] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}
