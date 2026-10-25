#!/usr/bin/env python3
"""Generates docs/PROMPTS_ASSETS_GPT.md (and an optional HTML page) with image-generation prompts for ASHRA assets.
Usage: python3 tools/gen_asset_prompts.py [out.html]"""
import html, sys, json

STYLE = ("Premium 3D-animated feature-film look, stylized cartoon proportions, large expressive eyes, soft skin shading, "
         "warm cinematic lighting, rich saturated colors, polished clean render, mobile-game asset quality. "
         "Brand palette: emerald green #0B6B4F, soft gold #E0B84C, ivory cream, with coral and sky-blue accents. "
         "Warm, respectful, non-stereotyped, never childish.")
AVOID = ("text, letters, numbers, captions, name plates, logos, watermark, flags, UI frames, borders, "
         "fake checkerboard transparency pattern, extra fingers, distorted hands, cropped heads, other characters in the frame.")
KEY = ("Isolated on a perfectly flat solid magenta #FF00FF background (no gradient, no floor, no cast shadow, no checkerboard), "
       "crisp clean edges, whole subject inside the frame with a margin. Do not use magenta on the subject itself.")
FULL = "Full-bleed illustration, no characters, no people, no text."
REF = ("Use the attached official ASHRA character sheet as the identity reference. Keep this character's face, hair, skin tone, "
       "outfit colors and proportions IDENTICAL to the sheet. ")

CH = {
 'rafa': ("Rafa", "Black Brazilian man, late 20s, warm dark-brown skin, SHORT dreadlocks, short trimmed beard, big friendly smile; emerald-green zip hoodie over a white tee, small gold pendant necklace, brown backpack straps, olive cargo pants. Role: beginner learning Egyptian Arabic, curious and enthusiastic."),
 'fadia': ("Fadia", "Egyptian woman, late 20s, warm caramel skin, big dark eyes, gentle smile, gold hoop earrings; long wavy brown hair partly covered by a loose cream scarf with embroidered trim; dark-green tunic with gold-orange traditional embroidery, thin gold bracelets. Role: cultural guide to Egypt and Egyptian Arabic, welcoming and warm."),
 'ali': ("Ali", "Egyptian man, early 30s, completely BALD, full dark well-groomed BEARD, medium-brown skin, wide friendly grin; red-and-white patterned scarf around the neck, white linen shirt, brown backpack straps, beige cargo pants, wristwatch. Role: conversation partner learning Brazilian Portuguese, humorous and playful."),
 'mohamed': ("Mohamed", "Egyptian man, late 20s, dark voluminous curly hair, round dark-frame glasses, light stubble, olive-tan skin, thoughtful smile; gray knit scarf, navy open jacket over a light shirt, brown backpack, holds a brown leather book with a gold ornament. Role: grammar and expressions guide, calm and clear."),
 'claudia': ("Claudia", "Brazilian woman, late 20s, SHORT voluminous curly dark-brown hair, light-brown skin, joyful smile, large gold hoop earrings, thin gold necklace; mustard-yellow t-shirt under an open green kimono-style jacket with orange-gold pattern, green cargo pants, green backpack straps. Role: guide to Brazil and Brazilian Portuguese, energetic and adventurous."),
 'nour': ("Nour", "Cute stylized baby-camel mascot, soft golden-beige plush-like fur, big glossy brown eyes, small rounded ears with pink inside, a tuft of ginger hair on the head, friendly open mouth; emerald-green bandana with a gold eight-pointed flower emblem, small green patterned saddlebag with gold details. Role: mascot of trails, points (Nur) and achievements."),
}
POSES = [
 ('avatar', 'Avatar portrait', 'Square head-and-shoulders portrait for an app avatar, facing the camera, genuine smile, centered, cropped at the chest.', '1024×1024', 'public/characters/<id>.png'),
 ('greet', 'Cumprimentando', 'Bust shot, waving hello with one hand, warm welcoming expression, slight 3/4 view.', '1024×1024', 'public/characters/poses/<id>_greet.png'),
 ('cheer', 'Comemorando', 'Bust shot, celebrating a win with a thumbs-up, joyful open-mouth smile, eyes bright.', '1024×1024', 'public/characters/poses/<id>_cheer.png'),
 ('think', 'Pensando', 'Bust shot, thinking pose with a hand on the chin, one eyebrow raised, curious expression.', '1024×1024', 'public/characters/poses/<id>_think.png'),
 ('oops', 'Incentivando (erro)', 'Bust shot, gentle encouraging smile and a small reassuring gesture, empathetic, "no worries, try again"; NOT sad, NOT crying.', '1024×1024', 'public/characters/poses/<id>_oops.png'),
 ('full', 'Corpo inteiro', 'Full-body standing pose, confident and friendly, slight 3/4 view, shoes visible, feet inside the frame.', '1024×1536', 'public/characters/full/<id>.png'),
]
NOUR_POSE = {
 'greet': 'Bust shot, waving one hoof hello, cheerful open-mouth smile.',
 'cheer': 'Bust shot, jumping with joy holding a small glowing gold star, huge happy eyes.',
 'think': 'Bust shot, head tilted, one hoof near the chin, curious look.',
 'oops': 'Bust shot, warm encouraging smile, small supportive nod, soft sparkle; NOT sad.',
 'full': 'Full-body standing pose on four legs, 3/4 view, proud and friendly, saddlebag visible.',
}

