import { FireType, FIRE_TYPES_ORDER } from "./types";
import { QUESTIONS, Choice } from "./questions";

export type Scores = Record<FireType, number>;

export function createEmptyScores(): Scores {
	return {
		SPARKLE: 0,
		LONGTAIL: 0,
		CALM: 0,
		MULTICOLOR: 0,
		GOLDEN: 0,
	};
}

export function accumulateScores(
	selectedChoices: Array<{ questionId: string; choiceIndex: number }>
): Scores {
	const scores = createEmptyScores();
	for (const { questionId, choiceIndex } of selectedChoices) {
		const question = QUESTIONS.find((q) => q.id === questionId);
		if (!question) continue;
		const choice: Choice | undefined = question.choices[choiceIndex];
		if (!choice) continue;
		for (const key of Object.keys(choice.weight) as FireType[]) {
			scores[key] += choice.weight[key] ?? 0;
		}
	}
	return scores;
}

export function resolveTopType(scores: Scores): FireType {
	let best: FireType = FIRE_TYPES_ORDER[0];
	let bestScore = -Infinity;
	for (const t of FIRE_TYPES_ORDER) {
		const s = scores[t];
		if (s > bestScore) {
			best = t;
			bestScore = s;
		}
	}
	return best;
}

export function toPercentages(scores: Scores): Record<FireType, number> {
	const sum = FIRE_TYPES_ORDER.reduce((acc, t) => acc + scores[t], 0);
	if (sum <= 0) {
		return FIRE_TYPES_ORDER.reduce((acc, t) => {
			acc[t] = 0;
			return acc;
		}, {} as Record<FireType, number>);
	}
	return FIRE_TYPES_ORDER.reduce((acc, t) => {
		acc[t] = Math.round((scores[t] / sum) * 100);
		return acc;
	}, {} as Record<FireType, number>);
}

