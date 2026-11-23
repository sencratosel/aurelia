import { useState, useEffect, FormEvent } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { SUITES } from '../data/resortData';

export interface ReservationModalState {
  isOpen: boolean;
  suiteId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  note: string;
}

interface ReservationModalProps {
  modalState: ReservationModalState;
  onClose: () => void;
}

export function ReservationModal({ modalState, onClose }: ReservationModalProps) {
  const [suiteId, setSuiteId] = useState(modalState.suiteId);
  const [checkIn, setCheckIn] = useState(modalState.checkIn);
  const [checkOut, setCheckOut] = useState(modalState.checkOut);
  const [guests, setGuests] = useState(modalState.guests);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [note, setNote] = useState(modalState.note);
  const [error, setError] = useState<string | null>(null);
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  useEffect(() => {
    if (modalState.isOpen) {
      setSuiteId(modalState.suiteId || SUITES[2].id);
      setCheckIn(modalState.checkIn || '2026-12-12');
      setCheckOut(modalState.checkOut || '2026-12-16');
      setGuests(modalState.guests || 2);
      setNote(modalState.note || '');
      setError(null);
      setConfirmedRef(null);
    }
  }, [modalState]);

  useEffect(() => {
    if (!modalState.isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalState.isOpen, onClose]);

  if (!modalState.isOpen) return null;

  const selectedSuite = SUITES.find((s) => s.id === suiteId) || SUITES[0];

  const nightsCount = (() => {
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return 1;
    return Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));
  })();

  const estimatedTotal = selectedSuite.nightlyRate * nightsCount;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (guestName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(guestEmail.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setConfirmedRef(`AUR-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      className="fixed inset-0 z-50 bg-[#070809]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#121518] border border-[#2B333B] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#242B30]">
          <div>
            <p className="text-xs text-[#E3BE7F] uppercase tracking-[0.18em]">
              Private Concierge
            </p>
            <h2 id="reservation-modal-title" className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] mt-0.5">
              Reservation Inquiry
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close reservation dialog"
            className="p-2 text-[#A8A196] hover:text-[#FBF9F5] border border-[#242B30] hover:border-[#D4AF37]/50 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {confirmedRef ? (
            <div className="py-6 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto" aria-hidden="true" />
              <h3 className="font-serif text-3xl text-[#FBF9F5]">Inquiry Received</h3>
              <p className="text-sm text-[#C7BEB0] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#EDE8E1] font-medium">{guestName}</span>. Your{' '}
                <span className="text-[#E3BE7F]">{selectedSuite.name}</span> inquiry for{' '}
                <span className="tabular-nums text-[#EDE8E1]">{nightsCount} nights</span> has been
                assigned reference{' '}
                <span className="font-mono text-[#E3BE7F] tabular-nums">{confirmedRef}</span>.
              </p>
              <p className="text-xs text-[#8E867B]">
                Fictional luxury showcase · No real reservations or financial charges are made.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-7 py-3 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
                >
                  Return to Estate
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {error && (
                <div
                  role="alert"
                  className="p-3 bg-[#2A1414] border border-[#7F2D2D] text-xs text-[#F5C6C6]"
                >
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="modal-suite" className="block text-xs text-[#A8A196] mb-2">
                  Suite Category
                </label>
                <select
                  id="modal-suite"
                  value={suiteId}
                  onChange={(e) => setSuiteId(e.target.value)}
                  className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3.5 text-sm text-[#EDE8E1] focus:border-[#D4AF37] focus:outline-none"
                >
                  {SUITES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} — €{s.nightlyRate.toLocaleString()} / night
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="modal-checkin" className="block text-xs text-[#A8A196] mb-2">
                    Arrival
                  </label>
                  <input
                    id="modal-checkin"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3 text-sm text-[#EDE8E1] tabular-nums focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-checkout" className="block text-xs text-[#A8A196] mb-2">
                    Departure
                  </label>
                  <input
                    id="modal-checkout"
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3 text-sm text-[#EDE8E1] tabular-nums focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-guests" className="block text-xs text-[#A8A196] mb-2">
                    Guests
                  </label>
                  <select
                    id="modal-guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3 text-sm text-[#EDE8E1] tabular-nums focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={6}>6 Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs text-[#A8A196] mb-2">
                    Guest Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Julian Sterling"
                    required
                    className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3.5 text-sm text-[#EDE8E1] placeholder:text-[#666057] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs text-[#A8A196] mb-2">
                    Email Address
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="julian@example.com"
                    required
                    className="w-full h-11 bg-[#161A1E] border border-[#2B333B] px-3.5 text-sm text-[#EDE8E1] placeholder:text-[#666057] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-note" className="block text-xs text-[#A8A196] mb-2">
                  Special Requests (Dining, Spa, Salon Noir)
                </label>
                <textarea
                  id="modal-note"
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Optional itinerary preferences..."
                  className="w-full bg-[#161A1E] border border-[#2B333B] p-3 text-sm text-[#EDE8E1] placeholder:text-[#666057] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-[#242B30] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#A8A196] tabular-nums">
                    Estimated Stay ({nightsCount} {nightsCount === 1 ? 'night' : 'nights'})
                  </p>
                  <p className="font-serif text-2xl text-[#E3BE7F] tabular-nums">
                    €{estimatedTotal.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 border border-[#2B333B] text-xs font-medium text-[#C7BEB0] hover:text-[#FBF9F5] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E3BE7F] text-[#0B0D0E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Confirm Inquiry
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
