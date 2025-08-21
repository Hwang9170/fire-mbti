"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { QUESTIONS } from "../lib/questions";

export default function QuizPage() {
	const total = QUESTIONS.length;
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState<number[]>(Array(total).fill(-1));

	const progressPercent = useMemo(() => Math.round(((step + 1) / total) * 100), [step, total]);
	const canNext = answers[step] !== -1;
	const isLast = step === total - 1;

	function chooseChoice(idx: number) {
		setAnswers((prev) => {
			const copy = [...prev];
			copy[step] = idx;
			return copy;
		});
	}

	function move(delta: number) {
		setStep((s) => Math.min(total - 1, Math.max(0, s + delta)));
	}

	const queryParam = useMemo(() => {
		// encode answers as a simple comma-separated list
		const encoded = answers.join(",");
		return new URLSearchParams({ a: encoded }).toString();
	}, [answers]);

	const q = QUESTIONS[step];

	return (
		<div className="mx-auto max-w-2xl py-10 px-5 bg-white rounded-lg shadow">
			<h1 className="text-3xl font-semibold mb-6 text-blue-700">FIRE MBTI 퀴즈</h1>
			<div className="h-2 bg-blue-100 rounded mb-6">
				<div className="h-2 bg-blue-500 rounded transition-all" style={{ width: `${progressPercent}%` }} />
			</div>
			<p className="text-sm text-gray-800 mb-2">
				{step + 1} / {total}
			</p>
			<h2 className="text-xl font-medium mb-4 text-gray-900">{q.title}</h2>
			<div className="flex flex-col gap-3">
				{q.choices.map((c, idx) => (
					<button
						key={idx}
						onClick={() => chooseChoice(idx)}
						className={classNames(
							"text-left border rounded px-4 py-3 transition-colors font-medium",
							{
								"bg-blue-600 text-white border-blue-600 shadow": answers[step] === idx,
								"bg-white text-gray-900 border-gray-300 hover:bg-blue-50": answers[step] !== idx,
							}
						)}
					>
						{c.text}
					</button>
				))}
			</div>
			<div className="mt-6 flex items-center justify-between">
				<button
					onClick={() => move(-1)}
					disabled={step === 0}
					className="px-4 py-2 border rounded disabled:opacity-50 bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
				>
					이전
				</button>
				{isLast ? (
					<Link
						href={canNext ? `/result?${queryParam}` : "#"}
						className={classNames(
							"px-4 py-2 rounded",
							{
								"bg-blue-600 text-white shadow hover:bg-blue-700": canNext,
								"bg-gray-300 text-gray-500 pointer-events-none": !canNext,
							}
						)}
						aria-disabled={!canNext}
					>
						결과 보기
					</Link>
				) : (
					<button
						onClick={() => canNext && move(1)}
						disabled={!canNext}
						className="px-4 py-2 border rounded disabled:opacity-50 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 font-bold transition"
					>
						다음
					</button>
				)}
			</div>
		</div>
	);
}

