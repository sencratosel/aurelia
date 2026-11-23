import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/resortData';
import { ResilientImage } from './ResilientImage';

const CATEGORIES = ['All', 'Architecture', 'Suites', 'Casino', 'Dining', 'Wellness'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export function GallerySection() {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    filter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const showPrev = () => {
    if (currentIndex < 0) return;
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIdx]);
  };

  const showNext = () => {
    if (currentIndex < 0) return;
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIdx]);
  };

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0E1113] border-b border-[#1E2429]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
              05. Estate Portfolio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FBF9F5] leading-[1.12] text-balance">
              Spaces Crafted for Quiet Grandeur
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter gallery by area"
            className="flex flex-wrap gap-2 bg-[#14181B] p-1.5 border border-[#242B30] self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#0B0D0E] font-semibold'
                      : 'text-[#C7BEB0] hover:text-[#FBF9F5]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group text-left bg-[#121518] border border-[#242B30] hover:border-[#D4AF37]/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <ResilientImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  fallbackTitle={item.title}
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-[#E3BE7F] mb-1.5">
                  {item.category} <span aria-hidden="true" className="mx-1.5 text-[#716A60]">·</span>{' '}
                  <span className="text-[#A8A196]">{item.architecturalNote}</span>
                </p>
                <h3 className="font-serif text-xl text-[#FBF9F5] group-hover:text-[#E3BE7F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A8A196] mt-2 line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 bg-[#070809]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-w-5xl w-full bg-[#121518] border border-[#2B333B] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#242B30]">
              <div>
                <p className="text-xs text-[#E3BE7F]">
                  {selectedItem.category} · {selectedItem.architecturalNote}
                </p>
                <h3 className="font-serif text-xl text-[#FBF9F5] mt-0.5">{selectedItem.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Previous image"
                      className="p-2 text-[#C7BEB0] hover:text-[#FBF9F5] border border-[#242B30] hover:border-[#D4AF37]/50 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next image"
                      className="p-2 text-[#C7BEB0] hover:text-[#FBF9F5] border border-[#242B30] hover:border-[#D4AF37]/50 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close gallery lightbox"
                  className="p-2 text-[#C7BEB0] hover:text-[#FBF9F5] border border-[#242B30] hover:border-[#D4AF37]/50 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="aspect-[16/9] w-full bg-[#0B0D0E]">
              <ResilientImage
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                fallbackTitle={selectedItem.title}
              />
            </div>

            <div className="px-6 py-4 border-t border-[#242B30]">
              <p className="text-sm text-[#C7BEB0] font-light">{selectedItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
