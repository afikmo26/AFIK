"use client";

import * as React from "react";
import { 
  Accessibility, 
  X, 
  Type, 
  Contrast, 
  Eye, 
  Link as LinkIcon,
  RotateCcw,
  Sun,
  MousePointer2,
  ALargeSmall,
  Ban,
  Heading1
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(100);
  const [grayscale, setGrayscale] = React.useState(false);
  const [highContrast, setHighContrast] = React.useState(false);
  const [underlineLinks, setUnderlineLinks] = React.useState(false);
  const [readableFont, setReadableFont] = React.useState(false);
  const [largeCursor, setLargeCursor] = React.useState(false);
  const [stopAnimations, setStopAnimations] = React.useState(false);
  const [highlightTitles, setHighlightTitles] = React.useState(false);

  React.useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${fontSize}%`;
    
    const toggleClass = (className: string, condition: boolean) => {
      if (condition) html.classList.add(className);
      else html.classList.remove(className);
    };

    toggleClass("grayscale", grayscale);
    toggleClass("high-contrast", highContrast);
    toggleClass("underline-links", underlineLinks);
    toggleClass("readable-font", readableFont);
    toggleClass("large-cursor", largeCursor);
    toggleClass("stop-animations", stopAnimations);
    toggleClass("highlight-titles", highlightTitles);

  }, [fontSize, grayscale, highContrast, underlineLinks, readableFont, largeCursor, stopAnimations, highlightTitles]);

  const reset = () => {
    setFontSize(100);
    setGrayscale(false);
    setHighContrast(false);
    setUnderlineLinks(false);
    setReadableFont(false);
    setLargeCursor(false);
    setStopAnimations(false);
    setHighlightTitles(false);
  };

  return (
    <div className="fixed bottom-10 left-10 z-[70]" dir="rtl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-all active:scale-95"
        aria-label="תפריט נגישות"
      >
        <Accessibility size={36} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
            className="absolute bottom-20 left-0 w-80 rounded-3xl bg-zinc-900 border border-white/10 p-6 shadow-2xl backdrop-blur-xl max-h-[70vh] overflow-y-auto"
          >
            <div className="mb-6 flex items-center justify-between sticky top-0 bg-zinc-900/80 backdrop-blur-md py-2 z-10">
              <h3 className="text-2xl font-bold text-white">הצהרת נגישות</h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white p-2">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-zinc-800 p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <Type size={20} className="text-blue-400" />
                  <span className="font-bold text-white text-lg">גודל טקסט</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setFontSize(prev => Math.min(prev + 10, 150))} className="h-10 w-10 rounded-lg bg-zinc-700 text-white font-bold hover:bg-zinc-600 transition-colors">+</button>
                  <button onClick={() => setFontSize(prev => Math.max(prev - 10, 80))} className="h-10 w-10 rounded-lg bg-zinc-700 text-white font-bold hover:bg-zinc-600 transition-colors">-</button>
                </div>
              </div>

              <AccessibilityButton 
                active={grayscale} 
                onClick={() => setGrayscale(!grayscale)} 
                icon={<Sun size={20} />} 
                label="גווני אפור" 
              />

              <AccessibilityButton 
                active={highContrast} 
                onClick={() => setHighContrast(!highContrast)} 
                icon={<Contrast size={20} />} 
                label="ניגודיות גבוהה" 
              />

              <AccessibilityButton 
                active={underlineLinks} 
                onClick={() => setUnderlineLinks(!underlineLinks)} 
                icon={<LinkIcon size={20} />} 
                label="הדגשת קישורים" 
              />

              <AccessibilityButton 
                active={readableFont} 
                onClick={() => setReadableFont(!readableFont)} 
                icon={<ALargeSmall size={20} />} 
                label="פונט קריא" 
              />

              <AccessibilityButton 
                active={largeCursor} 
                onClick={() => setLargeCursor(!largeCursor)} 
                icon={<MousePointer2 size={20} />} 
                label="סמן גדול" 
              />

              <AccessibilityButton 
                active={highlightTitles} 
                onClick={() => setHighlightTitles(!highlightTitles)} 
                icon={<Heading1 size={20} />} 
                label="הדגשת כותרות" 
              />

              <AccessibilityButton 
                active={stopAnimations} 
                onClick={() => setStopAnimations(!stopAnimations)} 
                icon={<Ban size={20} />} 
                label="עצור אנימציות" 
              />

              <button 
                onClick={reset}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600/20 p-4 text-red-400 hover:bg-red-600/30 transition-colors font-bold border border-red-600/20"
              >
                <RotateCcw size={20} />
                איפוס הגדרות
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccessibilityButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl p-4 transition-all border ${active ? 'bg-blue-600 border-blue-400 shadow-lg' : 'bg-zinc-800 border-white/5 hover:bg-zinc-700 hover:border-white/10'}`}
    >
      <div className={`${active ? 'text-white' : 'text-blue-400'}`}>
        {icon}
      </div>
      <span className="font-bold text-white text-lg">{label}</span>
    </button>
  );
}
