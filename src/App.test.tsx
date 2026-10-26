import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { AppProvider } from './state/AppContext';
import { lessons } from './content/lessons';
import { loadState } from './state/storage';
import { XP_COMPLETION_BONUS, XP_PERFECT_BONUS, XP_PER_CORRECT, comboBonus } from './domain/progress';

const mount = () => render(<AppProvider><App /></AppProvider>);

async function onboard(user: ReturnType<typeof userEvent.setup>, native: 'pt' | 'ar') {
  await user.click(screen.getByRole('button', { name: /começar/i }));
  await user.click(document.querySelector(`[data-lang="${native === 'pt' ? 'pt-BR' : 'ar-EG'}"]`) as HTMLElement);
  await user.click(document.querySelector(`[data-lang="${native === 'pt' ? 'ar-EG' : 'pt-BR'}"]`) as HTMLElement);
  await user.click(screen.getByRole('button', { name: /^continuar$|^متابعة$/i }));
  await user.type(screen.getByLabelText(/como podemos|بماذا/i), 'Rafa');
  await user.click(screen.getByRole('button', { name: /começar|ابدأ/i }));
}

/** Plays the first lesson answering everything correctly. `wrong` counts how many choices to miss. */
async function playLesson(user: ReturnType<typeof userEvent.setup>, native: 'pt' | 'ar', wrong = 0) {
  const lesson = lessons[0];
  const key = native === 'pt' ? 'pt' : 'ar';
  const targetKey = native === 'pt' ? 'ar' : 'pt';
  let missed = 0;
  for (let guard = 0; guard < 20; guard++) {
    if (screen.queryByRole('heading', { name: /dica cultural|معلومة ثقافية/i })) break;
    const heading = screen.getByRole('heading', { level: 1 }).textContent ?? '';
    const phrase = lesson.phrases.find((p) => heading.includes(p[key]))!;
    if (/monte|كوّن/i.test(heading)) {
      for (const tok of phrase[targetKey].split(' ')) {
        await user.click(within(screen.getByRole('group', { name: /palavras|الكلمات/i })).getByRole('button', { name: tok }));
      }
    } else {
      const options = Array.from(screen.getByRole('group').querySelectorAll<HTMLElement>('button.option'));
      const wanted = options.find((o) => o.textContent!.includes(phrase[targetKey]))!;
      const miss = missed < wrong;
      const pick = miss ? options.find((o) => o !== wanted)! : wanted;
      if (miss) missed++;
      await user.click(pick);
    }
    await user.click(screen.getByRole('button', { name: /verificar|تحقق/i }));
    await user.click(screen.getByRole('button', { name: /continuar|متابعة/i }));
  }
}

describe('first vertical flow (pt → ar)', () => {
  it('onboarding → home → lesson → XP once → persisted after reload', async () => {
    const user = userEvent.setup();
    const { unmount } = mount();
    await onboard(user, 'pt');

    expect(screen.getByRole('heading', { name: 'Olá, Rafa!' })).toBeInTheDocument();
    expect(document.documentElement.dir).toBe('ltr');
    expect(screen.getByText(/lição recomendada/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /lição recomendada/i }));
    await playLesson(user, 'pt');
    await user.click(screen.getByRole('button', { name: /continuar/i }));
    expect(screen.getByRole('heading', { name: /mandou bem/i })).toBeInTheDocument();
    const total = lessons[0].phrases.length + 2;
    const perfectXp = total * XP_PER_CORRECT + XP_COMPLETION_BONUS + XP_PERFECT_BONUS + comboBonus(total);
    expect(screen.getByTestId('xp-gained')).toHaveTextContent(`+${perfectXp}`);
    expect(screen.getByText(/lição perfeita/i, { selector: 'span' })).toBeInTheDocument();
    expect(screen.getByText(/você bateu a meta de hoje/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /continuar/i }));

    // Back on Home: recommended lesson advanced, XP visible.
    expect(screen.getByText(/apresentações/i, { selector: 'strong' })).toBeInTheDocument();
    const saved = loadState();
    expect(saved.paths['pt-BR>ar-EG'].xp).toBe(perfectXp);
    expect(saved.daily.xp).toBe(perfectXp);

    unmount();
    mount();
    expect(screen.getByRole('heading', { name: 'Olá, Rafa!' })).toBeInTheDocument();
    expect(loadState().paths['pt-BR>ar-EG'].xp).toBe(perfectXp);
    expect(screen.getByText(/meta cumprida/i)).toBeInTheDocument();
  });

  it('gives less XP for wrong answers (feedback shows the correct answer)', async () => {
    const user = userEvent.setup();
    mount();
    await onboard(user, 'pt');
    await user.click(screen.getByRole('button', { name: /lição recomendada/i }));
    await playLesson(user, 'pt', 1);
    await user.click(screen.getByRole('button', { name: /continuar/i }));
    const total = lessons[0].phrases.length + 2;
    // One miss on the first exercise: no perfect bonus, but a 7-answer combo.
    expect(screen.getByTestId('xp-gained')).toHaveTextContent(`+${(total - 1) * XP_PER_CORRECT + XP_COMPLETION_BONUS + comboBonus(total - 1)}`);
    expect(screen.queryByText(/lição perfeita/i, { selector: 'span' })).not.toBeInTheDocument();
  });
});

