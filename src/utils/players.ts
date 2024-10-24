import { playersList } from "@/configs/players";
import { keepersList } from "@/configs/players";

export const getPlayersByScore = () => {
  const players = [...playersList, ...keepersList];

  players.sort((a, b) => {
    const scoreA =
      a.role === "keeper"
        ? a.season_stats.clean_sheets * 2 + a.season_stats.saves * 0.25
        : a.season_stats.goals * 4 + a.season_stats.assists;
    const scoreB =
      b.role === "keeper"
        ? b.season_stats.clean_sheets * 4 + b.season_stats.saves * 0.25
        : b.season_stats.goals * 4 + b.season_stats.assists;
    return scoreB - scoreA;
  });

  return players;
};

export const getImagePath = (player: any) => {
  const playerName = player.name.toLowerCase().replace(/\s+/g, "");

  if (player.role === "keeper") {
    return `/images/players/${playerName}-gk`;
  } else {
    return `/images/players/${playerName}`;
  }
};

export const getHandshakeImage = (player: any) => {
  const playerName = player.name.toLowerCase().replace(/\s+/g, "");

  if (player.role === "keeper") {
    return `/images/players/handshake/${playerName}-gk.webp`;
  } else {
    return `/images/players/handshake/${playerName}.webp`;
  }
};
