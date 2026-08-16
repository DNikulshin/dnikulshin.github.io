'use client';

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Button } from '@/shared/ui/kit/button';

function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  function Fallback({ error, resetErrorBoundary }: FallbackProps) {
    let errorMessage = 'Произошла непредвиденная ошибка';
    if (isError(error)) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'message' in error) {
      errorMessage = String(error.message);
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white p-4">
        <h1 className="text-2xl font-bold text-red-400 mb-4">Что-то пошло не так</h1>
        <p className="text-gray-400 mb-4 max-w-md text-center">{errorMessage}</p>
        <Button onClick={resetErrorBoundary} variant="default">
          Попробовать снова
        </Button>
      </div>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
