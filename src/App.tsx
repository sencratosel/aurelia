import { useState } from 'react';
import { SUITES } from './data/resortData';
import { Navbar } from './components/Navbar';
import { Hero, QuickInquiryParams } from './components/Hero';
import { ResortOverview } from './components/ResortOverview';
import { SuitesSection } from './components/SuitesSection';
import { CasinoSection } from './components/CasinoSection';
import { DiningSection } from './components/DiningSection';
import { SpaSection } from './components/SpaSection';
import { GallerySection } from './components/GallerySection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ReservationModal, ReservationModalState } from './components/ReservationModal';
import { ResponsibleGamingModal } from './components/ResponsibleGamingModal';

export default function App() {
  const [reservationModal, setReservationModal] = useState<ReservationModalState>({
    isOpen: false,
    suiteId: SUITES[2].id,
    checkIn: '2026-12-12',
    checkOut: '2026-12-16',
    guests: 2,
    note: '',
  });

  const [gamingPolicyOpen, setGamingPolicyOpen] = useState(false);

  const openReservationModal = (overrides?: Partial<ReservationModalState>) => {
    setReservationModal((prev) => ({
      ...prev,
      ...overrides,
      isOpen: true,
    }));
  };

  const handleQuickReserve = (params: QuickInquiryParams) => {
    openReservationModal({
      suiteId: params.suiteId,
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      guests: params.guests,
      note: '',
    });
  };

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#EDE8E1]">
      <Navbar onOpenReservation={() => openReservationModal()} />

      <main>
        <Hero
          onQuickReserve={handleQuickReserve}
          onExploreResort={() => scrollToSection('#overview')}
          onViewSuites={() => scrollToSection('#suites')}
        />

        <ResortOverview />

        <SuitesSection
          onSelectSuiteForBooking={(suiteId) =>
            openReservationModal({ suiteId, note: '' })
          }
        />

        <CasinoSection
          onOpenGamingPolicy={() => setGamingPolicyOpen(true)}
          onInquireSalon={() =>
            openReservationModal({
              suiteId: SUITES[2].id,
              note: 'Private Salon Noir high-limit table reservation inquiry.',
            })
          }
        />

        <DiningSection
          onReserveTable={(venueName) =>
            openReservationModal({
              note: `Private table reservation request at ${venueName}.`,
            })
          }
        />

        <SpaSection
          onReserveSpa={(treatmentTitle) =>
            openReservationModal({
              note: `Celestial Thermal Spa booking inquiry: ${treatmentTitle}.`,
            })
          }
        />

        <GallerySection />

        <InquirySection />
      </main>

      <Footer
        onOpenGamingPolicy={() => setGamingPolicyOpen(true)}
        onOpenReservation={() => openReservationModal()}
      />

      <ReservationModal
        modalState={reservationModal}
        onClose={() => setReservationModal((prev) => ({ ...prev, isOpen: false }))}
      />

      <ResponsibleGamingModal
        isOpen={gamingPolicyOpen}
        onClose={() => setGamingPolicyOpen(false)}
      />
    </div>
  );
}
