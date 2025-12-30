"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Layers, 
  Phone, 
  ShieldCheck,
  Clock,
  Construction,
  Hammer,
  ArrowLeft,
  MessageCircle,
  ChevronDown,
  Quote,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { SparkEffect } from "@/components/SparkEffect";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { motion, AnimatePresence } from "framer-motion";

const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function Home() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const phoneNumbers = ["054-568-7588", "052-783-2665", "054-528-9488"];
  const phoneNumber = phoneNumbers[0];
  const email = "AFIKMO26@GMAIL.COM";
  const companyName = "לי מתכות";
  const brandSubtext = "מומחים בבנייה ומסגרות ברמה הגבוהה ביותר";
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/5781fdf5-42d8-4372-a8f6-bbe014e74177-1767019453245.jfif";

  const faqs = [
    {
      question: "כמה שנות ניסיון יש לכם בעבודה מול קבלני שלד?",
      answer: "אנחנו עסק משפחתי עם 60 שנות ניסיון שעוברות מאב לבן. עבדנו עם מאות קבלני שלד לאורך השנים, ואנחנו יודעים בדיוק איך להשתלב בלוח הזמנים של האתר כדי לא לעכב אף אחד."
    },
    {
      question: "מה רמת הדיוק שאתם מתחייבים אליה במסגרות?",
      answer: "אנחנו עובדים עם סטייה של מילימטרים בודדים בלבד. כל עבודת קונסטרוקציה, מעקה או שער עוברת בקרה קפדנית. הדיוק שלנו הוא השקט התעשייתי של הקבלן בשלבי הגמר."
    },
    {
      question: "האם אתם מספקים אישורים וביטוחים לכל עבודה?",
      answer: "בוודאי. כל העבודות שלנו מבוצעות לפי תקני הבטיחות המחמירים ביותר, כולל כל האישורים הנדרשים וביטוח קבלני מלא. בטיחות היא מעל הכל אצלנו."
    },
    {
      question: "אתם מבצעים פרויקטים 'עד מפתח' גם עבור לקוחות פרטיים?",
      answer: "כן, אנחנו מתמחים בליווי פרויקטים משלב היסודות ועד למסירת המפתח. אנחנו מנהלים את כל שלבי הבנייה והשיפוץ, כולל תיאום מלא מול כל בעלי המקצוע."
    }
  ];

  const testimonials = [
    {
      text: "הדיוק במסגרות שהם סיפקו לי בפרויקט האחרון היה פשוט מדהים. כקבלן, אני יודע ש-60 שנות ניסיון זה לא רק מספר – זה שקט נפשי באתר.",
      author: "אבי כהן",
      role: "קבלן שלד"
    },
    {
      text: "הם לקחו לי את כל הבנייה מהשלד ועד המפתח. רמה גבוהה של גימור, עמידה בלוחות זמנים ויחס אישי. הכי טובים בתחום.",
      author: "משה לוי",
      role: "בעל וילה בקיסריה"
    }
  ];

  React.useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans" dir="rtl">
      <SparkEffect />
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="mb-8 relative h-32 w-32 overflow-hidden rounded-2xl bg-white shadow-2xl">
                <Image src={logoUrl} alt="Logo" fill className="object-cover" priority sizes="128px" />
              </div>
              <h1 className="text-5xl font-bold tracking-tighter text-white md:text-7xl">
                לי <span className="text-primary">מתכות</span>
              </h1>
              <p className="mt-4 text-xl font-bold text-zinc-400 uppercase tracking-widest text-center">
                {brandSubtext}
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              {/* Success Message Banner (Requested by User) */}
              <div className="bg-primary/20 border-b border-primary/30 py-4 text-center mt-20">
                <div className="container mx-auto px-4 flex items-center justify-center gap-4">
                  <Sparkles className="text-primary animate-pulse" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">האתר עלה ✅ דף הבית עובד ומוכן</h2>
                  <Sparkles className="text-primary animate-pulse" />
                </div>
              </div>

              {/* Hero Section */}
              <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/7e5bed2b-8d3c-4d83-a3c9-0ca9968e2807-1767018142445.jpg?width=8000&height=8000&resize=contain"
                    alt="Background"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                </div>
                
                <div className="container relative z-10 mx-auto px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 inline-block rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-bold text-primary backdrop-blur-sm"
                  >
                    {companyName} – 60 שנות ניסיון
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 text-5xl font-bold tracking-tight text-white md:text-8xl"
                  >
                    מומחים בבנייה, <br />
                    <span className="text-primary underline decoration-white/10 underline-offset-[15px]">שיפוצים ומסגרות</span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mx-auto mb-10 max-w-3xl text-xl font-bold text-zinc-300 md:text-3xl"
                  >
                    בונים בית עד מפתח | קבלנות שיפוצים | עבודות מסגרות מתקדמות
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6"
                  >
                    <Button size="lg" className="h-16 bg-primary px-10 text-xl font-bold hover:bg-red-700 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all" asChild>
                      <Link href="#contact">קבלו הצעת מחיר</Link>
                    </Button>
                    <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold bg-white text-black hover:bg-zinc-200 rounded-xl transform hover:scale-105 transition-all" asChild>
                      <a href={`tel:${phoneNumbers[0].replace(/-/g, '')}`}>דברו איתנו עכשיו</a>
                    </Button>
                  </motion.div>
                </div>
              </section>

              {/* Intro Section */}
              <section className="bg-zinc-950 py-24 border-y border-white/5">
                <div className="container mx-auto px-4">
                  <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <motion.div {...scrollReveal}>
                      <h2 className="mb-8 text-4xl font-bold md:text-6xl text-right">
                        אנחנו <span className="text-primary">מובילים באיכות ובדיוק</span>
                      </h2>
                      <div className="space-y-6 text-xl text-zinc-400 font-medium text-right leading-relaxed">
                        <p>
                          חברת "לי מתכות" מתמחה בכל תחומי הבנייה, השיפוצים והמסגרות, עם 60 שנות ניסיון משפחתי מוכח.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2 mt-12">
                           <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 flex flex-col items-center text-center">
                              <Clock className="text-primary mb-3" size={32} />
                              <span className="text-white font-bold text-lg">שעות פעילות</span>
                              <span className="text-zinc-400">05:00 - 16:00 (כל השבוע)</span>
                           </div>
                           <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 flex flex-col items-center text-center">
                              <ShieldCheck className="text-primary mb-3" size={32} />
                              <span className="text-white font-bold text-lg">ניסיון</span>
                              <span className="text-zinc-400">60 שנה בתחום</span>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                      {...scrollReveal}
                      className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                    >
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/c1e188de-74b5-4e46-a4d8-1f5e2f07d3bc-1767018099667.jpg?width=8000&height=8000&resize=contain"
                        alt="Metalwork"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="bg-black py-24">
                <div className="container mx-auto px-4">
                  <div className="mb-16 text-center">
                    <h2 className="mb-4 text-5xl font-bold md:text-7xl">השירותים שלנו</h2>
                    <p className="text-xl font-bold text-primary uppercase tracking-widest">הכל תחת קורת גג אחת</p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-3">
                    {[
                      { icon: <Construction size={40} />, title: "בנייה עד מפתח", desc: "בנייה פרטית משלב האפס ועד קבלת מפתח", items: ["בניית בתים פרטיים", "תוספות בנייה", "שלד וגמר"] },
                      { icon: <Hammer size={40} />, title: "קבלנות שיפוצים", desc: "שיפוצים ברמה אחרת – מהיסוד ועד הגמר", items: ["שיפוץ דירות", "שיפוץ משרדים", "עבודות גמר"] },
                      { icon: <Layers size={40} />, title: "עבודות מסגרות", desc: "מסגרות מתקדמות בהתאמה אישית", items: ["מעקות ומדרגות", "שערים וגדרות", "קונסטרוקציות"] }
                    ].map((service, i) => (
                      <motion.div 
                        key={i}
                        {...scrollReveal}
                        className="group rounded-3xl border border-white/5 bg-zinc-900/50 p-8 transition-all hover:border-primary/50"
                      >
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">{service.title}</h3>
                        <p className="mb-6 text-zinc-400 font-medium">{service.desc}</p>
                        <ul className="space-y-3">
                          {service.items.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-lg font-bold text-zinc-200">
                              <CheckCircle2 className="text-primary" size={20} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="bg-zinc-950 py-24">
                <div className="container mx-auto px-4">
                  <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <motion.div {...scrollReveal} className="text-right">
                      <h2 className="mb-8 text-5xl font-bold text-white md:text-7xl">דברו איתנו</h2>
                      <div className="space-y-8">
                        <a href={`tel:${phoneNumber.replace(/-/g, '')}`} className="group flex items-center justify-end gap-6">
                          <div className="text-right">
                            <p className="text-lg font-bold text-white opacity-60">התקשרו אלינו / וואטסאפ</p>
                            <p className="text-3xl font-bold text-primary dir-ltr">{phoneNumber}</p>
                          </div>
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-white shadow-lg group-hover:scale-110 transition-transform">
                            <Phone size={32} />
                          </div>
                        </a>
                        <div className="flex items-center justify-end gap-6">
                          <div className="text-right">
                            <p className="text-lg font-bold text-white opacity-60">שעות פעילות</p>
                            <p className="text-xl font-bold text-white">05:00 - 16:00 | כל ימי השבוע</p>
                          </div>
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-900 text-white">
                            <Clock size={32} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      {...scrollReveal} 
                      className="rounded-3xl border border-white/5 bg-black p-8 shadow-2xl md:p-12"
                    >
                      <h3 className="text-2xl font-bold text-white mb-8 text-center">השאירו פרטים ונחזור אליכם</h3>
                      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-lg font-bold text-white mr-1">שם מלא</Label>
                            <Input id="name" placeholder="שמך המלא" className="h-14 bg-zinc-900 border-white/10 text-right text-lg focus:border-primary rounded-lg" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-lg font-bold text-white mr-1">טלפון</Label>
                            <Input id="phone" placeholder="מספר נייד" className="h-14 bg-zinc-900 border-white/10 text-right text-lg focus:border-primary rounded-lg" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-lg font-bold text-white mr-1">הודעה</Label>
                          <Textarea id="message" placeholder="איך נוכל לעזור?" className="min-h-[150px] bg-zinc-900 border-white/10 text-right text-lg focus:border-primary rounded-lg" />
                        </div>
                        <Button size="lg" className="w-full h-16 bg-primary text-xl font-bold hover:bg-red-700 shadow-xl rounded-xl transition-all">
                          שלחו הודעה עכשיו <ArrowLeft className="mr-3" size={24} />
                        </Button>
                      </form>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="border-t-4 border-primary bg-black py-16 text-zinc-500">
                <div className="container mx-auto px-4 text-center">
                  <div className="mb-8 flex items-center justify-center gap-3 text-3xl font-bold tracking-tighter text-white">
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white">
                      <Image src={logoUrl} alt="Footer Logo" fill className="object-cover" />
                    </div>
                    <span>לי <span className="text-primary">מתכות</span></span>
                  </div>
                  <p className="text-lg font-bold text-zinc-400 mb-6">
                    60 שנה של ניסיון בבנייה, שיפוצים ומסגרות. איכות ללא פשרות.
                  </p>
                  <p className="text-sm">© {new Date().getFullYear()} {companyName}. כל הזכויות שמורות.</p>
                </div>
              </footer>

              {/* Floating WhatsApp */}
              <a 
                href="https://wa.me/message/EUDD6TVNMC37K1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl hover:scale-110 transition-transform animate-pulse"
              >
                <MessageCircle size={32} fill="white" />
              </a>

              <AccessibilityWidget />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
