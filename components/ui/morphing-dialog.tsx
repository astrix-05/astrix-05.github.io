'use client';
import React, { useState, useRef, useEffect, useContext, createContext } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const DialogContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  uniqueId: string;
} | null>(null);

export function MorphingDialog({ children, transition }: { children: React.ReactNode, transition?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = React.useId();

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen, uniqueId }}>
      <MotionConfig transition={transition || { type: 'spring', bounce: 0.05, duration: 0.3 }}>
        <div className="relative">{children}</div>
      </MotionConfig>
    </DialogContext.Provider>
  );
}

export function MorphingDialogTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const context = useContext(DialogContext);
  if (!context) throw new Error('MorphingDialogTrigger must be used within MorphingDialog');
  
  return (
    <motion.div
      layoutId={`dialog-trigger-${context.uniqueId}`}
      className={cn("cursor-pointer", className)}
      onClick={() => context.setIsOpen(true)}
    >
      {children}
    </motion.div>
  );
}

export function MorphingDialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const context = useContext(DialogContext);
  if (!context) throw new Error('MorphingDialogContent must be used within MorphingDialog');

  return (
    <AnimatePresence>
      {context.isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => context.setIsOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <motion.div
              layoutId={`dialog-trigger-${context.uniqueId}`}
              className={cn("w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden pointer-events-auto", className)}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function MorphingDialogClose({ className }: { className?: string }) {
  const context = useContext(DialogContext);
  if (!context) throw new Error('MorphingDialogClose must be used within MorphingDialog');

  return (
    <button
      className={cn("absolute top-4 right-4 p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors", className)}
      onClick={(e) => {
        e.stopPropagation();
        context.setIsOpen(false);
      }}
    >
      <X className="w-4 h-4" />
    </button>
  );
}

export function MorphingDialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("text-xl font-bold text-white", className)}>{children}</h2>;
}

export function MorphingDialogDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-zinc-400 mt-2", className)}>{children}</p>;
}

export function MorphingDialogImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    return (
        <motion.img 
            src={src} 
            alt={alt} 
            className={cn("w-full h-48 object-cover", className)} 
        />
    )
}

export function MorphingDialogContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("p-6", className)}>{children}</div>
}
