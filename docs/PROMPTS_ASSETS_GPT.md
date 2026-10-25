# ASHRA — Prompts de assets para o GPT (geração de imagens)

Gerado por `tools/gen_asset_prompts.py`. Prompts em inglês (melhor resultado); instruções em português.

## Como usar (leia antes)

1. **Uma imagem por mensagem.** Abra uma conversa por grupo. Na primeira mensagem anexe a prancha oficial e diga: *"Esta é a referência oficial de personagens e estilo da ASHRA. Vou pedir assets um por um; mantenha identidade e estilo idênticos."*
2. **Fundo magenta, não "transparente".** O GPT costuma desenhar um xadrez falso. Por isso os prompts pedem **magenta chapado #FF00FF**; eu removo o fundo depois com precisão (chroma key) e gero PNG com transparência real.
3. **Nada de texto na imagem.** O app renderiza todo o texto (árabe/RTL correto). Se vier texto, regenere.
4. **Tamanhos:** o GPT gera 1024×1024, 1536×1024 ou 1024×1536. Peça a versão maior; ampliações eu trato depois.
5. **Consistência:** mantenha o mesmo chat por personagem; se o rosto mudar, anexe de novo a prancha e diga *"IDENTICAL to the attached sheet"*.
6. **Entrega:** devolva os PNGs com o nome do campo **Arquivo** de cada prompt (num zip). Eu limpo, recorto e integro ao app.
7. **Papéis oficiais (não trocar):** Rafa aprende árabe egípcio; Ali aprende português; Claudia guia do Brasil; Fadia guia do Egito; Mohamed gramática; Nour mascote.

## Prompt-base de estilo

```
Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.
```


## Personagens (37)

Anexe SEMPRE a prancha oficial dos 6 personagens (docs/reference/pranchas/03_elenco_oficial_6_personagens.png) em cada conversa. 1 prompt = 1 imagem.