def char_prompts():
    out = []
    for cid, (name, desc) in CH.items():
        for key, label, pose, size, path in POSES:
            if cid == 'nour' and key in NOUR_POSE: pose = NOUR_POSE[key]
            if cid == 'nour' and key == 'avatar': pose = 'Square head-and-neck portrait of the camel for an app avatar, facing the camera, big smile, centered.'
            subj = f"{name}. {desc} Pose: {pose}"
            out.append(dict(id=f"{cid}_{key}", title=f"{name} — {label}", size=size, bg='Fundo magenta (recorte)', path=path.replace('<id>', cid),
                            text=f"{REF}{subj}\n\nStyle: {STYLE}\n\nBackground: {KEY}\n\nAvoid: {AVOID}"))
    group = dict(id='group_selfie', title='Grupo — selfie dos seis', size='1536×1024', bg='Cena completa', path='public/assets/brand/group_selfie.png',
        text=f"{REF}All six official characters together in a joyful group selfie, Rafa's arm extended toward the camera in the foreground, Fadia, Ali, Mohamed, Claudia and Nour (the camel, front right) close around him, everyone laughing and looking at the camera. Behind them a warm blend of Cairo minarets and pyramids on the left and Rio's Christ the Redeemer statue and green hills on the right, golden-hour light, palm leaves framing the corners.\n\nStyle: {STYLE}\n\nAvoid: {AVOID}")
    return out + [group]

def icon(i, title, subj, path):
    return dict(id=i, title=title, size='1024×1024', bg='Fundo magenta (recorte)', path=path,
        text=f"Single 3D glossy game-UI icon, centered: {subj}\nRounded, chunky, soft bevel, subtle inner highlights, gentle depth, consistent with a premium mobile learning game. One object only.\n\nStyle: {STYLE}\n\nBackground: {KEY}\n\nAvoid: {AVOID}")

