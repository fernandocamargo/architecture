import { addLocaleData } from "react-intl";

import * as locales from "./locales";

export const languages = ["en", "de", "pt"];

export const [locale] = String(window.navigator.language).split("-");

export const extractLocale = (stack, locale) =>
  stack.concat([...locales[locale]]);

export default addLocaleData(languages.reduce(extractLocale, []));