### 1. Rafa — Avatar portrait
- **Arquivo:** `public/characters/rafa.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Rafa. Black Brazilian man, late 20s, warm dark-brown skin, SHORT dreadlocks, short trimmed beard, big friendly smile; emerald-green zip hoodie over a white tee, small gold pendant necklace, brown backpack straps, olive cargo pants. Role: beginner learning Egyptian Arabic, curious and enthusiastic. Pose: Square head-and-shoulders portrait for an app avatar, facing the camera, genuine smile, centered, cropped at the chest.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 2. Rafa — Cumprimentando
- **Arquivo:** `public/characters/poses/rafa_greet.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Rafa. Black Brazilian man, late 20s, warm dark-brown skin, SHORT dreadlocks, short trimmed beard, big friendly smile; emerald-green zip hoodie over a white tee, small gold pendant necklace, brown backpack straps, olive cargo pants. Role: beginner learning Egyptian Arabic, curious and enthusiastic. Pose: Bust shot, waving hello with one hand, warm welcoming expression, slight 3/4 view.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 3. Rafa — Comemorando
- **Arquivo:** `public/characters/poses/rafa_cheer.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Rafa. Black Brazilian man, late 20s, warm dark-brown skin, SHORT dreadlocks, short trimmed beard, big friendly smile; emerald-green zip hoodie over a white tee, small gold pendant necklace, brown backpack straps, olive cargo pants. Role: beginner learning Egyptian Arabic, curious and enthusiastic. Pose: Bust shot, celebrating a win with a thumbs-up, joyful open-mouth smile, eyes bright.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 4. Rafa — Pensando
- **Arquivo:** `public/characters/poses/rafa_think.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Rafa. Black Brazilian man, late 20s, warm dark-brown skin, SHORT dreadlocks, short trimmed beard, big friendly smile; emerald-green zip hoodie over a white tee, small gold pendant necklace, brown backpack straps, olive cargo pants. Role: beginner learning Egyptian Arabic, curious and enthusiastic. Pose: Bust shot, thinking pose with a hand on the chin, one eyebrow raised, curious expression.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 5. Rafa — Incentivando (erro)
- **Arquivo:** `public/characters/poses/rafa_oops.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Rafa. Black Brazilian man, late 20s, warm dark-brown skin, SHORT dreadlocks, short trimmed beard, big friendly smile; emerald-green zip hoodie over a white tee, small gold pendant necklace, brown backpack straps, olive cargo pants. Role: beginner learning Egyptian Arabic, curious and enthusiastic. Pose: Bust shot, gentle encouraging smile and a small reassuring gesture, empathetic, "no worries, try again"; NOT sad, NOT crying.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 6. Rafa — Corpo inteiro
- **Arquivo:** `public/characters/full/rafa.png`
- **Tamanho:** 1024×1536 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Rafa. Black Brazilian man, late 20s, warm dark-brown skin, SHORT dreadlocks, short trimmed beard, big friendly smile; emerald-green zip hoodie over a white tee, small gold pendant necklace, brown backpack straps, olive cargo pants. Role: beginner learning Egyptian Arabic, curious and enthusiastic. Pose: Full-body standing pose, confident and friendly, slight 3/4 view, shoes visible, feet inside the frame.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 7. Fadia — Avatar portrait
- **Arquivo:** `public/characters/fadia.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Fadia. Egyptian woman, late 20s, warm caramel skin, big dark eyes, gentle smile, gold hoop earrings; long wavy brown hair partly covered by a loose cream scarf with embroidered trim; dark-green tunic with gold-orange traditional embroidery, thin gold bracelets. Role: cultural guide to Egypt and Egyptian Arabic, welcoming and warm. Pose: Square head-and-shoulders portrait for an app avatar, facing the camera, genuine smile, centered, cropped at the chest.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 8. Fadia — Cumprimentando
- **Arquivo:** `public/characters/poses/fadia_greet.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Fadia. Egyptian woman, late 20s, warm caramel skin, big dark eyes, gentle smile, gold hoop earrings; long wavy brown hair partly covered by a loose cream scarf with embroidered trim; dark-green tunic with gold-orange traditional embroidery, thin gold bracelets. Role: cultural guide to Egypt and Egyptian Arabic, welcoming and warm. Pose: Bust shot, waving hello with one hand, warm welcoming expression, slight 3/4 view.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 9. Fadia — Comemorando
- **Arquivo:** `public/characters/poses/fadia_cheer.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Fadia. Egyptian woman, late 20s, warm caramel skin, big dark eyes, gentle smile, gold hoop earrings; long wavy brown hair partly covered by a loose cream scarf with embroidered trim; dark-green tunic with gold-orange traditional embroidery, thin gold bracelets. Role: cultural guide to Egypt and Egyptian Arabic, welcoming and warm. Pose: Bust shot, celebrating a win with a thumbs-up, joyful open-mouth smile, eyes bright.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 10. Fadia — Pensando
- **Arquivo:** `public/characters/poses/fadia_think.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Fadia. Egyptian woman, late 20s, warm caramel skin, big dark eyes, gentle smile, gold hoop earrings; long wavy brown hair partly covered by a loose cream scarf with embroidered trim; dark-green tunic with gold-orange traditional embroidery, thin gold bracelets. Role: cultural guide to Egypt and Egyptian Arabic, welcoming and warm. Pose: Bust shot, thinking pose with a hand on the chin, one eyebrow raised, curious expression.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 11. Fadia — Incentivando (erro)
- **Arquivo:** `public/characters/poses/fadia_oops.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Fadia. Egyptian woman, late 20s, warm caramel skin, big dark eyes, gentle smile, gold hoop earrings; long wavy brown hair partly covered by a loose cream scarf with embroidered trim; dark-green tunic with gold-orange traditional embroidery, thin gold bracelets. Role: cultural guide to Egypt and Egyptian Arabic, welcoming and warm. Pose: Bust shot, gentle encouraging smile and a small reassuring gesture, empathetic, "no worries, try again"; NOT sad, NOT crying.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 12. Fadia — Corpo inteiro
- **Arquivo:** `public/characters/full/fadia.png`
- **Tamanho:** 1024×1536 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Fadia. Egyptian woman, late 20s, warm caramel skin, big dark eyes, gentle smile, gold hoop earrings; long wavy brown hair partly covered by a loose cream scarf with embroidered trim; dark-green tunic with gold-orange traditional embroidery, thin gold bracelets. Role: cultural guide to Egypt and Egyptian Arabic, welcoming and warm. Pose: Full-body standing pose, confident and friendly, slight 3/4 view, shoes visible, feet inside the frame.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 13. Ali — Avatar portrait
- **Arquivo:** `public/characters/ali.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Ali. Egyptian man, early 30s, completely BALD, full dark well-groomed BEARD, medium-brown skin, wide friendly grin; red-and-white patterned scarf around the neck, white linen shirt, brown backpack straps, beige cargo pants, wristwatch. Role: conversation partner learning Brazilian Portuguese, humorous and playful. Pose: Square head-and-shoulders portrait for an app avatar, facing the camera, genuine smile, centered, cropped at the chest.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 14. Ali — Cumprimentando
- **Arquivo:** `public/characters/poses/ali_greet.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Ali. Egyptian man, early 30s, completely BALD, full dark well-groomed BEARD, medium-brown skin, wide friendly grin; red-and-white patterned scarf around the neck, white linen shirt, brown backpack straps, beige cargo pants, wristwatch. Role: conversation partner learning Brazilian Portuguese, humorous and playful. Pose: Bust shot, waving hello with one hand, warm welcoming expression, slight 3/4 view.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 15. Ali — Comemorando
- **Arquivo:** `public/characters/poses/ali_cheer.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Ali. Egyptian man, early 30s, completely BALD, full dark well-groomed BEARD, medium-brown skin, wide friendly grin; red-and-white patterned scarf around the neck, white linen shirt, brown backpack straps, beige cargo pants, wristwatch. Role: conversation partner learning Brazilian Portuguese, humorous and playful. Pose: Bust shot, celebrating a win with a thumbs-up, joyful open-mouth smile, eyes bright.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 16. Ali — Pensando
- **Arquivo:** `public/characters/poses/ali_think.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Ali. Egyptian man, early 30s, completely BALD, full dark well-groomed BEARD, medium-brown skin, wide friendly grin; red-and-white patterned scarf around the neck, white linen shirt, brown backpack straps, beige cargo pants, wristwatch. Role: conversation partner learning Brazilian Portuguese, humorous and playful. Pose: Bust shot, thinking pose with a hand on the chin, one eyebrow raised, curious expression.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 17. Ali — Incentivando (erro)
- **Arquivo:** `public/characters/poses/ali_oops.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Ali. Egyptian man, early 30s, completely BALD, full dark well-groomed BEARD, medium-brown skin, wide friendly grin; red-and-white patterned scarf around the neck, white linen shirt, brown backpack straps, beige cargo pants, wristwatch. Role: conversation partner learning Brazilian Portuguese, humorous and playful. Pose: Bust shot, gentle encouraging smile and a small reassuring gesture, empathetic, "no worries, try again"; NOT sad, NOT crying.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 18. Ali — Corpo inteiro
- **Arquivo:** `public/characters/full/ali.png`
- **Tamanho:** 1024×1536 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Ali. Egyptian man, early 30s, completely BALD, full dark well-groomed BEARD, medium-brown skin, wide friendly grin; red-and-white patterned scarf around the neck, white linen shirt, brown backpack straps, beige cargo pants, wristwatch. Role: conversation partner learning Brazilian Portuguese, humorous and playful. Pose: Full-body standing pose, confident and friendly, slight 3/4 view, shoes visible, feet inside the frame.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 19. Mohamed — Avatar portrait
- **Arquivo:** `public/characters/mohamed.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Mohamed. Egyptian man, late 20s, dark voluminous curly hair, round dark-frame glasses, light stubble, olive-tan skin, thoughtful smile; gray knit scarf, navy open jacket over a light shirt, brown backpack, holds a brown leather book with a gold ornament. Role: grammar and expressions guide, calm and clear. Pose: Square head-and-shoulders portrait for an app avatar, facing the camera, genuine smile, centered, cropped at the chest.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 20. Mohamed — Cumprimentando
- **Arquivo:** `public/characters/poses/mohamed_greet.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Mohamed. Egyptian man, late 20s, dark voluminous curly hair, round dark-frame glasses, light stubble, olive-tan skin, thoughtful smile; gray knit scarf, navy open jacket over a light shirt, brown backpack, holds a brown leather book with a gold ornament. Role: grammar and expressions guide, calm and clear. Pose: Bust shot, waving hello with one hand, warm welcoming expression, slight 3/4 view.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 21. Mohamed — Comemorando
- **Arquivo:** `public/characters/poses/mohamed_cheer.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Mohamed. Egyptian man, late 20s, dark voluminous curly hair, round dark-frame glasses, light stubble, olive-tan skin, thoughtful smile; gray knit scarf, navy open jacket over a light shirt, brown backpack, holds a brown leather book with a gold ornament. Role: grammar and expressions guide, calm and clear. Pose: Bust shot, celebrating a win with a thumbs-up, joyful open-mouth smile, eyes bright.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 22. Mohamed — Pensando
- **Arquivo:** `public/characters/poses/mohamed_think.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Mohamed. Egyptian man, late 20s, dark voluminous curly hair, round dark-frame glasses, light stubble, olive-tan skin, thoughtful smile; gray knit scarf, navy open jacket over a light shirt, brown backpack, holds a brown leather book with a gold ornament. Role: grammar and expressions guide, calm and clear. Pose: Bust shot, thinking pose with a hand on the chin, one eyebrow raised, curious expression.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 23. Mohamed — Incentivando (erro)
- **Arquivo:** `public/characters/poses/mohamed_oops.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Mohamed. Egyptian man, late 20s, dark voluminous curly hair, round dark-frame glasses, light stubble, olive-tan skin, thoughtful smile; gray knit scarf, navy open jacket over a light shirt, brown backpack, holds a brown leather book with a gold ornament. Role: grammar and expressions guide, calm and clear. Pose: Bust shot, gentle encouraging smile and a small reassuring gesture, empathetic, "no worries, try again"; NOT sad, NOT crying.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 24. Mohamed — Corpo inteiro
- **Arquivo:** `public/characters/full/mohamed.png`
- **Tamanho:** 1024×1536 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Mohamed. Egyptian man, late 20s, dark voluminous curly hair, round dark-frame glasses, light stubble, olive-tan skin, thoughtful smile; gray knit scarf, navy open jacket over a light shirt, brown backpack, holds a brown leather book with a gold ornament. Role: grammar and expressions guide, calm and clear. Pose: Full-body standing pose, confident and friendly, slight 3/4 view, shoes visible, feet inside the frame.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 25. Claudia — Avatar portrait
- **Arquivo:** `public/characters/claudia.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Claudia. Brazilian woman, late 20s, SHORT voluminous curly dark-brown hair, light-brown skin, joyful smile, large gold hoop earrings, thin gold necklace; mustard-yellow t-shirt under an open green kimono-style jacket with orange-gold pattern, green cargo pants, green backpack straps. Role: guide to Brazil and Brazilian Portuguese, energetic and adventurous. Pose: Square head-and-shoulders portrait for an app avatar, facing the camera, genuine smile, centered, cropped at the chest.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 26. Claudia — Cumprimentando
- **Arquivo:** `public/characters/poses/claudia_greet.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Claudia. Brazilian woman, late 20s, SHORT voluminous curly dark-brown hair, light-brown skin, joyful smile, large gold hoop earrings, thin gold necklace; mustard-yellow t-shirt under an open green kimono-style jacket with orange-gold pattern, green cargo pants, green backpack straps. Role: guide to Brazil and Brazilian Portuguese, energetic and adventurous. Pose: Bust shot, waving hello with one hand, warm welcoming expression, slight 3/4 view.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 27. Claudia — Comemorando
- **Arquivo:** `public/characters/poses/claudia_cheer.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Claudia. Brazilian woman, late 20s, SHORT voluminous curly dark-brown hair, light-brown skin, joyful smile, large gold hoop earrings, thin gold necklace; mustard-yellow t-shirt under an open green kimono-style jacket with orange-gold pattern, green cargo pants, green backpack straps. Role: guide to Brazil and Brazilian Portuguese, energetic and adventurous. Pose: Bust shot, celebrating a win with a thumbs-up, joyful open-mouth smile, eyes bright.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 28. Claudia — Pensando
- **Arquivo:** `public/characters/poses/claudia_think.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Claudia. Brazilian woman, late 20s, SHORT voluminous curly dark-brown hair, light-brown skin, joyful smile, large gold hoop earrings, thin gold necklace; mustard-yellow t-shirt under an open green kimono-style jacket with orange-gold pattern, green cargo pants, green backpack straps. Role: guide to Brazil and Brazilian Portuguese, energetic and adventurous. Pose: Bust shot, thinking pose with a hand on the chin, one eyebrow raised, curious expression.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 29. Claudia — Incentivando (erro)
- **Arquivo:** `public/characters/poses/claudia_oops.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Claudia. Brazilian woman, late 20s, SHORT voluminous curly dark-brown hair, light-brown skin, joyful smile, large gold hoop earrings, thin gold necklace; mustard-yellow t-shirt under an open green kimono-style jacket with orange-gold pattern, green cargo pants, green backpack straps. Role: guide to Brazil and Brazilian Portuguese, energetic and adventurous. Pose: Bust shot, gentle encouraging smile and a small reassuring gesture, empathetic, "no worries, try again"; NOT sad, NOT crying.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 30. Claudia — Corpo inteiro
- **Arquivo:** `public/characters/full/claudia.png`
- **Tamanho:** 1024×1536 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Claudia. Brazilian woman, late 20s, SHORT voluminous curly dark-brown hair, light-brown skin, joyful smile, large gold hoop earrings, thin gold necklace; mustard-yellow t-shirt under an open green kimono-style jacket with orange-gold pattern, green cargo pants, green backpack straps. Role: guide to Brazil and Brazilian Portuguese, energetic and adventurous. Pose: Full-body standing pose, confident and friendly, slight 3/4 view, shoes visible, feet inside the frame.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 31. Nour — Avatar portrait
- **Arquivo:** `public/characters/nour.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Nour. Cute stylized baby-camel mascot, soft golden-beige plush-like fur, big glossy brown eyes, small rounded ears with pink inside, a tuft of ginger hair on the head, friendly open mouth; emerald-green bandana with a gold eight-pointed flower emblem, small green patterned saddlebag with gold details. Role: mascot of trails, points (Nur) and achievements. Pose: Square head-and-neck portrait of the camel for an app avatar, facing the camera, big smile, centered.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 32. Nour — Cumprimentando
- **Arquivo:** `public/characters/poses/nour_greet.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Nour. Cute stylized baby-camel mascot, soft golden-beige plush-like fur, big glossy brown eyes, small rounded ears with pink inside, a tuft of ginger hair on the head, friendly open mouth; emerald-green bandana with a gold eight-pointed flower emblem, small green patterned saddlebag with gold details. Role: mascot of trails, points (Nur) and achievements. Pose: Bust shot, waving one hoof hello, cheerful open-mouth smile.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 33. Nour — Comemorando
- **Arquivo:** `public/characters/poses/nour_cheer.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Nour. Cute stylized baby-camel mascot, soft golden-beige plush-like fur, big glossy brown eyes, small rounded ears with pink inside, a tuft of ginger hair on the head, friendly open mouth; emerald-green bandana with a gold eight-pointed flower emblem, small green patterned saddlebag with gold details. Role: mascot of trails, points (Nur) and achievements. Pose: Bust shot, jumping with joy holding a small glowing gold star, huge happy eyes.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 34. Nour — Pensando
- **Arquivo:** `public/characters/poses/nour_think.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Nour. Cute stylized baby-camel mascot, soft golden-beige plush-like fur, big glossy brown eyes, small rounded ears with pink inside, a tuft of ginger hair on the head, friendly open mouth; emerald-green bandana with a gold eight-pointed flower emblem, small green patterned saddlebag with gold details. Role: mascot of trails, points (Nur) and achievements. Pose: Bust shot, head tilted, one hoof near the chin, curious look.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 35. Nour — Incentivando (erro)
- **Arquivo:** `public/characters/poses/nour_oops.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Nour. Cute stylized baby-camel mascot, soft golden-beige plush-like fur, big glossy brown eyes, small rounded ears with pink inside, a tuft of ginger hair on the head, friendly open mouth; emerald-green bandana with a gold eight-pointed flower emblem, small green patterned saddlebag with gold details. Role: mascot of trails, points (Nur) and achievements. Pose: Bust shot, warm encouraging smile, small supportive nod, soft sparkle; NOT sad.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 36. Nour — Corpo inteiro
- **Arquivo:** `public/characters/full/nour.png`
- **Tamanho:** 1024×1536 · **Fundo:** Fundo magenta (recorte)

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. Nour. Cute stylized baby-camel mascot, soft golden-beige plush-like fur, big glossy brown eyes, small rounded ears with pink inside, a tuft of ginger hair on the head, friendly open mouth; emerald-green bandana with a gold eight-pointed flower emblem, small green patterned saddlebag with gold details. Role: mascot of trails, points (Nur) and achievements. Pose: Full-body standing pose on four legs, 3/4 view, proud and friendly, saddlebag visible.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 37. Grupo — selfie dos seis
- **Arquivo:** `public/assets/brand/group_selfie.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, outfit colors and proportions IDENTICAL to the sheet. All six official characters together in a joyful group selfie, Rafa's arm extended toward the camera in the foreground, Fadia, Ali, Mohamed, Claudia and Nour (the camel, front right) close around him, everyone laughing and looking at the camera. Behind them a warm blend of Cairo minarets and pyramids on the left and Rio's Christ the Redeemer statue and green hills on the right, golden-hour light, palm leaves framing the corners.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```


