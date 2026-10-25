import type { ReactNode } from 'react';
import { dirOf } from '../domain/types';
import type { Lang } from '../domain/types';

/** Wraps text in a specific language so shaping and direction are real, not simulated. */
export function Txt({ lang, children, className }: { lang: Lang; children: ReactNode; className?: string }) {
  return (
    <span lang={lang === 'ar-EG' ? 'ar' : 'pt-BR'} dir={dirOf(lang)} className={className}>
      {children}
    </span>
  );
}
