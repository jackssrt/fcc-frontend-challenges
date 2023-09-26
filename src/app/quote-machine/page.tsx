import { cookies } from "next/headers.js";
import Quote from "./Quote";
import type { APIResponse } from "./types";

export default async function QuoteMachine() {
	// hack to make page server side dynamically rendered instead of statically rendered.
	cookies();
	const quotes = (await (
		await fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
			{ next: { revalidate: false } },
		)
	).json()) as APIResponse;

	return (
		// ~~ is a faster version of Math.floor
		<Quote {...quotes.quotes[~~(Math.random() * quotes.quotes.length)]}></Quote>
	);
}
