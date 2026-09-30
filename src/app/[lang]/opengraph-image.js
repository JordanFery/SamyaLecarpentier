import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Samya Lecarpentier";

/** Fetches a static TTF subset of Newsreader for the given text (build time). */
async function loadDisplayFont(text) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@72,400&text=${encodeURIComponent(text)}`,
    ).then((response) => response.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage({ params }) {
  const { lang } = await params;
  const { home } = getDictionary(lang);
  const title = `${home.heroTitle} ${home.heroTitleEmphasis}`;
  const font = await loadDisplayFont(`${profile.name}${title}${home.heroLabel}`);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e8",
          color: "#1a1917",
          borderTop: "16px solid #ffd400",
          padding: "56px 72px 64px",
          fontFamily: font ? "Newsreader" : "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <span>{profile.name}</span>
          <span style={{ color: "#5c574f" }}>{home.heroLabel}</span>
        </div>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.02em", maxWidth: 1000 }}>{title}</div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Newsreader", data: font, style: "normal", weight: 400 }] : undefined,
    },
  );
}