ICONS = [
 icon('nur_star','Nur (pontos) — estrela','a rounded golden star with a soft glow, warm yellow-orange gradient.','public/assets/icons/nur.png'),
 icon('level_crown','Nível — coroa','a violet-purple crown with three rounded points and a tiny gold gem.','public/assets/icons/level.png'),
 icon('trophy','Conquistas — troféu','a golden trophy cup with two handles and a small star on the front.','public/assets/icons/achievements.png'),
 icon('flame','Sequência — chama','an orange-red flame with a bright yellow core, friendly rounded shape.','public/assets/icons/streak.png'),
 icon('calendar','Calendário','a rounded green calendar page with a grid of small dots and two gold rings on top.','public/assets/icons/calendar.png'),
 icon('lesson_gem','Lição — gema','an emerald-green faceted hexagonal gem with a bright highlight.','public/assets/icons/lesson.png'),
 icon('grammar_book','Gramática — livro','an open dark-green book with cream pages and a gold ribbon bookmark.','public/assets/icons/grammar.png'),
 icon('heart','Favorito — coração','a glossy red heart.','public/assets/icons/heart.png'),
 icon('blue_star','Estrela azul','a rounded sky-blue star with a soft glow.','public/assets/icons/star_blue.png'),
 icon('medal','Recompensa — medalha','a round gold medal with an eight-pointed star engraved in the center.','public/assets/icons/medal.png'),
 icon('compass','Explorar — bússola','a brass compass with a teal face and a gold needle.','public/assets/icons/compass.png'),
 icon('globe','Explorar — globo','a blue globe with green continents and a gold stand.','public/assets/icons/globe.png'),
 icon('map_scroll','Mapa — pergaminho','a rolled parchment map with a dotted route and a red pin.','public/assets/icons/map.png'),
 icon('backpack','Mochila','an emerald-green explorer backpack with a gold eight-pointed flower emblem.','public/assets/icons/backpack.png'),
 icon('lantern','Lanterna','a brass Egyptian-style lantern with warm glowing light and ornate cut-outs.','public/assets/icons/lantern.png'),
 icon('community','Comunidade','three friendly abstract people silhouettes in emerald green, rounded.','public/assets/icons/community.png'),
 icon('gear','Configurações','a steel-blue rounded gear.','public/assets/icons/settings.png'),
 icon('mic','Gravação — microfone','a white microphone on a round emerald-green button.','public/assets/icons/mic.png'),
 icon('speaker','Som — alto-falante','a white speaker with two sound waves on a round emerald-green button.','public/assets/icons/speaker.png'),
 icon('play','Play / iniciar','a white play triangle on a round emerald-green button.','public/assets/icons/play.png'),
 icon('lock','Bloqueado — cadeado','a gray-silver padlock with a soft shadow, calm and muted.','public/assets/icons/lock.png'),
 icon('check','Correto — check','a white check mark on a round emerald-green button.','public/assets/icons/correct.png'),
 icon('cross','Incorreto — X','a white X on a round coral-red button, soft not aggressive.','public/assets/icons/wrong.png'),
 icon('confetti','Confete / brilho','a burst of gold and emerald confetti pieces and small stars radiating from a center point, symmetrical.','public/assets/icons/confetti.png'),
]
NAV = [('home','Início','a house'),('lessons','Lições','an open book'),('explore','Explorar','a compass'),('achievements','Conquistas','a star badge'),('profile','Perfil','a person bust')]
for k,t,o in NAV:
    ICONS.append(dict(id=f'nav_{k}_off', title=f'Navegação — {t} (inativo)', size='512×512', bg='Fundo magenta (recorte)', path=f'public/assets/nav/{k}.png',
      text=f"Flat rounded line icon of {o}, 4px-style uniform outline stroke, rounded caps, muted green-gray #5D6B65, no fill, centered, simple and legible at 24px.\n\nBackground: {KEY}\n\nAvoid: {AVOID} gradients, 3D, shadows."))
    ICONS.append(dict(id=f'nav_{k}_on', title=f'Navegação — {t} (ativo)', size='512×512', bg='Fundo magenta (recorte)', path=f'public/assets/nav/{k}_active.png',
      text=f"Flat rounded solid icon of {o}, filled white, centered, simple and legible at 24px, designed to sit on an emerald-green pill.\n\nBackground: {KEY.replace('magenta #FF00FF','magenta #FF00FF')}\n\nAvoid: {AVOID} gradients, 3D, shadows."))

def scene(i,title,subj,size,path,extra=''):
    return dict(id=i,title=title,size=size,bg='Cena completa',path=path,
        text=f"{subj} {FULL}{(' '+extra) if extra else ''}\n\nStyle: {STYLE} Painterly-3D background art, rich depth, soft atmospheric perspective, golden-hour light.\n\nAvoid: {AVOID}")

