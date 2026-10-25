import { describe, expect, it } from 'vitest';
import { loadState, saveState, STORAGE_KEY } from './storage';
import { initialState } from '../domain/progress';

describe('storage', () => {
  it('round-trips state', () => {
    const s = { ...initialState(), onboarded: true, name: 'Rafa' };
    saveState(s);
    expect(loadState()).toEqual(s);
  });
  it('falls back to a fresh state on corrupt data', () => {
    localStorage.setItem(STORAGE_KEY, '{not json');
    expect(loadState()).toEqual(initialState());
  });
  it('rejects unknown versions and equal native/target languages', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 99 }));
    expect(loadState().onboarded).toBe(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, native: 'ar-EG', target: 'ar-EG' }));
    const s = loadState();
    expect(s.target).toBe('pt-BR');
  });
});
