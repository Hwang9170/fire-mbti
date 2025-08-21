import { FireType } from "./types";

export type Choice = { text: string; weight: Partial<Record<FireType, number>> };
export type Question = { id: string; title: string; choices: Choice[] };

export const QUESTIONS: Question[] = [
	{
		id: "q1",
		title: "축제에 갈 때 나는…",
		choices: [
			{ text: "텀블러/에코백을 꼭 챙긴다", weight: { SPARKLE: 1, LONGTAIL: 1 } },
			{ text: "대중교통/자전거로 이동한다", weight: { LONGTAIL: 1 } },
			{ text: "필요한 것만 사고 쓰레기 최소화한다", weight: { CALM: 1 } },
			{ text: "업사이클 소품을 만들어 간다", weight: { MULTICOLOR: 1 } },
			{ text: "친구들을 모아 분리수거를 리드한다", weight: { GOLDEN: 1 } },
		],
	},
	{
		id: "q2",
		title: "불꽃쇼 대기 시간엔…",
		choices: [
			{ text: "주변 쓰레기를 슬쩍 줍는다", weight: { SPARKLE: 1 } },
			{ text: "물/음식을 나눠먹고 포장 최소화", weight: { CALM: 1, LONGTAIL: 1 } },
			{ text: "친환경 팁을 SNS로 공유", weight: { GOLDEN: 1, MULTICOLOR: 1 } },
			{ text: "에코 챌린지 아이디어를 만든다", weight: { MULTICOLOR: 1 } },
			{ text: "정해둔 루틴대로 분리수거 동선 점검", weight: { LONGTAIL: 1 } },
		],
	},
	{
		id: "q3",
		title: "굿즈를 살 때 나는…",
		choices: [
			{ text: "업사이클/친환경 소재만 고른다", weight: { CALM: 1, MULTICOLOR: 1 } },
			{ text: "필요 최소한만 산다", weight: { CALM: 1 } },
			{ text: "친구들에게 에코 굿즈를 추천한다", weight: { GOLDEN: 1 } },
			{ text: "소량을 사서 오래 쓴다", weight: { LONGTAIL: 1 } },
			{ text: "현장에서 재활용 미션을 깨고 보상받는다", weight: { SPARKLE: 1 } },
		],
	},
	{
		id: "q4",
		title: "불꽃 대신 친환경 라이트쇼가 있다면?",
		choices: [
			{ text: "바로 참여! 주변도 끌어들인다", weight: { SPARKLE: 1, GOLDEN: 1 } },
			{ text: "정해진 시간에 꾸준히 참여", weight: { LONGTAIL: 1 } },
			{ text: "조용히 감상하며 전력 소비를 체크", weight: { CALM: 1 } },
			{ text: "새로운 연출 아이디어를 제안", weight: { MULTICOLOR: 1 } },
			{ text: "봉사/운영 쪽에서 돕겠다", weight: { GOLDEN: 1 } },
		],
	},
	{
		id: "q5",
		title: "축제가 끝난 후 나는…",
		choices: [
			{ text: "SNS에 내 실천 인증 업로드", weight: { SPARKLE: 1 } },
			{ text: "다음 행사까지 실천 루틴을 설정", weight: { LONGTAIL: 1 } },
			{ text: "소비 줄이기/재사용 계획 세움", weight: { CALM: 1 } },
			{ text: "개선 아이디어/포스터 시안 제작", weight: { MULTICOLOR: 1 } },
			{ text: "지인들과 에코 챌린지 운영", weight: { GOLDEN: 1 } },
		],
	},
	{
		id: "q6",
		title: "분리수거 존에서 나는…",
		choices: [
			{ text: "사람들 흐름을 정리하며 안내한다", weight: { GOLDEN: 1 } },
			{ text: "내 쓰레기뿐 아니라 주변도 챙긴다", weight: { SPARKLE: 1 } },
			{ text: "라벨 제거/세척 등 제대로 한다", weight: { LONGTAIL: 1 } },
			{ text: "재활용 아이디어를 기록해둔다", weight: { MULTICOLOR: 1 } },
			{ text: "일회용 사용 자체를 줄인다", weight: { CALM: 1 } },
		],
	},
	{
		id: "q7",
		title: "부스 프로그램을 선택할 때…",
		choices: [
			{ text: "업사이클 워크숍을 찾아간다", weight: { MULTICOLOR: 1 } },
			{ text: "에코 캠페인 자원봉사를 신청한다", weight: { GOLDEN: 1 } },
			{ text: "걷기 챌린지/재활용 미션을 한다", weight: { SPARKLE: 1, LONGTAIL: 1 } },
			{ text: "소비 줄이기/절제 관련 세션", weight: { CALM: 1 } },
			{ text: "에너지 절약/루틴 미션 참여", weight: { LONGTAIL: 1 } },
		],
	},
	{
		id: "q8",
		title: "친구들과의 대화에서 나는…",
		choices: [
			{ text: "작은 실천 팁을 바로 제안", weight: { SPARKLE: 1 } },
			{ text: "장기 습관의 중요성을 설명", weight: { LONGTAIL: 1 } },
			{ text: "과소비를 경계하고 대안을 공유", weight: { CALM: 1 } },
			{ text: "창의적인 아이디어를 뿜뿜", weight: { MULTICOLOR: 1 } },
			{ text: "함께하는 캠페인을 주도", weight: { GOLDEN: 1 } },
		],
	},
];

