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
  let playerName = player.name.toLowerCase().replace(/\s+/g, "");

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

export const getPlayerDetailsImage = (player: any) => {
  const playerName = removeAccents(
    player.name.toLowerCase().replace(/\s+/g, ""),
  );

  if (player.role === "keeper") {
    return `/images/players/player-details/${playerName}-gk.jpeg`;
  } else {
    return `/images/players/player-details/${playerName}.jpeg`;
  }
};

export const formatPlayerBirthDate = (date: string) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const month = `0${newDate.getMonth() + 1}`.slice(-2);

  return `${day}/${month}/${year}`;
};

const accentsMap: { [key: string]: string } = {
  à: "a",
  á: "a",
  â: "a",
  ä: "a",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ò: "o",
  ó: "o",
  ô: "o",
  ö: "o",
  ù: "u",
  ú: "u",
  û: "u",
};

const removeAccents = (str: string) => {
  return str
    .split("")
    .map((char) => accentsMap[char] || char)
    .join("");
};
