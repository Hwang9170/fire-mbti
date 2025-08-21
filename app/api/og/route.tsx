import Link from "next/link";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { TYPE_INFO, FireType } from "../../lib/types";

export const runtime = "edge";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const type = (searchParams.get("type") || "SPARKLE") as FireType;
	const info = TYPE_INFO[type] ?? TYPE_INFO.SPARKLE;

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					background: "white",
					padding: 64,
					fontSize: 36,
					color: "#111",
					position: "relative",
				}}
			>
				<div style={{ fontSize: 24, color: "#666", marginBottom: 16 }}>FIRE MBTI</div>
				<div style={{ fontWeight: 700, fontSize: 48, lineHeight: 1.2 }}>{info.title}</div>
				<div style={{ marginTop: 8, color: "#555" }}>{info.tagline}</div>
				<div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
					<div style={{ width: 24, height: 24, borderRadius: 9999, background: info.color }} />
					<div style={{ fontSize: 28 }}>#{type}</div>
				</div>
				<div style={{ position: "absolute", bottom: 32, right: 48, fontSize: 20, color: "#999" }}>
					share: fire-mbti
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <main className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-semibold mb-4">FIRE MBTI</h1>
        <p className="text-gray-600 mb-8">8문항으로 알아보는 나의 불꽃 유형</p>
        <Link href="/quiz" className="inline-block px-6 py-3 bg-black text-white rounded">
          시작하기
        </Link>
      </main>
    </div>
  );
}