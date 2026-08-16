'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '../lib/_data';

export function Skills() {
  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Технологии, с которыми я работаю
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/40 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-400/60 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
