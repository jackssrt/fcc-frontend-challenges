"use client";

import { useRouter } from "next/navigation.js";

export default function RefreshButton() {
	const router = useRouter();
	return (
		<button
			className="rounded-lg border-2 border-zinc-700 bg-gradient-to-b from-zinc-600 to-zinc-700 p-2 shadow shadow-black transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
			onClick={() => router.refresh()}
		>
			New quote
		</button>
	);
}
