'use client';

import { FallbackProps } from 'react-error-boundary';
import { Button } from '@/shared/ui/kit/button';

function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function ProjectsErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  let errorMessage = 'Неизвестная ошибка';

  if (isError(error)) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else if (error && typeof error === 'object' && 'message' in error) {
    errorMessage = String(error.message);
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-red-400 text-lg font-medium">Не удалось загрузить проекты</p>
      <p className="text-gray-400 text-sm mt-2">{errorMessage}</p>
      <Button variant="default" className="mt-4" onClick={resetErrorBoundary}>
        Попробовать снова
      </Button>
    </div>
  );
}
