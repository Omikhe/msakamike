"use client";

import { useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Tag, User } from "lucide-react";
import { CldImage } from "next-cloudinary";

export interface LightboxItem {
  id: string;
  publicId: string;
  title: string;
  category?: string;
  client?: string;
  description?: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  // Save triggering element and lock body scroll when lightbox opens
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement;

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
        if (triggerElementRef.current) {
          triggerElementRef.current.focus();
        }
      };
    }
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && items.length > 0) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && items.length > 0) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigate(prevIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch Swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title || "Image Lightbox"}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top action bar / Close button */}
      <div className="absolute top-4 right-4 z-[110] flex items-center gap-2">
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2.5 rounded-full bg-[#1F1F1F]/90 text-neutral-300 hover:text-white hover:bg-[#333333] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Lightbox Container */}
      <div
        className="relative flex flex-col max-w-5xl w-full max-h-[90vh] bg-[#141414] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation buttons */}
        {items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-[105] p-3 rounded-full bg-[#1F1F1F]/80 text-white hover:bg-[#333333] transition-all transform hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-[105] p-3 rounded-full bg-[#1F1F1F]/80 text-white hover:bg-[#333333] transition-all transform hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-600"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image viewport */}
        <div className="relative flex items-center justify-center bg-[#0A0A0A] overflow-hidden min-h-[300px] max-h-[65vh] p-2 sm:p-4">
          <CldImage
            src={currentItem.publicId}
            width={currentItem.width || 1200}
            height={currentItem.height || 1200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            alt={currentItem.alt || currentItem.title}
            className="max-h-[60vh] w-auto h-auto object-contain rounded-xl select-none"
            priority
          />
        </div>

        {/* Caption & Metadata Section */}
        <div className="p-5 sm:p-6 bg-[#161616] border-t border-[#262626] flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-100">
              {currentItem.title}
            </h2>

            <div className="flex items-center gap-2">
              {currentItem.category && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-[#292929] text-neutral-300 rounded-full">
                  <Tag className="w-3 h-3 text-pink-600" />
                  {currentItem.category}
                </span>
              )}
              {currentItem.client && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-[#292929] text-neutral-300 rounded-full">
                  <User className="w-3 h-3 text-pink-600" />
                  {currentItem.client}
                </span>
              )}
            </div>
          </div>

          {currentItem.description && (
            <p className="text-sm text-neutral-400 leading-relaxed">
              {currentItem.description}
            </p>
          )}

          {/* Indicator counter */}
          {items.length > 1 && (
            <div className="flex items-center justify-between pt-2 border-t border-[#222222] text-xs text-neutral-500">
              <span>
                Item {currentIndex + 1} of {items.length}
              </span>
              <span className="hidden sm:inline">Use ← → arrow keys or swipe to navigate</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
