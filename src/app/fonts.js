import { Newsreader, Schibsted_Grotesk } from "next/font/google";

/** Display: editorial serif with optical sizes — large, light, italic for emphasis. */
export const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

/** Text and interface: a newsroom grotesque, highly legible at small sizes. */
export const schibsted = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-schibsted",
  display: "swap",
});
