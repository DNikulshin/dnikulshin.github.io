'use client';

export function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-indigo-400/20 bg-indigo-950/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-indigo-200/70">
          © {new Date().getFullYear()} DNikulshin. Все права защищены.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/DNikulshin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-200/80 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:d.nikulshin.dev@gmail.com"
            className="text-indigo-200/80 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