SCENES = [
 scene('egypt_pyramids','Egito — pirâmides e Nilo','The Giza pyramids across the Nile with date palms in the foreground, a traditional felucca sailboat on the water, a few puffy clouds.','1536×1024','public/assets/scenes/egypt_pyramids.png'),
 scene('egypt_cairo','Egito — skyline do Cairo','Cairo skyline with domes and slender minarets along the Nile at sunset, palm trees, small boats on the river.','1536×1024','public/assets/scenes/egypt_cairo.png'),
 scene('egypt_cafe','Egito — café com chá','Cozy lantern-lit Egyptian café interior, arched windows showing minarets, low tables with brass teapot and tea glasses, colorful patterned cushions, warm amber light.','1536×1024','public/assets/scenes/egypt_cafe.png'),
 scene('egypt_bazaar','Egito — bazar','Narrow bazaar alley with hanging brass lanterns, colorful fabrics, spice baskets, ornate wooden mashrabiya balconies, light shafts.','1024×1536','public/assets/scenes/egypt_bazaar.png'),
 scene('egypt_arch','Egito — arco ornamentado','Ornate carved stone archway with hanging lanterns framing a view of a palm tree and blue sky.','1024×1536','public/assets/scenes/egypt_arch.png'),
 scene('egypt_tea','Egito — natureza-morta chá','Still life on a patterned table: brass teapot, a glass of red tea, a plate of dates and sweets, soft bokeh café behind.','1536×1024','public/assets/scenes/egypt_tea.png'),
 scene('rio_christ','Brasil — Cristo Redentor','Christ the Redeemer statue on Corcovado hill with lush green forest, Rio skyline and bay below, palm trees on the right, bright blue sky.','1536×1024','public/assets/scenes/rio_christ.png'),
 scene('rio_coast','Brasil — orla do Rio','Rio de Janeiro coastline with Sugarloaf Mountain, a sweeping beach, buildings, palms and a turquoise sea.','1536×1024','public/assets/scenes/rio_coast.png'),
 scene('rio_lapa','Brasil — escadaria colorida','Colorful tiled stairway and white Lapa-style arches with warm street lights, tropical plants, lively evening atmosphere.','1024×1536','public/assets/scenes/rio_lapa.png'),
 scene('brazil_food','Brasil — natureza-morta café','Still life: small cup of coffee, a basket of pão de queijo, brigadeiros, a slice of papaya, tropical leaves, soft bokeh Brazilian café behind.','1536×1024','public/assets/scenes/brazil_food.png'),
 scene('trail_basic','Card de trilha — Básico','Wide composition weighted to the right: palms and a pyramid on the left blending into Rio coast and hills on the right; leave the left third calm and uncluttered for UI.','1536×1024','public/assets/trails/basic.png'),
 scene('trail_conversations','Card de trilha — Conversas reais','Wide composition: warm café scene with a brass teapot and red tea glass on a table in the foreground, arched windows behind; leave the left third calm for UI.','1536×1024','public/assets/trails/conversations.png'),
 scene('trail_culture','Card de trilha — Cultura e viagens','Wide composition: pyramids with palms and the Nile, a tiny sailboat; calm sky on the left third for UI.','1536×1024','public/assets/trails/culture.png'),
 scene('bg_lesson_egypt','Fundo de lição — Egito (escuro)','Dim warm blurred Egyptian café interior, glowing brass lanterns, bokeh lights, deep emerald and amber tones, very soft focus, large calm area in the center for UI.','1024×1536','public/assets/backgrounds/lesson_egypt.png'),
 scene('bg_lesson_brazil','Fundo de lição — Brasil (escuro)','Dim warm blurred Brazilian evening street, string lights, tropical leaves, deep emerald and amber tones, very soft focus, large calm area in the center for UI.','1024×1536','public/assets/backgrounds/lesson_brazil.png'),
 scene('bg_trail_map','Fundo do mapa de trilha','Vertical illustrated landscape from top to bottom: desert dunes and pyramids, an oasis with palms, a river with a small boat, green hills; a soft winding empty path of lighter ground meanders top to bottom. No markers on the path.','1024×1536','public/assets/backgrounds/trail_map.png'),
 scene('bg_reward','Fundo de recompensa','Deep emerald-green radial background with soft golden light rays, floating gold stars and confetti, subtle ornamental eight-pointed star pattern in the corners, calm center.','1024×1536','public/assets/backgrounds/reward.png'),
 scene('bg_onboarding','Hero de boas-vindas','Vertical hero: left half Egypt (pyramids, minarets, palms), right half Brazil (Christ the Redeemer, green hills, beach) blending softly in the middle under one golden sky; bottom 35% fades into plain warm ivory #FBF6E9 for UI.','1024×1536','public/assets/backgrounds/onboarding.png'),
]

