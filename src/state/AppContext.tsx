import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { applyCompletion, getPath, initialState } from '../domain/progress';
import type { CompletionInput, CompletionResult } from '../domain/progress';
import { dirOf, otherLang } from '../domain/types';
import type { AppState, Lang } from '../domain/types';
import { t } from '../content/i18n';
import type { Strings } from '../content/i18n';
import { loadState, saveState } from './storage';

interface AppApi {
  state: AppState;
  s: Strings;
  path: ReturnType<typeof getPath>;
  storageOk: boolean;
  setNative: (lang: Lang) => void;
  setTarget: (lang: Lang) => void;
  finishOnboarding: (name: string) => void;
  switchPath: (native: Lang, target: Lang) => void;
  completeLesson: (input: CompletionInput) => CompletionResult;
  reset: () => void;
}

const Ctx = createContext<AppApi | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(loadState);
  const [storageOk, setStorageOk] = useState(true);
  const ref = useRef(state);

  const commit = useCallback((next: AppState) => {
    ref.current = next;
    setState(next);
  }, []);

  useEffect(() => {
    setStorageOk(saveState(state));
  }, [state]);

  // Real document direction + language follow the learner's native language.
  useEffect(() => {
    document.documentElement.lang = state.native === 'ar-EG' ? 'ar' : 'pt-BR';
    document.documentElement.dir = dirOf(state.native);
  }, [state.native]);

  const api = useMemo<AppApi>(
    () => ({
      state,
      s: t(state.native),
      path: getPath(state),
      storageOk,
      setNative: (native) => commit({ ...ref.current, native, target: otherLang(native) }),
      setTarget: (target) => commit({ ...ref.current, target }),
      finishOnboarding: (name) => commit({ ...ref.current, name: name.trim(), onboarded: true }),
      switchPath: (native, target) => commit({ ...ref.current, native, target }),
      completeLesson: (input) => {
        const result = applyCompletion(ref.current, input);
        if (!result.duplicate) commit(result.state);
        return result;
      },
      reset: () => commit(initialState()),
    }),
    [state, storageOk, commit],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useApp(): AppApi {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp must be used inside AppProvider');
  return v;
}
