export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Player = {
  rank: number;
  id: string;
  name: string;
  points: number;
  avatar: string;
};

export type Reward = {
  id: string;
  title: string;
  description: string;
  cost: number;
  image: string;
  category: 'Discord' | 'Minecraft' | 'Digital';
};

export type GameEvent = {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string
  type: 'upcoming' | 'past';
  image: string;
};

export type GalleryImage = {
  id: string;
  alt: string;
  src: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type DiscordPost = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
};
