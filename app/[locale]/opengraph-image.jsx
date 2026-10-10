import { ImageResponse } from "next/og";
import { getContent } from "@/lib/content";
import { locales } from "@/lib/i18n";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Andreas Alexander — Creative Developer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * No webfont fetch here on purpose: a Google Fonts call inside an OG route is
 * the usual cause of slow or blank cards. The system stack renders fine.
 */
export default async function Image({ params }) {
  const t = getContent(params.locale);

  // Satori requires an explicit `display: flex` on any div with more than one
  // child, so every line of text is built as a single string first.
  const audiences = [
    t.profile.role,
    t.switcher.tabs.companies,
    t.switcher.tabs.msme,
    t.switcher.tabs.weddings,
  ].join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #08080a 0%, #10213a 55%, #0071e3 160%)",
          color: "#f5f5f7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
          <span style={{ fontWeight: 700 }}>Andreas</span>
          <span style={{ color: "#3faaff" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            {t.hero.title}
          </div>
          <div style={{ fontSize: 28, color: "#a1a1aa", maxWidth: 900 }}>{audiences}</div>
        </div>
      </div>
    ),
    size
  );
}
