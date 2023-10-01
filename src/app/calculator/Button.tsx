import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
	return (
		<button
			{...props}
			className={`${props.className} h-full w-full rounded-xl border-zinc-800 bg-gradient-to-b from-zinc-700 to-zinc-800 text-center text-xl text-zinc-50 shadow transition-all active:scale-75`}
		>
			{props.children}
		</button>
	);
}