## Ícones de jogo (24)

Estilo 3D brilhante. Uma imagem por vez, fundo magenta para recorte.

### 38. Nur (pontos) — estrela
- **Arquivo:** `public/assets/icons/nur.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a rounded golden star with a soft glow, warm yellow-orange gradient.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 39. Nível — coroa
- **Arquivo:** `public/assets/icons/level.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a violet-purple crown with three rounded points and a tiny gold gem.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 40. Conquistas — troféu
- **Arquivo:** `public/assets/icons/achievements.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a golden trophy cup with two handles and a small star on the front.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 41. Sequência — chama
- **Arquivo:** `public/assets/icons/streak.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: an orange-red flame with a bright yellow core, friendly rounded shape.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 42. Calendário
- **Arquivo:** `public/assets/icons/calendar.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a rounded green calendar page with a grid of small dots and two gold rings on top.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 43. Lição — gema
- **Arquivo:** `public/assets/icons/lesson.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: an emerald-green faceted hexagonal gem with a bright highlight.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 44. Gramática — livro
- **Arquivo:** `public/assets/icons/grammar.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: an open dark-green book with cream pages and a gold ribbon bookmark.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 45. Favorito — coração
- **Arquivo:** `public/assets/icons/heart.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a glossy red heart.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 46. Estrela azul
- **Arquivo:** `public/assets/icons/star_blue.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a rounded sky-blue star with a soft glow.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 47. Recompensa — medalha
- **Arquivo:** `public/assets/icons/medal.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a round gold medal with an eight-pointed star engraved in the center.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 48. Explorar — bússola
- **Arquivo:** `public/assets/icons/compass.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a brass compass with a teal face and a gold needle.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 49. Explorar — globo
- **Arquivo:** `public/assets/icons/globe.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a blue globe with green continents and a gold stand.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 50. Mapa — pergaminho
- **Arquivo:** `public/assets/icons/map.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a rolled parchment map with a dotted route and a red pin.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 51. Mochila
- **Arquivo:** `public/assets/icons/backpack.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: an emerald-green explorer backpack with a gold eight-pointed flower emblem.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 52. Lanterna
- **Arquivo:** `public/assets/icons/lantern.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a brass Egyptian-style lantern with warm glowing light and ornate cut-outs.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 53. Comunidade
- **Arquivo:** `public/assets/icons/community.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: three friendly abstract people silhouettes in emerald green, rounded.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 54. Configurações
- **Arquivo:** `public/assets/icons/settings.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a steel-blue rounded gear.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 55. Gravação — microfone
- **Arquivo:** `public/assets/icons/mic.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a white microphone on a round emerald-green button.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 56. Som — alto-falante
- **Arquivo:** `public/assets/icons/speaker.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a white speaker with two sound waves on a round emerald-green button.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 57. Play / iniciar
- **Arquivo:** `public/assets/icons/play.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a white play triangle on a round emerald-green button.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 58. Bloqueado — cadeado
- **Arquivo:** `public/assets/icons/lock.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a gray-silver padlock with a soft shadow, calm and muted.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 59. Correto — check
- **Arquivo:** `public/assets/icons/correct.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a white check mark on a round emerald-green button.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 60. Incorreto — X
- **Arquivo:** `public/assets/icons/wrong.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a white X on a round coral-red button, soft not aggressive.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 61. Confete / brilho
- **Arquivo:** `public/assets/icons/confetti.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Single 3D glossy game-UI icon, centered: a burst of gold and emerald confetti pieces and small stars radiating from a center point, symmetrical.
Rounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```


## Ícones de navegação (10)

Linha simples (inativo) e preenchido branco (ativo, sobre pílula verde).

### 62. Navegação — Início (inativo)
- **Arquivo:** `public/assets/nav/home.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded line icon of a house, 4px-style uniform outline stroke, rounded caps, muted green-gray #5D6B65, no fill, centered, simple and legible at 24px.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 63. Navegação — Início (ativo)
- **Arquivo:** `public/assets/nav/home_active.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded solid icon of a house, filled white, centered, simple and legible at 24px, designed to sit on an emerald-green pill.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 64. Navegação — Lições (inativo)
- **Arquivo:** `public/assets/nav/lessons.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded line icon of an open book, 4px-style uniform outline stroke, rounded caps, muted green-gray #5D6B65, no fill, centered, simple and legible at 24px.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 65. Navegação — Lições (ativo)
- **Arquivo:** `public/assets/nav/lessons_active.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded solid icon of an open book, filled white, centered, simple and legible at 24px, designed to sit on an emerald-green pill.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 66. Navegação — Explorar (inativo)
- **Arquivo:** `public/assets/nav/explore.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded line icon of a compass, 4px-style uniform outline stroke, rounded caps, muted green-gray #5D6B65, no fill, centered, simple and legible at 24px.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 67. Navegação — Explorar (ativo)
- **Arquivo:** `public/assets/nav/explore_active.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded solid icon of a compass, filled white, centered, simple and legible at 24px, designed to sit on an emerald-green pill.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 68. Navegação — Conquistas (inativo)
- **Arquivo:** `public/assets/nav/achievements.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded line icon of a star badge, 4px-style uniform outline stroke, rounded caps, muted green-gray #5D6B65, no fill, centered, simple and legible at 24px.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 69. Navegação — Conquistas (ativo)
- **Arquivo:** `public/assets/nav/achievements_active.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded solid icon of a star badge, filled white, centered, simple and legible at 24px, designed to sit on an emerald-green pill.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 70. Navegação — Perfil (inativo)
- **Arquivo:** `public/assets/nav/profile.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded line icon of a person bust, 4px-style uniform outline stroke, rounded caps, muted green-gray #5D6B65, no fill, centered, simple and legible at 24px.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```

