import playerHeroImg from "@/images/player-images/2/hero-img.webp";

import type { FieldPlayer, Keeper, Player } from "@/types/player";

export const keeperNumbers: string[] = ["1", "69"];

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
    img: playerHeroImg.src,
    background: 1,
    last_teams: [],
    total_stats: {
      matches: 0,
      clean_sheets: 0,
      saves: 0,
    },
    season_stats: {
      matches: 0,
      clean_sheets: 0,
      saves: 0,
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
    img: playerHeroImg.src,
    last_teams: ["Centre Esports Altafulla"],
    total_stats: {
      matches: 0,
      clean_sheets: 0,
      saves: 0,
    },
    season_stats: {
      matches: 0,
      clean_sheets: 0,
      saves: 0,
    },
  },
];

export const playersList: FieldPlayer[] = [
  {
    name: "Eric",
    first_surname: "Benito",
    second_surname: "Correa",
    nickname: "Niño",
    role: "defender",
    age: getPlayerAge(new Date("1998-04-28")),
    birth_date: "28/04/1998",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "2",
    img: playerHeroImg.src,
    background: 2,
    last_teams: [
      "Club Futbol Sala Altafulla",
      "Gimnastic de Tarragona Futsal",
      "Club Futbol Sala El Catllar",
      "Club Futbol Sala Torredembarra",
    ],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Aldo",
    first_surname: "Mora",
    second_surname: "",
    nickname: "Vini",
    role: "defender",
    age: getPlayerAge(new Date("2005-04-18")),
    birth_date: "18/04/2005",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "4",
    img: playerHeroImg.src,
    background: 3,
    last_teams: [
      "Club Futbol Sala Altafulla",
      "Gimnastic de Tarragona Futsal",
      "Club Futbol Sala La Pobla de Montornès",
    ],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Karim",
    first_surname: "Amahdar",
    second_surname: "El Bouziani",
    nickname: "",
    role: "defender",
    age: getPlayerAge(new Date("1998-04-28")),
    birth_date: "28/04/1998",
    birth_place: "Nador",
    birth_country: "morocco",
    number: "5",
    img: playerHeroImg.src,
    background: 4,
    last_teams: [
      "Centre Esports Altafulla",
      "Unió Esportiva Creixell",
      "Club Futbol La Riera",
    ],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "José Manuel",
    first_surname: "Hoyo",
    second_surname: "Montes",
    nickname: "Hoyo",
    role: "wing",
    age: getPlayerAge(new Date("1984-05-10")),
    birth_date: "10/05/1984",
    birth_place: "Priego de Córdoba",
    birth_country: "spain",
    number: "6",
    img: playerHeroImg.src,
    background: 2,
    last_teams: [
      "Boca Futbol Sala Priego",
      "Unió Deportiva Riudecols",
      "Salou Futbol Sala",
    ],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Norde",
    first_surname: "El Bouziani",
    second_surname: "",
    nickname: "Norde",
    role: "wing",
    age: getPlayerAge(new Date("2000-04-15")),
    birth_date: "15/04/2002",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "7",
    img: playerHeroImg.src,
    background: 3,
    last_teams: ["Centre Esports Altafulla"],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Eloy",
    first_surname: "Allende",
    second_surname: "Espin",
    nickname: "",
    role: "defender",
    age: getPlayerAge(new Date("2002-05-07")),
    birth_date: "07/05/2002",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "9",
    img: playerHeroImg.src,
    background: 1,
    last_teams: ["Gimnastic de Tarragona Futsal", "Salou Futbol Sala"],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Aleix",
    first_surname: "Roberto",
    second_surname: "Mestre",
    nickname: "Mamut",
    role: "pivot",
    age: getPlayerAge(new Date("2004-07-12")),
    birth_date: "12/07/2004",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "10",
    img: playerHeroImg.src,
    background: 4,
    last_teams: [
      "Club Futbol Sala Altafulla",
      "Club Vila-Seca Futbol Sala",
      "Centre Esports Altafulla",
    ],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "David",
    first_surname: "Salido",
    second_surname: "",
    nickname: "Joselu",
    role: "wing",
    age: getPlayerAge(new Date("2003-04-15")),
    birth_date: "15/04/2003",
    birth_place: "Reus",
    birth_country: "spain",
    number: "14",
    img: playerHeroImg.src,
    background: 3,
    last_teams: ["Club Futbol Sala El Morell", "Club Futbol Pobla de Mafumet"],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Jose Luis",
    first_surname: "Castañeda",
    second_surname: "Aloy",
    nickname: "Dibu",
    role: "pivot",
    age: getPlayerAge(new Date("1990-10-03")),
    birth_date: "03/10/1990",
    birth_place: "Buenos Aires",
    birth_country: "argentina",
    number: "12",
    img: playerHeroImg.src,
    background: 4,
    last_teams: ["Salou Futbol Sala"],
    total_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 0,
      goals: 0,
      assists: 0,
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
