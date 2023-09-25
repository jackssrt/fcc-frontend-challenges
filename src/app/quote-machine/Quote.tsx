import RefreshButton from "./RefreshButton";
import type { Quote } from "./types";

type Props = Quote;

export default function Quote({ quote, author }: Props) {
	return (
		<div id="quote-box" className="flex flex-col space-y-2 rounded-lg border-2 border-zinc-800 bg-zinc-900 p-8">
			<h5 className="text-xl text-gray-200" id="author">
				{author}
			</h5>
			<hr className="border-zinc-600"></hr>
			<h3 className="p-4 text-4xl text-gray-200" id="text">
				<span className="mr-2 text-6xl opacity-50">"</span>
				{quote}
				<span className="ml-2 text-6xl opacity-50">"</span>
			</h3>
			<button className="text-gray-200" id="new-quote" value="New quote"></button>
			<span className="flex flex-row-reverse space-x-2 space-x-reverse">
				<a
					className="rounded-lg border-2 border-teal-700 bg-gradient-to-b from-teal-600 to-teal-700 p-2 shadow shadow-black transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
					href={`https://twitter.com/intent/tweet/?hashtags=quotes&text=${encodeURIComponent(
						`${quote} - ${author}`,
					)}`}
				>
					Post on X!
				</a>
				<RefreshButton></RefreshButton>
			</span>
		</div>
	);
}
