import type { Player, Reward, GameEvent, GalleryImage, FaqItem, DiscordPost, Game } from './types';

export const leaderboard: Player[] = [];

export const rewards: Reward[] = [];

const now = new Date();
export const events: GameEvent[] = [];

export const gallery: GalleryImage[] = [];

export const faqs: FaqItem[] = [];

export const discordFeed: DiscordPost[] = [];

export const games: Game[] = [
  { id: 'fortnite', title: 'Fortnite', type: 'Gratis', downloadUrl: '#', imageId: 'game-fortnite' },
  { id: 'minecraft', title: 'Minecraft', type: 'De Paga', downloadUrl: '#', imageId: 'game-minecraft' },
  { id: 'roblox', title: 'Roblox', type: 'Gratis', downloadUrl: '#', imageId: 'game-roblox' },
  { id: 'league-of-legends', title: 'League of Legends', type: 'Gratis', downloadUrl: '#', imageId: 'game-lol' },
  { id: 'valorant', title: 'Valorant', type: 'Gratis', downloadUrl: '#', imageId: 'game-valorant' },
  { id: 'counter-strike-2', title: 'Counter-Strike 2', type: 'Gratis', downloadUrl: '#', imageId: 'game-cs2' },
  { id: 'apex-legends', title: 'Apex Legends', type: 'Gratis', downloadUrl: '#', imageId: 'game-apex' },
  { id: 'call-of-duty', title: 'Call of Duty: Warzone', type: 'Gratis', downloadUrl: '#', imageId: 'game-cod' },
  { id: 'genshin-impact', title: 'Genshin Impact', type: 'Gratis', downloadUrl: '#', imageId: 'game-genshin' },
  { id: 'pubg', title: 'PUBG: Battlegrounds', type: 'Gratis', downloadUrl: '#', imageId: 'game-pubg' },
  { id: 'gta-v', title: 'Grand Theft Auto V', type: 'De Paga', downloadUrl: '#', imageId: 'game-gta' },
  { id: 'overwatch-2', title: 'Overwatch 2', type: 'Gratis', downloadUrl: '#', imageId: 'game-overwatch' },
  { id: 'ea-fc-24', title: 'EA Sports FC 24', type: 'De Paga', downloadUrl: '#', imageId: 'game-fc24' },
  { id: 'rocket-league', title: 'Rocket League', type: 'Gratis', downloadUrl: '#', imageId: 'game-rocket' },
  { id: 'dota-2', title: 'Dota 2', type: 'Gratis', downloadUrl: '#', imageId: 'game-dota2' },
  { id: 'helldivers-2', title: 'Helldivers 2', type: 'De Paga', downloadUrl: '#', imageId: 'game-helldivers' },
  { id: 'destiny-2', title: 'Destiny 2', type: 'Gratis', downloadUrl: '#', imageId: 'game-destiny' },
  { id: 'fall-guys', title: 'Fall Guys', type: 'Gratis', downloadUrl: '#', imageId: 'game-fallguys' },
  { id: 'honkai-star-rail', title: 'Honkai: Star Rail', type: 'Gratis', downloadUrl: '#', imageId: 'game-honkai' },
  { id: 'world-of-warcraft', title: 'World of Warcraft', type: 'De Paga', downloadUrl: '#', imageId: 'game-wow' }
];
