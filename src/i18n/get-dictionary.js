import fr from "./dictionaries/fr";
import en from "./dictionaries/en";
import { withTypography } from "@/lib/typography";

const dictionaries = { fr: withTypography(fr, "fr"), en };

export function getDictionary(lang) {
  return dictionaries[lang];
}
