import type { SetStateAction } from "react";
import { useEffect, useRef, type Dispatch } from "react";
import type { PadInfo } from "./page";

type Props = PadInfo & {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
};
export default function Pad({ audio, padKey, active, setActive }: Props) {
	const audioRef = useRef<HTMLAudioElement>(null);
	useEffect(() => {
		if (active) void audioRef.current?.play();
	}, [active]);
	return (
		<button
			className={`drum-pad h-16 w-16 rounded-xl border-2 border-zinc-800 bg-gradient-to-b from-zinc-700 to-zinc-800 text-xl text-zinc-50 shadow transition-all ${
				active ? "scale-75" : ""
			}`}
			onMouseDown={() => setActive(true)}
			onMouseUp={() => setActive(false)}
			onMouseLeave={() => setActive(false)}
		>
			{padKey}
			<audio ref={audioRef} id={padKey} src={audio}></audio>
		</button>
	);
}
