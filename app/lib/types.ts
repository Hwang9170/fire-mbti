export type FireType = "SPARKLE" | "LONGTAIL" | "CALM" | "MULTICOLOR" | "GOLDEN";

export const FIRE_TYPES_ORDER: FireType[] = [
	"SPARKLE",
	"LONGTAIL",
	"CALM",
	"MULTICOLOR",
	"GOLDEN",
];

export const TYPE_INFO: Record<
	FireType,
	{ title: string; tagline: string; desc: string; color: string }
> = {
	SPARKLE: {
		title: "스파클 불꽃 (즉흥형·행동가)",
		tagline: "작지만 확실한 불꽃",
		desc:
			"작은 실천을 즐겨 하고 빠르게 움직입니다. 분리수거, 텀블러, 에코 습관에 강점!",
		color: "#ef4444",
	},
	LONGTAIL: {
		title: "롱테일 불꽃 (지속형·꾸준러)",
		tagline: "길게 빛나는 꾸준함",
		desc:
			"대중교통/재사용 등 장기 습관을 잘 유지합니다. 느리지만 확실한 변화!",
		color: "#f59e0b",
	},
	CALM: {
		title: "카멀 불꽃 (차분형·성찰가)",
		tagline: "조용히 깊게 타오르는",
		desc:
			"소비 줄이기·재사용 중심의 절제형. 필요를 생각하고 실천합니다.",
		color: "#10b981",
	},
	MULTICOLOR: {
		title: "멀티컬러 불꽃 (창의형·혁신가)",
		tagline: "다채로운 아이디어",
		desc: "업사이클링/아이디어 제안 등 창의적 실천에 강합니다.",
		color: "#6366f1",
	},
	GOLDEN: {
		title: "골든 불꽃 (리더형·영향가)",
		tagline: "변화를 이끄는 황금 불꽃",
		desc:
			"주변을 설득하고 캠페인을 리드합니다. 함께하는 변화를 만듭니다.",
		color: "#fbbf24",
	},
};

