import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { phraseIdFor, playClip, resetClipManifest } from './clips';

describe('recorded clips', () => {
  const played: string[] = [];
  beforeEach(() => {
    played.length = 0;
    resetClipManifest();
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => ['ar-EG/bom-dia.mp3'] })));
    vi.stubGlobal('Audio', class {
      src: string; playbackRate = 1;
      constructor(src: string) { this.src = src; }
      async play() { played.push(`${this.src}@${this.playbackRate}`); }
      pause() {}
    });
  });
  afterEach(() => vi.unstubAllGlobals());

  it('finds the phrase id from either language text', () => {
    expect(phraseIdFor('صباح الخير', 'ar-EG')).toBe('bom-dia');
    expect(phraseIdFor('Bom dia', 'pt-BR')).toBe('bom-dia');
    expect(phraseIdFor('texto desconhecido', 'pt-BR')).toBeUndefined();
  });

  it('plays a listed clip (slower when asked) and reports false when there is none', async () => {
    expect(await playClip('صباح الخير', 'ar-EG')).toBe(true);
    expect(await playClip('صباح الخير', 'ar-EG', true)).toBe(true);
    expect(played).toEqual(['/audio/ar-EG/bom-dia.mp3@1', '/audio/ar-EG/bom-dia.mp3@0.7']);
    expect(await playClip('Bom dia', 'pt-BR')).toBe(false); // phrase known but no pt-BR clip listed
    expect(await playClip('desconhecido', 'ar-EG')).toBe(false);
  });

  it('treats a missing manifest as "no clips"', async () => {
    resetClipManifest();
    vi.stubGlobal('fetch', vi.fn(async () => { throw new Error('offline'); }));
    expect(await playClip('صباح الخير', 'ar-EG')).toBe(false);
  });
});
