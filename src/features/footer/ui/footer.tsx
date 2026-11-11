import { SITE } from '@/features/header/lib/_constants';

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="wrap flex flex-wrap justify-between gap-4 pt-5 pb-8 text-[13px] text-muted">
        <span>
          {SITE.name}, {new Date().getFullYear()}
        </span>
        <span>Сайт собирается из Next.js и данных с GitHub</span>
      </div>
    </footer>
  );
}
