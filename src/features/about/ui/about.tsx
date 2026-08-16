'use client';

import { motion } from 'framer-motion';
import { ABOUT_TEXT, ABOUT_POINTS } from '../lib/_constants';

export function About() {
  return (
    <section className="py-24 px-4 bg-slate-900 border-y border-indigo-500/10">
      <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-slate-700/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Обо мне</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{ABOUT_TEXT}</p>
          <ul className="mt-6 space-y-2 text-gray-300">
            {ABOUT_POINTS.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-blue-400 text-xl">•</span> {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
