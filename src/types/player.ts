export interface Player {
  name: string;
  first_surname: string;
  second_surname: string | undefined;
  nickname: string;
  number: string;
  background: number;
  age: number;
  birth_date: string;
  birth_place: string;
  birth_country: string;
  last_teams: string[] | undefined;
}

export interface Keeper extends Player {
  role: "keeper";
  total_stats: KeeperStats;
  season_stats: KeeperStats;
}

export interface FieldPlayer extends Player {
  role: "defender" | "wing" | "pivot";
  season_matches: number;
  season_goals: number;
  total_matches: number;
  total_goals: number;
}

interface PlayerStats {
  matches: number;
  goals: number;
  assists: number;
}

interface KeeperStats {
  matches: number;
  clean_sheets: number;
  saves: number;
}
