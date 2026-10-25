/** Illustrated art used across screens (files live in public/assets and public/characters). */
export const scenes = {
  pyramids: '/assets/scenes/egypt_pyramids.jpg',
  nile: '/assets/scenes/egypt_nile.jpg',
  bazaar: '/assets/scenes/egypt_bazaar.jpg',
  cafe: '/assets/scenes/egypt_cafe.jpg',
  beach: '/assets/scenes/brazil_beach.jpg',
  rio: '/assets/scenes/rio_sugarloaf.jpg',
} as const;

/** Scene for each language when shown as the learning target / native language. */
export const langScene = { 'ar-EG': scenes.pyramids, 'pt-BR': scenes.rio } as const;

/** Home track-card art (reference: palms/Nile, café, pyramids). */
export const trackCard: Record<string, string> = {
  basico: scenes.nile,
  conversas: scenes.cafe,
  cultura: scenes.pyramids,
};

/** Temporary group art cropped from the approved reference board (replace with a clean render). */
export const groupSplash = '/assets/brand/group_splash.jpg';

/** The learner character for each learning path: Rafa learns Arabic, Ali learns Portuguese. */
export const learnerFor = (native: 'pt-BR' | 'ar-EG') => (native === 'pt-BR' ? 'rafa' : 'ali') as 'rafa' | 'ali';

/** One scene per learning track. */
export const trackScene: Record<string, string> = {
  basico: scenes.pyramids,
  conversas: scenes.cafe,
  cultura: scenes.rio,
};

export type NourPose = 'cheer' | 'wave' | 'think' | 'point' | 'joy' | 'rest';
export const nourPose = (pose: NourPose) => `/characters/nour/${pose}.png`;

/** Gold/emerald achievement icons (transparent PNGs). */
export const goldIcon = (name: 'star' | 'trophy' | 'flame' | 'heart' | 'compass' | 'book' | 'chat' | 'globe') =>
  `/assets/gold/${name}.png`;