### 71. Navegação — Perfil (ativo)
- **Arquivo:** `public/assets/nav/profile_active.png`
- **Tamanho:** 512×512 · **Fundo:** Fundo magenta (recorte)

```
Flat rounded solid icon of a person bust, filled white, centered, simple and legible at 24px, designed to sit on an emerald-green pill.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame. gradients, 3D, shadows.
```


## Cenários, cards de trilha e fundos (18)

Sem personagens e sem texto. O app aplica degradês e legendas por cima.

### 72. Egito — pirâmides e Nilo
- **Arquivo:** `public/assets/scenes/egypt_pyramids.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
The Giza pyramids across the Nile with date palms in the foreground, a traditional felucca sailboat on the water, a few puffy clouds. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 73. Egito — skyline do Cairo
- **Arquivo:** `public/assets/scenes/egypt_cairo.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Cairo skyline with domes and slender minarets along the Nile at sunset, palm trees, small boats on the river. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 74. Egito — café com chá
- **Arquivo:** `public/assets/scenes/egypt_cafe.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Cozy lantern-lit Egyptian café interior, arched windows showing minarets, low tables with brass teapot and tea glasses, colorful patterned cushions, warm amber light. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 75. Egito — bazar
- **Arquivo:** `public/assets/scenes/egypt_bazaar.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Narrow bazaar alley with hanging brass lanterns, colorful fabrics, spice baskets, ornate wooden mashrabiya balconies, light shafts. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 76. Egito — arco ornamentado
- **Arquivo:** `public/assets/scenes/egypt_arch.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Ornate carved stone archway with hanging lanterns framing a view of a palm tree and blue sky. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 77. Egito — natureza-morta chá
- **Arquivo:** `public/assets/scenes/egypt_tea.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Still life on a patterned table: brass teapot, a glass of red tea, a plate of dates and sweets, soft bokeh café behind. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 78. Brasil — Cristo Redentor
- **Arquivo:** `public/assets/scenes/rio_christ.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Christ the Redeemer statue on Corcovado hill with lush green forest, Rio skyline and bay below, palm trees on the right, bright blue sky. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 79. Brasil — orla do Rio
- **Arquivo:** `public/assets/scenes/rio_coast.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Rio de Janeiro coastline with Sugarloaf Mountain, a sweeping beach, buildings, palms and a turquoise sea. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 80. Brasil — escadaria colorida
- **Arquivo:** `public/assets/scenes/rio_lapa.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Colorful tiled stairway and white Lapa-style arches with warm street lights, tropical plants, lively evening atmosphere. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 81. Brasil — natureza-morta café
- **Arquivo:** `public/assets/scenes/brazil_food.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Still life: small cup of coffee, a basket of pão de queijo, brigadeiros, a slice of papaya, tropical leaves, soft bokeh Brazilian café behind. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 82. Card de trilha — Básico
- **Arquivo:** `public/assets/trails/basic.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Wide composition weighted to the right: palms and a pyramid on the left blending into Rio coast and hills on the right; leave the left third calm and uncluttered for UI. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 83. Card de trilha — Conversas reais
- **Arquivo:** `public/assets/trails/conversations.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Wide composition: warm café scene with a brass teapot and red tea glass on a table in the foreground, arched windows behind; leave the left third calm for UI. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 84. Card de trilha — Cultura e viagens
- **Arquivo:** `public/assets/trails/culture.png`
- **Tamanho:** 1536×1024 · **Fundo:** Cena completa

