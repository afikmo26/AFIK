"use client";

import React, { useState } from 'react';
import { Accessibility, Moon, Sun, Type, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 left-10 z-[60]">
      <Button 
        variant="secondary" 
        size="icon" 
        className="h-16 w-16 rounded-full bg-white text-black shadow-2xl hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Accessibility size={32} />
      </Button>

      {isOpen && (
        <div className="absolute bottom-20 left-0 w-64 bg-zinc-900 border border-white/10 p-6 rounded-3xl shadow-2xl space-y-4">
          <h4 className="text-xl font-bold text-white mb-4">נגישות</h4>
          <Button variant="outline" className="w-full justify-start gap-3 h-12 text-lg">
            <ZoomIn size={20} /> הגדל טקסט
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-12 text-lg">
            <ZoomOut size={20} /> הקטן טקסט
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-12 text-lg">
            <Type size={20} /> גופן קריא
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-12 text-lg">
            <Moon size={20} /> ניגודיות גבוהה
          </Button>
        </div>
      )}
    </div>
  );
}
