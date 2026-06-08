import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #09090b 0%, #0891b2 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#0891b2",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          Desenvolvedor Front-end
        </p>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          {siteConfig.name}
        </h1>
        <p
          style={{
            marginTop: 32,
            maxWidth: 760,
            fontSize: 32,
            lineHeight: 1.4,
            color: "#a1a1aa",
          }}
        >
          React · Next.js · TypeScript · Acessibilidade · Performance
        </p>
      </div>
    ),
    { ...size }
  );
}
