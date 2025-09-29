import type { Player, Reward, GameEvent, GalleryImage, FaqItem, DiscordPost } from './types';

export const leaderboard: Player[] = [
  { rank: 1, id: 'user1', name: 'CyberNinja', points: 15230, avatar: 'avatar1' },
  { rank: 2, id: 'user2', name: 'PixelVortex', points: 14890, avatar: 'avatar2' },
  { rank: 3, id: 'user3', name: 'QuantumLeap', points: 14500, avatar: 'avatar3' },
  { rank: 4, id: 'user4', name: 'GhostRider', points: 13980, avatar: 'avatar4' },
  { rank: 5, id: 'user5', name: 'VoidWalker', points: 12750, avatar: 'avatar5' },
  { rank: 6, id: 'user6', name: 'StarFire', points: 11230, avatar: 'avatar6' },
  { rank: 7, id: 'user7', name: 'IronHead', points: 10560, avatar: 'avatar7' },
  { rank: 8, id: 'user8', name: 'LunaKnight', points: 9870, avatar: 'avatar8' },
  { rank: 9, id: 'user9', name: 'Blaze', points: 9210, avatar: 'avatar9' },
  { rank: 10, id: 'user10', name: 'Warden', points: 8800, avatar: 'avatar10' },
];

export const rewards: Reward[] = [
  { id: 'reward1', title: 'Elite Role', description: 'Get the exclusive "Elite" role in our Discord server.', cost: 5000, image: 'reward-role', category: 'Discord' },
  { id: 'reward2', title: 'Starter Kit', description: 'Receive a special starter kit in our Minecraft server.', cost: 3000, image: 'reward-minecraft-kit', category: 'Minecraft' },
  { id: 'reward3', title: 'Digital Art Pack', description: 'A pack of exclusive digital wallpapers for your devices.', cost: 2500, image: 'reward-digital-art', category: 'Digital' },
  { id: 'reward4', title: '1,000 In-Game Coins', description: 'Get 1,000 coins to spend in the Minecraft server shop.', cost: 7500, image: 'reward-minecraft-coins', category: 'Minecraft' },
  { id: 'reward5', title: 'Custom Emote Pack', description: 'Unlock a pack of custom animated emotes for Discord.', cost: 4000, image: 'reward-emote-pack', category: 'Discord' },
  { id: 'reward6', title: 'VIP Channel Access', description: 'Gain access to the VIP-only channels on Discord for a month.', cost: 10000, image: 'reward-vip-access', category: 'Discord' },
];

const now = new Date();
export const events: GameEvent[] = [
  { id: 'event1', title: 'Weekly Minecraft PvP Tournament', description: 'Test your skills against the best players on the server. Great prizes for the top 3 fighters!', date: new Date(now.setDate(now.getDate() + 7)).toISOString(), type: 'upcoming', image: 'event-tournament' },
  { id: 'event2', title: 'Community Build-Off: Castles', description: 'Show off your building prowess in our themed build-off. The community will vote for the best creation.', date: new Date(now.setDate(now.getDate() + 14)).toISOString(), type: 'upcoming', image: 'event-buildoff' },
  { id: 'event3', title: 'Nitro Giveaway Stream', description: 'Join our special stream where we\'ll be giving away Discord Nitro subscriptions to lucky viewers.', date: new Date(now.setDate(now.getDate() + 21)).toISOString(), type: 'upcoming', image: 'event-giveaway' },
  { id: 'event4', title: 'End of Year Community Night', description: 'A relaxed evening of party games, music, and fun with the whole community.', date: new Date(now.setDate(now.getDate() - 30)).toISOString(), type: 'past', image: 'event-community-night' },
  { id: 'event5', title: 'Halloween Special: Spooky Maze', description: 'Navigate our terrifying maze for a chance to win exclusive Halloween-themed prizes.', date: new Date(now.setDate(now.getDate() - 60)).toISOString(), type: 'past', image: 'event-buildoff' },
];

export const gallery: GalleryImage[] = [
  { id: 'gal1', alt: 'Epic Minecraft castle at sunset', src: 'gallery1' },
  { id: 'gal2', alt: 'Players gathered in the main server square', src: 'gallery2' },
  { id: 'gal3', alt: 'Funny PvP moment', src: 'gallery3' },
  { id: 'gal4', alt: 'Beautiful server landscape', src: 'gallery4' },
  { id: 'gal5', alt: 'Intricate redstone contraption', src: 'gallery5' },
  { id: 'gal6', alt: 'Cozy player-built house', src: 'gallery6' },
];

export const faqs: FaqItem[] = [
  { id: 'faq1', question: 'How do I earn points?', answer: 'You can earn points by being active in our Discord server (chatting, participating in voice channels) and by playing on our Minecraft server (completing quests, winning minigames).' },
  { id: 'faq2', question: 'How do I connect my Minecraft account?', answer: 'Use the `/link` command in the #bot-commands channel on our Discord server. Our bot will guide you through the process.' },
  { id: 'faq3', question: 'Are the rewards permanent?', answer: 'Most rewards, like digital art and in-game kits, are permanent. Some roles or access passes may be temporary. Please check the reward description for details.' },
  { id: 'faq4', question: 'How often are the leaderboards updated?', answer: 'The leaderboards are updated in real-time based on your activity across our platforms.' },
  { id: 'faq5', question: 'Who can I contact for support?', answer: 'If you have any issues, please open a support ticket in the #support channel on Discord, and a staff member will assist you.' },
];

export const discordFeed: DiscordPost[] = [
  { id: 'post1', author: { name: 'AdminBot', avatar: 'avatar1' }, content: '🎉 The Weekly PvP Tournament starts in 1 hour! Sign up in #events.', timestamp: '2m ago' },
  { id: 'post2', author: { name: 'PixelVortex', avatar: 'avatar2' }, content: 'Just finished my new castle build, come check it out at /warp PixelCastle!', timestamp: '15m ago' },
  { id: 'post3', author: { name: 'QuantumLeap', avatar: 'avatar3' }, content: 'Looking for a team for the upcoming dungeon raid. Need a tank and a healer.', timestamp: '45m ago' },
  { id: 'post4', author: { name: 'AdminBot', avatar: 'avatar1' }, content: 'Minecraft server will be restarting in 10 minutes for a quick update.', timestamp: '1h ago' },
  { id: 'post5', author: { name: 'StarFire', avatar: 'avatar6' }, content: 'Does anyone have spare iron? I can trade for diamonds!', timestamp: '2h ago' },
];
