import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import ja from '../../../res/string/ja.json';
import en from '../../../res/string/en.json';

i18n.fallbacks = false;
i18n.translations = { ja, en };
// i18n.locale = "en"; // Localization.locale;

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return i18n.t(name, params);
}

export const getLocale = (language) => {
  if (language.includes('ja')) {
    return 'ja'
  }
  return 'en'
}

export default i18n;
