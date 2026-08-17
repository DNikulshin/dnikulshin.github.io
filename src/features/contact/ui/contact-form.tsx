'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';
import { Textarea } from '@/shared/ui/kit/textarea';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { clientEnv } from '@/shared/config/client-env';

const FORMSPREE_ENDPOINT = clientEnv.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

if (!FORMSPREE_ENDPOINT) {
  throw new Error('NEXT_PUBLIC_FORMSPREE_ENDPOINT is not defined');
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки. Попробуйте позже.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Неизвестная ошибка');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Ваше имя
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800/50 border-slate-700/50 text-white placeholder:text-gray-400 focus:border-indigo-400"
            placeholder="Иван Иванов"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800/50 border-slate-700/50 text-white placeholder:text-gray-400 focus:border-indigo-400"
            placeholder="ivan@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Сообщение
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-slate-800/50 border-slate-700/50 text-white placeholder:text-gray-400 focus:border-indigo-400 resize-none"
            placeholder="Расскажите о вашем проекте..."
          />
        </div>
        <Button
          type="submit"
          variant="default"
          className="w-full bg-indigo-600 hover:bg-indigo-700"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            'Отправить'
          )}
        </Button>
        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
            <CheckCircle className="h-5 w-5" />
            <span>Сообщение отправлено! Я свяжусь с вами в ближайшее время.</span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
            <XCircle className="h-5 w-5" />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    </motion.div>
  );
}
