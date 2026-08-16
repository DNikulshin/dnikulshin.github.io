import { Loader2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <p className="mt-4 text-gray-400">Загрузка проектов...</p>
    </div>
  );
}
