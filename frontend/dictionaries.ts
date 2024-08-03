import "server-only";

import ru from "./dictionaries/ru.json";

export type IDictionaries = typeof ru;

export type TLocales = "ru" | "ua";

const dictionaries = {
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  ua: () => import("./dictionaries/ua.json").then((module) => module.default),
};

export const locales = ["ua", "ru"];

export const getDictionary = async (locale: TLocales) => dictionaries[locale]();
