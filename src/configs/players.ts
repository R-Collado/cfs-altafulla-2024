import playerHeroImg from "@/images/player-images/2/hero-img.webp";

import type { FieldPlayer, Keeper, Player } from "@/types/player";

export const keeperNumbers: string[] = ["1", "69", "80"];

export const playersList = [
  {
    name: "Eric",
    number: 2,
    imageSrc: "eric",
  },
  {
    name: "Jorge",
    number: 4,
    imageSrc: "jorge",
  },
  {
    name: "José Manuel",
    number: 6,
    imageSrc: "jose",
  },
  {
    name: "Norde",
    number: 7,
    imageSrc: "norde",
  },
  {
    name: "Hicham",
    number: 8,
    imageSrc: "hicham",
  },
  {
    name: "Eloy",
    number: 9,
    imageSrc: "eloy",
  },
  {
    name: "Aleix",
    number: 10,
    imageSrc: "aleix",
  },
  {
    name: "Hakim",
    number: 11,
    imageSrc: "hakim",
  },
  {
    name: "Jawad",
    number: 12,
    imageSrc: "jawad",
  },
  {
    name: "David",
    number: 14,
    imageSrc: "david",
  },
  {
    name: "Joel",
    number: 19,
    imageSrc: "joel",
  },
];

export const keepersList: Keeper[] = [
  {
    name: "Joel",
    first_surname: "Domenech",
    second_surname: "Piulats",
    nickname: "Joel",
    role: "keeper",
    age: getPlayerAge(new Date("1995-01-07")),
    birth_date: "07/01/1995",
    birth_place: "Lleida",
    birth_country: "spain",
    number: "1",
    background: 1,
    last_teams: [],
    total_stats: {
      matches: 3,
      clean_sheets: 0,
      saves: 15,
    },
    season_stats: {
      matches: 3,
      clean_sheets: 0,
      saves: 15,
    },
  },
  {
    name: "Ismael",
    first_surname: "Aammouri",
    second_surname: "El Hasnaoui",
    nickname: "Bombas",
    role: "keeper",
    age: getPlayerAge(new Date("2002-10-31")),
    birth_date: "31/10/2002",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "69",
    background: 2,
    last_teams: ["Centre Esports Altafulla"],
    total_stats: {
      matches: 3,
      clean_sheets: 0,
      saves: 14,
    },
    season_stats: {
      matches: 3,
      clean_sheets: 0,
      saves: 14,
    },
  },
];

function getPlayerAge(birthdate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();
  const dayDifference = today.getDate() - birthdate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 4) + 1;
}
