import type { Player, Reward, GameEvent, GalleryImage, FaqItem, DiscordPost, Game } from './types';

export const leaderboard: Player[] = [];

export const rewards: Reward[] = [];

const now = new Date();
export const events: GameEvent[] = [];

export const gallery: GalleryImage[] = [];

export const faqs: FaqItem[] = [];

export const discordFeed: DiscordPost[] = [];

export const games: Game[] = [
  { id: 'fortnite', title: 'Fortnite', type: 'Gratis', downloadUrl: 'https://www.epicgames.com/fortnite/es-ES/home', imageId: 'game-fortnite' },
  { id: 'minecraft', title: 'Minecraft', type: 'De Paga', downloadUrl: 'https://www.minecraft.net/es-es', imageId: 'game-minecraft' },
  { id: 'roblox', title: 'Roblox', type: 'Gratis', downloadUrl: 'https://www.roblox.com/', imageId: 'game-roblox' },
  { id: 'league-of-legends', title: 'League of Legends', type: 'Gratis', downloadUrl: 'https://www.leagueoflegends.com/es-es/', imageId: 'game-lol' },
  { id: 'valorant', title: 'Valorant', type: 'Gratis', downloadUrl: 'https://playvalorant.com/es-es/', imageId: 'game-valorant' },
  { id: 'counter-strike-2', title: 'Counter-Strike 2', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/730/CounterStrike_2/', imageId: 'game-cs2' },
  { id: 'apex-legends', title: 'Apex Legends', type: 'Gratis', downloadUrl: 'https://www.ea.com/es-es/games/apex-legends', imageId: 'game-apex' },
  { id: 'call-of-duty', title: 'Call of Duty: Warzone', type: 'Gratis', downloadUrl: 'https://www.callofduty.com/es/warzone', imageId: 'game-cod' },
  { id: 'genshin-impact', title: 'Genshin Impact', type: 'Gratis', downloadUrl: 'https://genshin.hoyoverse.com/es/', imageId: 'game-genshin' },
  { id: 'pubg', title: 'PUBG: Battlegrounds', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/', imageId: 'game-pubg' },
  { id: 'gta-v', title: 'Grand Theft Auto V', type: 'De Paga', downloadUrl: 'https://www.rockstargames.com/gta-v', imageId: 'game-gta' },
  { id: 'overwatch-2', title: 'Overwatch 2', type: 'Gratis', downloadUrl: 'https://overwatch.blizzard.com/es-es/', imageId: 'game-overwatch' },
  { id: 'ea-fc-24', title: 'EA Sports FC 24', type: 'De Paga', downloadUrl: 'https://www.ea.com/es-es/games/ea-sports-fc/fc-24', imageId: 'game-fc24' },
  { id: 'rocket-league', title: 'Rocket League', type: 'Gratis', downloadUrl: 'https://www.rocketleague.com/es-es/', imageId: 'game-rocket' },
  { id: 'dota-2', title: 'Dota 2', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/570/Dota_2/', imageId: 'game-dota2' },
  { id: 'helldivers-2', title: 'Helldivers 2', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/553850/HELLDIVERS_2/', imageId: 'game-helldivers' },
  { id: 'destiny-2', title: 'Destiny 2', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/1085660/Destiny_2/', imageId: 'game-destiny' },
  { id: 'fall-guys', title: 'Fall Guys', type: 'Gratis', downloadUrl: 'https://www.fallguys.com/es-ES', imageId: 'game-fallguys' },
  { id: 'honkai-star-rail', title: 'Honkai: Star Rail', type: 'Gratis', downloadUrl: 'https://hsr.hoyoverse.com/es-es/', imageId: 'game-honkai' },
  { id: 'world-of-warcraft', title: 'World of Warcraft', type: 'De Paga', downloadUrl: 'https://worldofwarcraft.blizzard.com/es-es/', imageId: 'game-wow' },
  { id: 'elden-ring', title: 'Elden Ring', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/', imageId: 'game-eldenring' },
  { id: 'cyberpunk-2077', title: 'Cyberpunk 2077', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/', imageId: 'game-cyberpunk' },
  { id: 'the-witcher-3', title: 'The Witcher 3: Wild Hunt', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/', imageId: 'game-witcher3' },
  { id: 'red-dead-2', title: 'Red Dead Redemption 2', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/', imageId: 'game-rdr2' },
  { id: "stardew-valley", title: "Stardew Valley", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/413150/Stardew_Valley/", imageId: "game-stardew" },
  { id: "terraria", title: "Terraria", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/105600/Terraria/", imageId: "game-terraria" },
  { id: "among-us", title: "Among Us", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/945360/Among_Us/", imageId: "game-amongus" },
  { id: "hades", title: "Hades", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/1145360/Hades/", imageId: "game-hades" },
  { id: "sea-of-thieves", title: "Sea of Thieves", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/", imageId: "game-seaofthieves" },
  { id: "rust", title: "Rust", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/252490/Rust/", imageId: "game-rust" },
  { id: "ark-survival", title: "ARK: Survival Evolved", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/", imageId: "game-ark" },
  { id: "dead-by-daylight", title: "Dead by Daylight", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/381210/Dead_by_Daylight/", imageId: 'game-dbd' },
  { id: 'phasmophobia', title: 'Phasmophobia', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/739630/Phasmophobia/', imageId: 'game-phasmophobia' },
  { id: 'baldurs-gate-3', title: "Baldur's Gate 3", type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/', imageId: 'game-bg3' },
  { id: 'palworld', title: 'Palworld', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/1623730/Palworld/', imageId: 'game-palworld' },
  { id: 'diablo-iv', title: 'Diablo IV', type: 'De Paga', downloadUrl: 'https://us.shop.battle.net/es-es/product/diablo-iv', imageId: 'game-diablo4' },
  { id: 'final-fantasy-xiv', title: 'Final Fantasy XIV', type: 'Gratis', downloadUrl: 'https://freetrial.finalfantasyxiv.com/es/', imageId: 'game-ffxiv' },
  { id: 'the-sims-4', title: 'Los Sims 4', type: 'Gratis', downloadUrl: 'https://www.ea.com/es-es/games/the-sims/the-sims-4/download', imageId: 'game-sims4' },
  { id: 'smite', title: 'SMITE', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/386360/SMITE/', imageId: 'game-smite' },
  { id: 'warframe', title: 'Warframe', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/230410/Warframe/', imageId: 'game-warframe' },
  { id: 'path-of-exile', title: 'Path of Exile', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/238960/Path_of_Exile/', imageId: 'game-poe' },
  { id: 'black-desert-online', title: 'Black Desert Online', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/582660/Black_Desert/', imageId: 'game-bdo' },
  { id: 'lost-ark', title: 'Lost Ark', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/1599340/Lost_Ark/', imageId: 'game-lostark' },
  { id: 'new-world', title: 'New World', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/1063730/New_World/', imageId: 'game-newworld' },
  { id: 'escape-from-tarkov', title: 'Escape from Tarkov', type: 'De Paga', downloadUrl: 'https://www.escapefromtarkov.com/', imageId: 'game-tarkov' },
  { id: 'hearthstone', title: 'Hearthstone', type: 'Gratis', downloadUrl: 'https://hearthstone.blizzard.com/es-es', imageId: 'game-hearthstone' },
  { id: 'team-fortress-2', title: 'Team Fortress 2', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/440/Team_Fortress_2/', imageId: 'game-tf2' },
  { id: 'war-thunder', title: 'War Thunder', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/236390/War_Thunder/', imageId: 'game-warthunder' },
  { id: 'world-of-tanks', title: 'World of Tanks', type: 'Gratis', downloadUrl: 'https://store.steampowered.com/app/1407200/World_of_Tanks/', imageId: 'game-wot' },
  { id: 'for-honor', title: 'For Honor', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/304390/FOR_HONOR/', imageId: 'game-forhonor' },
  { id: 'no-mans-sky', title: "No Man's Sky", type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/275850/No_Mans_Sky/', imageId: 'game-nomanssky' },
  { id: 'rimworld', title: 'RimWorld', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/294100/RimWorld/', imageId: 'game-rimworld' },
  { id: 'subnautica', title: 'Subnautica', type: 'De Paga', downloadUrl: 'https://store.steampowered.com/app/264710/Subnautica/', imageId: 'game-subnautica' },
  { id: 'the-forest', title: "The Forest", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/242760/The_Forest/", imageId: "game-theforest" },
  { id: "factorio", title: "Factorio", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/427520/Factorio/", imageId: "game-factorio" },
  { id: "satisfactory", title: "Satisfactory", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/526870/Satisfactory/", imageId: "game-satisfactory" },
  { id: "squad", title: "Squad", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/393380/Squad/", imageId: "game-squad" },
  { id: "dayz", title: "DayZ", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/221100/DayZ/", imageId: "game-dayz" },
  { id: "albion-online", title: "Albion Online", type: "Gratis", downloadUrl: "https://store.steampowered.com/app/761890/Albion_Online/", imageId: "game-albion" },
  { id: "runescape", title: "RuneScape", type: "Gratis", downloadUrl: "https://store.steampowered.com/app/1343400/RuneScape/", imageId: "game-runescape" },
  { id: "eve-online", title: "EVE Online", type: "Gratis", downloadUrl: "https://store.steampowered.com/app/8500/EVE_Online/", imageId: "game-eve" },
  { id: "brawlhalla", title: "Brawlhalla", type: "Gratis", downloadUrl: "https://store.steampowered.com/app/291550/Brawlhalla/", imageId: "game-brawlhalla" },
  { id: "valheim", title: "Valheim", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/892970/Valheim/", imageId: "game-valheim" },
  { id: "dont-starve-together", title: "Don't Starve Together", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/322330/Dont_Starve_Together/", imageId: "game-dst" },
  { id: "left-4-dead-2", title: "Left 4 Dead 2", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/550/Left_4_Dead_2/", imageId: "game-l4d2" },
  { id: "payday-2", title: "PAYDAY 2", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/218620/PAYDAY_2/", imageId: "game-payday2" },
  { id: "garrys-mod", title: "Garry's Mod", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/4000/Garrys_Mod/", imageId: "game-gmod" },
  { id: "the-elder-scrolls-online", title: "The Elder Scrolls Online", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/306130/The_Elder_Scrolls_Online/", imageId: "game-eso" },
  { id: "fallout-76", title: "Fallout 76", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/1151340/Fallout_76/", imageId: "game-fallout76" },
  { id: "rainbow-six-siege", title: "Tom Clancy's Rainbow Six Siege", type: "De Paga", downloadUrl: "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/", imageId: "game-r6s" },
  { id: "star-citizen", title: "Star Citizen", type: "De Paga", downloadUrl: "https://robertsspaceindustries.com/star-citizen", imageId: "game-starcitizen" },
  { id: "osu", title: "osu!", type: "Gratis", downloadUrl: "https://osu.ppy.sh/home", imageId: "game-osu" }
];
