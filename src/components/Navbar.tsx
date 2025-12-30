"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: "#home", label: "בית" },
    { href: "#about", label: "מי אנחנו" },
    { href: "#services", label: "שירותים" },
    { href: "#projects", label: "פרויקטים" },
    { href: "#contact", label: "צור קשר" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/5781fdf5-42d8-4372-a8f6-bbe014e74177-1767019453245.jfif" 
                alt="Logo" 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-2xl font-bold text-white">לי <span className="text-primary">מתכות</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-lg font-bold text-zinc-300 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-red-700 text-white font-bold px-6" asChild>
              <Link href="#contact">הצעת מחיר</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-xl font-bold text-white p-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-red-700 text-white font-bold h-14 text-xl" asChild>
              <Link href="#contact" onClick={() => setIsOpen(false)}>הצעת מחיר</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
