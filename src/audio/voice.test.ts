import { describe, expect, it } from 'vitest';
import { pickVoice } from './voice';
import { playSfx } from './sfx';

const v = (lang: string) => ({ lang, name: lang });

describe('pickVoice', () => {
  it('prefers Egyptian Arabic, then Saudi, then any Arabic', () => {
    expect(pickVoice([v('ar-SA'), v('ar-EG'), v('en-US')], 'ar-EG')?.lang).toBe('ar-EG');
    expect(pickVoice([v('ar-AE'), v('ar-SA')], 'ar-EG')?.lang).toBe('ar-SA');
    expect(pickVoice([v('ar-AE')], 'ar-EG')?.lang).toBe('ar-AE');
  });
  it('prefers Brazilian Portuguese over European', () => {
    expect(pickVoice([v('pt-PT'), v('pt-BR')], 'pt-BR')?.lang).toBe('pt-BR');
    expect(pickVoice([v('pt_PT')], 'pt-BR')?.lang).toBe('pt_PT');
  });
  it('returns undefined when no voice speaks the language', () => {
    expect(pickVoice([v('en-US'), v('es-ES')], 'ar-EG')).toBeUndefined();
    expect(pickVoice([v('en-US')], 'pt-BR')).toBeUndefined();
    expect(pickVoice([], 'pt-BR')).toBeUndefined();
  });
});

describe('sfx', () => {
  it('is silent (no throw) where Web Audio is unavailable', () => {
    expect(() => playSfx('win')).not.toThrow();
  });
});
