import { Suspense } from "react";
import ResultClient from "./result-client";

export default function ResultPage() {
	return (
		<Suspense>
			<ResultClient />
		</Suspense>
	);
}

