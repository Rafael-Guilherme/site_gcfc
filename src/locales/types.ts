export type TranslationKey = string;
export type TranslationValue = string;

export type TranslationObject = {
  [key: string]: TranslationValue;
};

export type Translations = {
  [languageCode: string]: TranslationObject;
};

export type LanguageCode = 
  | 'br' | 'us' | 'es' | 'fr' | 'de' | 'it' | 'nl' | 'ae' 
  | 'cn' | 'jp' | 'kr' | 'ru' | 'tr' | 'gr' | 'bg' | 'ro' 
  | 'hu' | 'cz' | 'pl' | 'fi' | 'dk' | 'th' | 'id' | 'my';
