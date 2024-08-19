import { ui, defaultLanguage, showDefaultLang } from "./ui";
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLanguage;
}

export function setLangToLocalStorage(lang: keyof typeof ui) {
  localStorage.setItem("lang", lang);
}

export function getLangFromLocalStorage() {
  const lang = localStorage.getItem("lang");
  return lang === "es" ? "" : lang;
}

export function redirectToDesiredLang() {
  const lang = getLangFromLocalStorage();
  if (lang !== "") {
    window.location.href = `/${lang}`;
  }
}

export function getLangFromLocation() {
  return getLangFromUrl(new URL(window.location.href));
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLanguage ? path : `/${l}${path}`;
  };
}