BRAND = [
 dict(id='logo_mark',title='Marca — estrela ASHRA',size='1024×1024',bg='Fundo magenta (recorte)',path='public/assets/brand/mark.png',
  text=f"Logo mark only, no text: an ornate eight-pointed geometric flower star, emerald green with gold outline and a small round center, symmetrical, inspired by Islamic geometric patterns and Brazilian tropical flowers, elegant and modern, flat-to-subtle-3D.\n\nBackground: {KEY}\n\nAvoid: {AVOID}"),
 dict(id='app_icon',title='Ícone do app',size='1024×1024',bg='Cena completa',path='public/assets/brand/app_icon.png',
  text=f"Square app icon artwork, full-bleed (no rounded corners, no transparency): the emerald-and-gold eight-pointed flower star centered on a deep emerald-green background with a subtle radial glow and faint geometric pattern; keep important content inside the central 80%.\n\nStyle: {STYLE}\n\nAvoid: {AVOID}"),
 dict(id='splash',title='Splash (sem texto)',size='1024×1536',bg='Cena completa',path='public/assets/brand/splash.png',
  text=f"Vertical splash background: warm ivory-to-gold sky, soft silhouettes of minarets and pyramids on one side and Rio hills on the other, large calm empty area in the upper middle where the logo will be placed by the app. No text.\n\nStyle: {STYLE}\n\nAvoid: {AVOID}"),
]

_C = char_prompts()
GROUPS = [
 (f'Personagens ({len(_C)})', 'Anexe SEMPRE a prancha oficial dos 6 personagens (docs/reference/pranchas/03_elenco_oficial_6_personagens.png) em cada conversa. 1 prompt = 1 imagem.', _C),
 ('Ícones de jogo (24)', 'Estilo 3D brilhante. Uma imagem por vez, fundo magenta para recorte.', ICONS[:24]),
 ('Ícones de navegação (10)', 'Linha simples (inativo) e preenchido branco (ativo, sobre pílula verde).', ICONS[24:]),
 ('Cenários, cards de trilha e fundos (18)', 'Sem personagens e sem texto. O app aplica degradês e legendas por cima.', SCENES),
 ('Marca (3)', 'O nome "ASHRA" é desenhado pelo app com fonte, não pela IA (evita erros de grafia).', BRAND),
]

def md():
    L = ["# ASHRA — Prompts de assets para o GPT (geração de imagens)\n",
 "Gerado por `tools/gen_asset_prompts.py`. Prompts em inglês (melhor resultado); instruções em português.\n",
 "## Como usar (leia antes)\n",
 "1. **Uma imagem por mensagem.** Abra uma conversa por grupo. Na primeira mensagem anexe a prancha oficial e diga: *\"Esta é a referência oficial de personagens e estilo da ASHRA. Vou pedir assets um por um; mantenha identidade e estilo idênticos.\"*",
 "2. **Fundo magenta, não \"transparente\".** O GPT costuma desenhar um xadrez falso. Por isso os prompts pedem **magenta chapado #FF00FF**; eu removo o fundo depois com precisão (chroma key) e gero PNG com transparência real.",
 "3. **Nada de texto na imagem.** O app renderiza todo o texto (árabe/RTL correto). Se vier texto, regenere.",
 "4. **Tamanhos:** o GPT gera 1024×1024, 1536×1024 ou 1024×1536. Peça a versão maior; ampliações eu trato depois.",
 "5. **Consistência:** mantenha o mesmo chat por personagem; se o rosto mudar, anexe de novo a prancha e diga *\"IDENTICAL to the attached sheet\"*.",
 "6. **Entrega:** devolva os PNGs com o nome do campo **Arquivo** de cada prompt (num zip). Eu limpo, recorto e integro ao app.",
 "7. **Papéis oficiais (não trocar):** Rafa aprende árabe egípcio; Ali aprende português; Claudia guia do Brasil; Fadia guia do Egito; Mohamed gramática; Nour mascote.\n",
 "## Prompt-base de estilo\n", f"```\n{STYLE}\n```\n"]
    n = 0
    for g, note, items in GROUPS:
        L.append(f"\n## {g}\n\n{note}\n")
        for it in items:
            n += 1
            L.append(f"### {n}. {it['title']}\n- **Arquivo:** `{it['path']}`\n- **Tamanho:** {it['size']} · **Fundo:** {it['bg']}\n\n```\n{it['text']}\n```\n")
    return "\n".join(L), n