```
Wide composition: pyramids with palms and the Nile, a tiny sailboat; calm sky on the left third for UI. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 85. Fundo de lição — Egito (escuro)
- **Arquivo:** `public/assets/backgrounds/lesson_egypt.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Dim warm blurred Egyptian café interior, glowing brass lanterns, bokeh lights, deep emerald and amber tones, very soft focus, large calm area in the center for UI. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 86. Fundo de lição — Brasil (escuro)
- **Arquivo:** `public/assets/backgrounds/lesson_brazil.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Dim warm blurred Brazilian evening street, string lights, tropical leaves, deep emerald and amber tones, very soft focus, large calm area in the center for UI. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 87. Fundo do mapa de trilha
- **Arquivo:** `public/assets/backgrounds/trail_map.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Vertical illustrated landscape from top to bottom: desert dunes and pyramids, an oasis with palms, a river with a small boat, green hills; a soft winding empty path of lighter ground meanders top to bottom. No markers on the path. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 88. Fundo de recompensa
- **Arquivo:** `public/assets/backgrounds/reward.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Deep emerald-green radial background with soft golden light rays, floating gold stars and confetti, subtle ornamental eight-pointed star pattern in the corners, calm center. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 89. Hero de boas-vindas
- **Arquivo:** `public/assets/backgrounds/onboarding.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Vertical hero: left half Egypt (pyramids, minarets, palms), right half Brazil (Christ the Redeemer, green hills, beach) blending softly in the middle under one golden sky; bottom 35% fades into plain warm ivory #FBF6E9 for UI. Full-bleed illustration, no characters, no people, no text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish. Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```


