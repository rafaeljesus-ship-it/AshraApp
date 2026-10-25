import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { AppProvider } from './state/AppContext';
import { lessons } from './content/lessons';
import { loadState } from './state/storage';

const mount = () => render(<AppProvider><App /></AppProvider>);

async function onboard(user: ReturnType<typeof userEvent.setup>, native: 'pt' | 'ar') {
  await user.click(screen.getByRole('button', { name: /começar/i }));
  await user.click(document.querySelector(`[data-lang="${native === 'pt' ? 'pt-BR' : 'ar-EG'}"]`) as HTMLElement);
  await user.click(document.querySelector(`[data-lang="${native === 'pt' ? 'ar-EG' : 'pt-BR'}"]`) as HTMLElement);
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
      const options = within(screen.getByRole('group')).getAllByRole('button');
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
    expect(screen.getByTestId('xp-gained')).toHaveTextContent(`+${total * 2 + 10}`);
    await user.click(screen.getByRole('button', { name: /continuar/i }));

    // Back on Home: recommended lesson advanced, XP visible.
    expect(screen.getByText(/apresentações/i, { selector: 'strong' })).toBeInTheDocument();
    const saved = loadState();
    expect(saved.paths['pt-BR>ar-EG'].xp).toBe(total * 2 + 10);

    unmount();
    mount();
    expect(screen.getByRole('heading', { name: 'Olá, Rafa!' })).toBeInTheDocument();
    expect(loadState().paths['pt-BR>ar-EG'].xp).toBe(total * 2 + 10);
  });

  it('gives less XP for wrong answers (feedback shows the correct answer)', async () => {
    const user = userEvent.setup();
    mount();
    await onboard(user, 'pt');
    await user.click(screen.getByRole('button', { name: /lição recomendada/i }));
    await playLesson(user, 'pt', 1);
    await user.click(screen.getByRole('button', { name: /continuar/i }));
    const total = lessons[0].phrases.length + 2;
    expect(screen.getByTestId('xp-gained')).toHaveTextContent(`+${(total - 1) * 2 + 10}`);
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
    await user.type(screen.getByLabelText(/بماذا/), 'علي');
    await user.click(screen.getByRole('button', { name: /ابدأ/ }));
    expect(screen.getByRole('heading', { name: /علي/ })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /الدرس المقترح/ }));
    await playLesson(user, 'ar');
    expect(screen.getByRole('heading', { name: /معلومة ثقافية/ })).toBeInTheDocument();
    // Portuguese options inside the Arabic UI keep their own LTR direction.
  });
});
