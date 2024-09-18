import { playersList } from "@/configs/players";
import { keepersList } from "@/configs/players";

export const getPlayersByScore = () => {
  const players = [...playersList, ...keepersList];

  players.sort((a, b) => {
    const scoreA =
      a.role === "keeper"
        ? a.season_stats.clean_sheets * 4 + a.season_stats.saves
        : a.season_stats.goals * 4 + a.season_stats.assists;
    const scoreB =
      b.role === "keeper"
        ? b.season_stats.clean_sheets * 4 + b.season_stats.saves
        : b.season_stats.goals * 4 + b.season_stats.assists;
    return scoreB - scoreA;
  });

  return players;
};
