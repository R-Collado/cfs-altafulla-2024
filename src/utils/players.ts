export const getPlayersByScore = (players: any) => {
  players.sort((a: any, b: any) => {
    const scoreA =
      a.role === "keeper" ? a.season_saves * 0.25 : a.season_goals * 4;
    const scoreB =
      b.role === "keeper" ? b.season_saves * 0.25 : b.season_goals * 4;
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
