'use client';

import { motion } from 'framer-motion';
import { SiTelegram, SiGithub } from 'react-icons/si';
import { Mail } from 'lucide-react';
import { CONTACT_LINKS } from '../lib/_constants';

const iconMap = {
  Telegram: SiTelegram,
  GitHub: SiGithub,
  Mail: Mail,
};

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-indigo-500/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-6"
        >
          Свяжитесь со мной
        </motion.h2>
        <p className="text-gray-400 mb-12">Готов обсудить ваш проект или ответить на вопросы</p>
        <div className="flex flex-wrap justify-center gap-6">
          {CONTACT_LINKS.map((link, idx) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-indigo-400/60 hover:bg-slate-800/60 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <Icon size={20} className="text-blue-400" />
                <span className="text-white font-medium">{link.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
