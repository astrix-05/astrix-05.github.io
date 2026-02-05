'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <nav className="border-b border-white/20 bg-black/80 px-6 py-3 flex items-center gap-8 w-full max-w-2xl mx-auto backdrop-blur-sm">
        <Link href="#" className="text-xl font-bold font-display tracking-tighter hover:text-zinc-300 transition-colors lowercase">
          as.
        </Link>
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors lowercase"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link 
            href="#contact"
            className="md:hidden text-sm font-medium text-zinc-400 hover:text-white transition-colors lowercase"
        >
            contact
        </Link>
      </nav>
    </motion.header>
  );
}