def page():
    data, n = md()
    css = """:root{--bg:#fbf6e9;--fg:#1d2b26;--muted:#5d6b65;--card:#fff;--line:#e6dfcc;--accent:#0b6b4f;--gold:#e0b84c;--code:#f3ede0}
@media (prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#10201b;--fg:#f1ead8;--muted:#a9b8b0;--card:#172b24;--line:#2a4237;--accent:#4cc79a;--gold:#e0b84c;--code:#0d1a16;color-scheme:dark}}
:root[data-theme=dark]{--bg:#10201b;--fg:#f1ead8;--muted:#a9b8b0;--card:#172b24;--line:#2a4237;--accent:#4cc79a;--gold:#e0b84c;--code:#0d1a16;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font:16px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;padding-block:24px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
main{max-width:860px;margin:0 auto}h1{font-size:1.8rem;margin:0 0 8px;text-wrap:balance}h2{margin:32px 0 4px;font-size:1.25rem}.muted{color:var(--muted)}
ol li{margin:4px 0}.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 16px;margin:12px 0}
.card h3{margin:0 0 6px;font-size:1rem}.meta{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.chip{font-size:.78rem;background:var(--code);border-radius:99px;padding:2px 10px;color:var(--muted);overflow-wrap:anywhere}
pre{white-space:pre-wrap;overflow-wrap:anywhere;background:var(--code);border-radius:10px;padding:12px;margin:0 0 10px;font:13px/1.5 ui-monospace,Menlo,Consolas,monospace;min-width:0}
button{font:inherit;min-height:44px;padding:0 18px;border-radius:12px;border:2px solid var(--accent);background:var(--accent);color:#fff;cursor:pointer;font-weight:600}
button.ghost{background:transparent;color:var(--accent)}nav{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}nav a{color:var(--accent);font-weight:600}
code{background:var(--code);padding:1px 6px;border-radius:6px;overflow-wrap:anywhere}"""
    parts = [f"<title>ASHRA Prompts de Assets</title>\n<style>{css}</style>\n<main>",
     "<h1>Prompts de assets da ASHRA</h1>",
     f"<p class='muted'>{n} prompts para gerar, um por vez, os personagens, ícones, cenários e marca do app. Toque em <b>Copiar</b>, cole no GPT (com a prancha oficial anexada) e devolva o PNG com o nome indicado em <b>Arquivo</b>.</p>",
     "<div class='card'><h3>Antes de começar</h3><ol>"
     "<li><b>Uma imagem por mensagem</b>, uma conversa por grupo. Anexe a prancha oficial dos personagens na primeira mensagem.</li>"
     "<li><b>Fundo magenta #FF00FF</b> em vez de \"transparente\": o GPT desenha xadrez falso. Eu removo o magenta depois e gero transparência real.</li>"
     "<li><b>Sem texto nas imagens.</b> O app escreve tudo (árabe com RTL correto). O nome ASHRA é desenhado pelo app.</li>"
     "<li>Peça o tamanho indicado (1024×1024, 1536×1024 ou 1024×1536).</li>"
     "<li>Se um rosto mudar, reanexe a prancha e peça <i>IDENTICAL to the attached sheet</i>.</li>"
     "<li>Devolva um zip com os PNGs nomeados como em <b>Arquivo</b>; eu limpo e integro.</li></ol></div>",
     "<div class='card'><h3>Estilo-base (já incluso em cada prompt)</h3><pre>"+html.escape(STYLE)+"</pre></div>","<nav>"]
    for gi,(g,_,_) in enumerate(GROUPS): parts.append(f"<a href='#g{gi}'>{html.escape(g)}</a>")
    parts.append("</nav>")
    k=0
    for gi,(g,note,items) in enumerate(GROUPS):
        parts.append(f"<h2 id='g{gi}'>{html.escape(g)}</h2><p class='muted'>{html.escape(note)}</p>")
        for it in items:
            k+=1
            parts.append(f"<div class='card'><h3>{k}. {html.escape(it['title'])}</h3><div class='meta'><span class='chip'>{html.escape(it['size'])}</span><span class='chip'>{html.escape(it['bg'])}</span><span class='chip'>{html.escape(it['path'])}</span></div><pre id='p{k}'>{html.escape(it['text'])}</pre><button data-t='p{k}'>Copiar</button></div>")
    parts.append("</main><script>document.addEventListener('click',function(e){var b=e.target.closest('button[data-t]');if(!b)return;var el=document.getElementById(b.dataset.t);var t=el.textContent;function ok(){b.textContent='Copiado ✓';setTimeout(function(){b.textContent='Copiar'},1500)}function fb(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selecionado: copie manualmente';}try{navigator.clipboard.writeText(t).then(ok,fb)}catch(x){fb()}});</script>")
    return "\n".join(parts), data, n

if __name__=='__main__':
    h,m,n=page()
    open('docs/PROMPTS_ASSETS_GPT.md','w').write(m)
    if len(sys.argv)>1: open(sys.argv[1],'w').write(h)
    print(n,'prompts')
