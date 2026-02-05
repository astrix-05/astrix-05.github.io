'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TextMorph({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'block' }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
