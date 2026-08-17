'use client';

import { useState } from 'react';
import { clientEnv } from '@/shared/config/client-env';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';
import { Textarea } from '@/shared/ui/kit/textarea';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const endpoint = clientEnv.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!endpoint) return;

    setStatus('loading');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // Если endpoint не задан, форму не показываем
  if (!endpoint) {
    return (
      <div className="text-gray-400 text-sm text-center">
        Форма обратной связи временно недоступна.
        <br />
        Напишите мне напрямую:{' '}
        <a href="mailto:d.nikulshin.dev@gmail.com" className="text-indigo-400 hover:underline">
          d.nikulshin.dev@gmail.com
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Имя
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Сообщение
        </label>
        <Textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={status === 'loading'} className="w-full">
        {status === 'loading' ? 'Отправка...' : 'Отправить'}
      </Button>
      {status === 'success' && (
        <p className="text-green-400 text-sm text-center">Сообщение отправлено!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">Ошибка. Попробуйте позже.</p>
      )}
    </form>
  );
}
