import playerHeroImg from "@/images/player-images/2/hero-img.webp";

import type { FieldPlayer, Keeper, Player } from "@/types/player";

export const keeperNumbers: string[] = ["1", "69", "80"];

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
      matches: 1,
      clean_sheets: 0,
      saves: 0,
    },
    season_stats: {
      matches: 1,
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
    last_teams: ["Centre Esports Altafulla"],
    total_stats: {
      matches: 1,
      clean_sheets: 0,
      saves: 0,
    },
    season_stats: {
      matches: 1,
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
    background: 2,
    last_teams: [
      "Club Futbol Sala Altafulla",
      "Gimnastic de Tarragona Futsal",
      "Club Futbol Sala El Catllar",
      "Club Futbol Sala Torredembarra",
    ],
    total_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
    season_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
  },
  {
    name: "Jorge",
    first_surname: "Carmona",
    second_surname: "Mora",
    nickname: "Carmona",
    role: "wing",
    age: getPlayerAge(new Date("2000-07-23")),
    birth_date: "23/07/2000",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "4",
    background: 4,
    last_teams: ["CFS Altafulla, Centre Esports Altafulla"],
    total_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 1,
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
    background: 2,
    last_teams: [
      "Boca Futbol Sala Priego",
      "Unió Deportiva Riudecols",
      "Salou Futbol Sala",
    ],
    total_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 1,
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
    background: 3,
    last_teams: ["Centre Esports Altafulla"],
    total_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Hicham",
    first_surname: "Faress",
    second_surname: "",
    nickname: "",
    role: "pivot",
    age: getPlayerAge(new Date("2000-07-01")),
    birth_date: "07/01/2000",
    birth_place: "Marruecos",
    birth_country: "morocco",
    last_teams: ["CFS Altafulla"],
    number: "8",
    background: 3,
    total_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 1,
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
    background: 1,
    last_teams: ["Gimnastic de Tarragona Futsal", "Salou Futbol Sala"],
    total_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 1,
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
    background: 4,
    last_teams: [
      "Club Futbol Sala Altafulla",
      "Club Vila-Seca Futbol Sala",
      "Centre Esports Altafulla",
    ],
    total_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
    season_stats: {
      matches: 1,
      goals: 0,
      assists: 0,
    },
  },
  {
    name: "Hakim",
    first_surname: "El Bouziani",
    second_surname: "",
    nickname: "Hakimi",
    role: "wing",
    age: getPlayerAge(new Date("1999-04-23")),
    birth_date: "23/04/1999",
    birth_place: "Monte Aroui",
    birth_country: "morocco",
    number: "11",
    last_teams: [
      "El Morell CFS",
      "CFS Mare Molas",
      "CFS Vilarodona",
      "Gimnastic de Tarragona Futsal",
      "Futsalpax Tarragona Club Esportiu",
    ],
    background: 2,
    total_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
    season_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
  },
  {
    name: "Jawad",
    first_surname: "El Mahdari",
    second_surname: "Amahdar",
    nickname: "Jawad",
    role: "wing",
    age: getPlayerAge(new Date("2003-01-08")),
    birth_date: "08/01/2003",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "12",
    background: 3,
    last_teams: ["Centre Esports Altafulla"],
    total_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
    season_stats: {
      matches: 1,
      goals: 1,
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
    background: 3,
    last_teams: ["Club Futbol Sala El Morell", "Club Futbol Pobla de Mafumet"],
    total_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
    season_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
  },
  {
    name: "Joel",
    first_surname: "Mera",
    second_surname: "",
    nickname: "Mera",
    role: "wing",
    age: getPlayerAge(new Date("2001-12-21")),
    birth_date: "21/12/2001",
    birth_place: "Altafulla",
    birth_country: "spain",
    number: "19",
    background: 3,
    last_teams: ["Camp Clar", "Tarragona Futbol Club"],
    total_stats: {
      matches: 1,
      goals: 1,
      assists: 0,
    },
    season_stats: {
      matches: 1,
      goals: 1,
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
