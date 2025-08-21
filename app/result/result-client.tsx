"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { accumulateScores, resolveTopType, toPercentages } from "../lib/score";
import { FIRE_TYPES_ORDER, TYPE_INFO } from "../lib/types";

function parseAnswersParam(aParam: string | null): Array<{ questionId: string; choiceIndex: number }> {
	if (!aParam) return [];
	const parts = aParam.split(",");
	return parts.map((p, i) => ({ questionId: `q${i + 1}`, choiceIndex: Number(p) })).filter((x) => !Number.isNaN(x.choiceIndex) && x.choiceIndex >= 0);
}

export default function ResultClient() {
	const params = useSearchParams();
	const aParam = params.get("a");

	const { scores, top, percents } = useMemo(() => {
		const selections = parseAnswersParam(aParam);
		const s = accumulateScores(selections);
		const t = resolveTopType(s);
		const p = toPercentages(s);
		return { scores: s, top: t, percents: p };
	}, [aParam]);

	const info = TYPE_INFO[top];

	return (
		<div className="mx-auto max-w-2xl py-10 px-5 bg-white rounded-lg shadow">
			<h1 className="text-3xl font-semibold mb-2 text-blue-700">당신의 불꽃 유형</h1>
			<h2 className="text-2xl font-bold mb-1 text-blue-900">{info.title}</h2>
			<p className="text-gray-800 mb-6">{info.tagline}</p>
			<p className="mb-8 leading-relaxed text-gray-900">{info.desc}</p>

			<div className="space-y-3">
				{FIRE_TYPES_ORDER.map((t) => (
					<div key={t} className="w-full">
						<div className="flex justify-between mb-1 text-sm">
							<span className="text-gray-700">{TYPE_INFO[t].title}</span>
							<span className="text-gray-700">{percents[t]}%</span>
						</div>
						<div className="h-2 bg-blue-100 rounded">
							<div
								className="h-2 rounded transition-all"
								style={{ width: `${percents[t]}%`, backgroundColor: TYPE_INFO[t].color }}
							/>
						</div>
					</div>
				))}
			</div>

			<div className="mt-8 flex gap-3">
				<Link
					href="/quiz"
					className="px-4 py-2 border rounded bg-white text-blue-700 border-blue-300 hover:bg-blue-50 transition"
				>
					다시 하기
				</Link>
				<a
					href={`/api/og?type=${top}`}
					target="_blank"
					rel="noopener noreferrer"
					className="px-4 py-2 bg-blue-600 text-white rounded font-bold shadow hover:bg-blue-700 transition"
				>
					공유 이미지 열기
				</a>
			</div>
		</div>
	);
}