## Marca (3)

O nome "ASHRA" é desenhado pelo app com fonte, não pela IA (evita erros de grafia).

### 90. Marca — estrela ASHRA
- **Arquivo:** `public/assets/brand/mark.png`
- **Tamanho:** 1024×1024 · **Fundo:** Fundo magenta (recorte)

```
Logo mark only, no text: an ornate eight-pointed geometric flower star, emerald green with gold outline and a small round center, symmetrical, inspired by Islamic geometric patterns and Brazilian tropical flowers, elegant and modern, flat-to-subtle-3D.

Background: Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 91. Ícone do app
- **Arquivo:** `public/assets/brand/app_icon.png`
- **Tamanho:** 1024×1024 · **Fundo:** Cena completa

```
Square app icon artwork, full-bleed (no rounded corners, no transparency): the emerald-and-gold eight-pointed flower star centered on a deep emerald-green background with a subtle radial glow and faint geometric pattern; keep important content inside the central 80%.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```

### 92. Splash (sem texto)
- **Arquivo:** `public/assets/brand/splash.png`
- **Tamanho:** 1024×1536 · **Fundo:** Cena completa

```
Vertical splash background: warm ivory-to-gold sky, soft silhouettes of minarets and pyramids on one side and Rio hills on the other, large calm empty area in the upper middle where the logo will be placed by the app. No text.

Style: Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. Warm, respectful, non-stereotyped, never childish.

Avoid: text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.
```
