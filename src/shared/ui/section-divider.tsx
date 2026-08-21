'use client';

import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center w-full py-2">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '70%', opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-0.5 rounded-full bg-indigo-400/70"
        style={{
          boxShadow: '0 0 20px rgba(129, 140, 248, 0.4)',
        }}
      />
    </div>
  );
}
