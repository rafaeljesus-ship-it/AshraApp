import type { Lesson, Track } from '../domain/types';

/**
 * DEMO CONTENT — to be reviewed by native speakers (Egyptian Arabic and Brazilian Portuguese)
 * before any public release. Transliteration is approximate, not exact pronunciation.
 */
export const lessons: Lesson[] = [
  {
    id: 'saudacoes',
    trackId: 'basico',
    title: { 'pt-BR': 'Saudações', 'ar-EG': 'التحيات' },
    minutes: 5,
    needsReview: true,
    phrases: [
      {
        id: 'bom-dia',
        pt: 'Bom dia',
        ar: 'صباح الخير',
        arTranslit: 'Sabah el-kheir',
        note: {
          'ar-EG': 'Resposta comum: «صباح النور» (Sabah en-nur), "manhã de luz".',
          'pt-BR': 'الرد المعتاد: «Bom dia» أيضاً، أو «Bom dia, tudo bem?».',
        },
      },
      { id: 'boa-noite', pt: 'Boa noite', ar: 'مساء الخير', arTranslit: "Masa' el-kheir" },
      {
        id: 'bem-vindo',
        pt: 'Seja bem-vindo',
        ar: 'أهلاً وسهلاً',
        arTranslit: 'Ahlan wa sahlan',
        note: {
          'ar-EG': 'Usado para receber alguém em casa ou num lugar. Literalmente: "família e facilidade".',
          'pt-BR': 'نقوله لاستقبال شخص في المنزل أو المكان.',
        },
      },
      {
        id: 'tudo-bem',
        pt: 'Tudo bem?',
        ar: 'إزيك؟',
        arTranslit: 'Ezzayyak?',
        note: {
          'ar-EG': 'Para um homem: «إزيك» (Ezzayyak). Para uma mulher: «إزيك» (Ezzayyek).',
          'pt-BR': 'في البرازيل نقول «Tudo bem?» كتحية، والرد المعتاد «Tudo bem!» أو «Beleza!».',
        },
      },
      { id: 'tchau', pt: 'Tchau', ar: 'مع السلامة', arTranslit: "Ma'a es-salama" },
      { id: 'obrigado', pt: 'Obrigado', ar: 'شكراً', arTranslit: 'Shukran' },
    ],
    tip: {
      guide: 'fadia',
      text: {
        'ar-EG': 'No Egito, perguntar «إزيك؟» (Ezzayyak?) é uma forma amigável de cumprimentar. A resposta mais comum é «الحمد لله» (el-hamdu lillah), "graças a Deus".',
        'pt-BR': 'No Brasil, «Tudo bem?» é um cumprimento, não só uma pergunta. A resposta comum é «Tudo bem!» ou «Beleza!».',
      },
    },
  },
  {
    id: 'apresentacoes',
    trackId: 'basico',
    title: { 'pt-BR': 'Apresentações', 'ar-EG': 'التعارف' },
    minutes: 6,
    needsReview: true,
    phrases: [
      { id: 'meu-nome', pt: 'Meu nome é Rafa', ar: 'اسمي رافا', arTranslit: 'Ismi Rafa' },
      { id: 'seu-nome', pt: 'Qual é o seu nome?', ar: 'إنت اسمك إيه؟', arTranslit: 'Enta ismak eh?' },
      { id: 'do-brasil', pt: 'Eu sou do Brasil', ar: 'أنا من البرازيل', arTranslit: 'Ana min el-Brazil' },
      { id: 'do-egito', pt: 'Eu sou do Egito', ar: 'أنا من مصر', arTranslit: 'Ana min Masr' },
      {
        id: 'prazer',
        pt: 'Prazer em conhecer',
        ar: 'اتشرفنا',
        arTranslit: 'Etsharrafna',
        note: {
          'ar-EG': 'Dito ao conhecer alguém. Literalmente: "fomos honrados".',
          'pt-BR': 'نقوله عند التعرف على شخص جديد.',
        },
      },
    ],
    tip: {
      guide: 'claudia',
      text: {
        'ar-EG': 'No Egito é comum ouvir «Masr» (مصر) para o país inteiro e para o Cairo. Apresentar-se dizendo de onde você é costuma render boas conversas.',
        'pt-BR': 'No Brasil, as pessoas costumam se apresentar com um sorriso e o primeiro nome. Perguntar "De onde você é?" é um bom jeito de puxar conversa.',
      },
    },
  },
];

export const tracks: Track[] = [
  {
    id: 'basico',
    title: { 'pt-BR': 'Básico', 'ar-EG': 'الأساسيات' },
    subtitle: { 'pt-BR': 'Comece por aqui', 'ar-EG': 'ابدأ من هنا' },
    color: 'green',
    lessonIds: ['saudacoes', 'apresentacoes'],
  },
  {
    id: 'conversas',
    title: { 'pt-BR': 'Conversas reais', 'ar-EG': 'محادثات حقيقية' },
    subtitle: { 'pt-BR': 'Situações do dia a dia', 'ar-EG': 'مواقف من الحياة اليومية' },
    color: 'coral',
    lessonIds: [],
    comingSoon: true,
  },
  {
    id: 'cultura',
    title: { 'pt-BR': 'Cultura e viagens', 'ar-EG': 'الثقافة والسفر' },
    subtitle: { 'pt-BR': 'Conheça o Egito e o Brasil', 'ar-EG': 'تعرّف على مصر والبرازيل' },
    color: 'blue',
    lessonIds: [],
    comingSoon: true,
  },
];

export const lessonById = (id: string) => lessons.find((l) => l.id === id);
export const allLessonIds = () => tracks.flatMap((t) => t.lessonIds);