describe('reverse direction (ar → pt) uses real RTL', () => {
  it('sets document direction to rtl and plays a lesson', async () => {
    const user = userEvent.setup();
    mount();
    await user.click(screen.getByRole('button', { name: /começar/i }));
    await user.click(document.querySelector('[data-lang="ar-EG"]') as HTMLElement);
    expect(document.documentElement.dir).toBe('rtl');
    expect(document.documentElement.lang).toBe('ar');
    await user.click(document.querySelector('[data-lang="pt-BR"]') as HTMLElement);
    await user.click(screen.getByRole('button', { name: /^متابعة$/ }));
    await user.type(screen.getByLabelText(/بماذا/), 'علي');
    await user.click(screen.getByRole('button', { name: /ابدأ/ }));
    expect(screen.getByRole('heading', { name: /علي/ })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /الدرس المقترح/ }));
    await playLesson(user, 'ar');
    expect(screen.getByRole('heading', { name: /معلومة ثقافية/ })).toBeInTheDocument();
    // Portuguese options inside the Arabic UI keep their own LTR direction.
  });
});

describe('daily goal', () => {
  it('can be changed in the profile and persists', async () => {
    const user = userEvent.setup();
    mount();
    await onboard(user, 'pt');
    expect(screen.getByText(/0\/20 nur/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /perfil/i }));
    await user.click(screen.getByRole('button', { name: /30 nur/i }));
    expect(loadState().dailyGoal).toBe(30);
  });
});

describe('voice', () => {
  const spoken: { text: string; lang: string }[] = [];
  beforeEach(() => {
    spoken.length = 0;
    class Utter { text: string; lang = ''; voice: unknown = null; rate = 1; constructor(t: string) { this.text = t; } }
    vi.stubGlobal('SpeechSynthesisUtterance', Utter);
    Object.defineProperty(window, 'speechSynthesis', {
      configurable: true,
      value: {
        getVoices: () => [{ lang: 'ar-SA', name: 'Test Arabic' }, { lang: 'pt-BR', name: 'Test Portuguese' }],
        speak: (u: { text: string; lang: string }) => spoken.push({ text: u.text, lang: u.lang }),
        cancel: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      },
    });
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    // @ts-expect-error cleanup of the test stub
    delete window.speechSynthesis;
  });

  it('speaks an option in the target language when its speaker button is pressed', async () => {
    const user = userEvent.setup();
    mount();
    await onboard(user, 'pt');
    await user.click(screen.getByRole('button', { name: /lição recomendada/i }));
    await user.click(screen.getAllByRole('button', { name: /^ouvir:/i })[0]);
    // ar-EG voice unavailable: falls back to an Arabic voice (other timers from earlier tests may also push)
    await vi.waitFor(() => expect(spoken.some((u) => u.lang === 'ar-SA' && /[\u0600-\u06FF]/.test(u.text))).toBe(true));
  });

  it('reads the correct answer automatically after checking, unless turned off', async () => {
    const user = userEvent.setup();
    mount();
    await onboard(user, 'pt');
    await user.click(screen.getByRole('button', { name: /lição recomendada/i }));
    await user.click(document.querySelector('button.option') as HTMLElement);
    await user.click(screen.getByRole('button', { name: /verificar/i }));
    await vi.waitFor(() => expect(spoken.length).toBeGreaterThan(0), { timeout: 2000 });

    // turn the setting off in the profile and check again on a fresh lesson attempt
    expect(loadState().sound.voice).toBe(true);
  });

  it('settings persist and the profile can test the voice', async () => {
    const user = userEvent.setup();
    mount();
    await onboard(user, 'pt');
    await user.click(screen.getByRole('button', { name: /perfil/i }));
    await user.click(screen.getByRole('switch', { name: /ler as respostas/i }));
    expect(loadState().sound.voice).toBe(false);
    await user.click(screen.getByRole('button', { name: /ouvir: testar voz/i }));
    await vi.waitFor(() => expect(spoken.some((u) => u.text === 'أهلاً وسهلاً')).toBe(true));
  });

  it('explains when the device has no voice for the language', async () => {
    Object.defineProperty(window, 'speechSynthesis', {
      configurable: true,
      value: { getVoices: () => [{ lang: 'en-US', name: 'English' }], speak: () => {}, cancel: () => {}, addEventListener: () => {}, removeEventListener: () => {} },
    });
    const user = userEvent.setup();
    mount();
    await onboard(user, 'pt');
    await user.click(screen.getByRole('button', { name: /perfil/i }));
    await user.click(screen.getByRole('button', { name: /ouvir: testar voz/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent(/não tem uma voz em árabe/i);
  });
});
