import { type Match } from "@/configs/matches";
import { getLangFromLocation } from "@/i18n/utils";

export const getLastMatch = (matches: Match[]) => {
  const today = new Date();
  const pastMatches = matches.filter((match) => new Date(match.date) < today);
  return pastMatches.length > 0 ? pastMatches[pastMatches.length - 1] : null;
};

export const getNextMatch = (matches: Match[]) => {
  const today = new Date();
  const futureMatches = matches.filter((match) => new Date(match.date) > today);
  return futureMatches.length > 0 ? futureMatches[0] : null;
};

export const formatTimerDate = (date: Date) => {
  const lang = getLangFromLocation().toString();

  const weekDay = date.toLocaleString(lang, { weekday: "long" });
  const day = date.getDate();
  const monthString = date.toLocaleString(lang, { month: "long" });

  return `${weekDay}, ${day} ${monthString}`;
};
