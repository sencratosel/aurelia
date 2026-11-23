import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SUITES } from '../data/resortData';

export function InquirySection() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState(SUITES[2].id);
  const [arrivalDate, setArrivalDate] = useState('2026-12-12');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [referenceCode, setReferenceCode] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (fullName.trim().length < 2) {
      setError('Please enter your full name so our concierge can address your inquiry.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please provide a valid email address for your private itinerary response.');
      return;
    }

    const randomRef = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(randomRef);
  };

  return (
    <section id="concierge" className="py-20 md:py-28 bg-[#0B0D0E] border-b border-[#1E2429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
              Private Concierge Desk
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FBF9F5] leading-[1.12] text-balance">
              Tailored Stays &amp; Salon Invitations
            </h2>
            <p className="text-sm sm:text-base text-[#C7BEB0] mt-5 leading-relaxed font-light">
              Whether arranging a penthouse arrival with private chauffeur transfer, reserving a Salon Noir
              table, or scheduling a sunset thermal suite, our senior concierge desk responds directly with
              curated availability.
            </p>

            <div className="mt-8 pt-6 border-t border-[#242B30] space-y-3 text-sm text-[#C7BEB0]">
              <p>
                <span className="text-[#A8A196]">Direct Estate Line:</span>{' '}
                <span className="font-mono tabular-nums text-[#EDE8E1]">+377 98 06 44 10</span>
              </p>
              <p>
                <span className="text-[#A8A196]">Concierge Correspondence:</span>{' '}
                <span className="text-[#EDE8E1]">concierge@aureliagrand.example</span>
              </p>
              <p>
                <span className="text-[#A8A196]">Location:</span>{' '}
                <span className="text-[#EDE8E1]">Cap d&apos;Azur Promenade, Mediterranean Coast</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#121518] border border-[#242B30] p-7 sm:p-10">
            {referenceCode ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto" aria-hidden="true" />
                <h3 className="font-serif text-3xl text-[#FBF9F5]">
                  Concierge Inquiry Registered
                </h3>
                <p className="text-sm text-[#C7BEB0] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#EDE8E1] font-medium">{fullName}</span>. Your
                  demonstration inquiry has been logged under reference{' '}
                  <span className="font-mono text-[#E3BE7F] tabular-nums">{referenceCode}</span>.
                </p>
                <p className="text-xs text-[#8E867B]">
                  Fictional hospitality prototype · No real booking or payment was processed.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setReferenceCode(null);
                    setFullName('');
                    setEmail('');
                    setNotes('');
                  }}
                  className="mt-4 px-6 py-2.5 border border-[#D4AF37]/50 text-[#E3BE7F] hover:bg-[#D4AF37] hover:text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {error && (
                  <div
                    role="alert"
                    className="p-3.5 bg-[#2A1414] border border-[#7F2D2D] text-xs text-[#F5C6C6]"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inq-name" className="block text-xs text-[#A8A196] mb-2">
                      Full Name
                    </label>
                    <input
                      id="inq-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Elena Vance"
                      required
                      className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3.5 text-sm text-[#EDE8E1] placeholder:text-[#666057] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="inq-email" className="block text-xs text-[#A8A196] mb-2">
                      Email Address
                    </label>
                    <input
                      id="inq-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@example.com"
                      required
                      className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3.5 text-sm text-[#EDE8E1] placeholder:text-[#666057] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inq-experience" className="block text-xs text-[#A8A196] mb-2">
                      Preferred Suite or Experience
                    </label>
                    <select
                      id="inq-experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3.5 text-sm text-[#EDE8E1] focus:border-[#D4AF37] focus:outline-none"
                    >
                      {SUITES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                      <option value="salon-noir">Salon Noir Private Gaming Access</option>
                      <option value="laura-dining">L&apos;Aura Gastronomie Chef&apos;s Table</option>
                      <option value="celestial-spa">Celestial Spa Horizon Cabana</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inq-date" className="block text-xs text-[#A8A196] mb-2">
                      Target Arrival Date
                    </label>
                    <input
                      id="inq-date"
                      type="date"
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3.5 text-sm text-[#EDE8E1] tabular-nums focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inq-notes" className="block text-xs text-[#A8A196] mb-2">
                    Bespoke Requests (Transfers, Dining, Private Gaming)
                  </label>
                  <textarea
                    id="inq-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Private chauffeur from Nice Côte d'Azur, corner table at L'Aura..."
                    className="w-full bg-[#161A1E] border border-[#2B333B] p-3.5 text-sm text-[#EDE8E1] placeholder:text-[#666057] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-[#8E867B]">
                    Prototype demonstration form · Instant confirmation preview
                  </p>
                  <button
                    type="submit"
                    className="px-7 py-3 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB]"
                  >
                    Send Concierge Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
