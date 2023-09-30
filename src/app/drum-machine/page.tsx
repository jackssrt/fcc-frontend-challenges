"use client";

import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import Pad from "./Pad";
import type { Key, StaticPadInfo } from "./consts";
import { KEYS, PADS } from "./consts";

export type PadInfo = StaticPadInfo & {
	active: boolean;
};

export default function DrumMachine() {
	/* creates an array of useStates for each pad
	looks like
 	{
		Q: [false, (v: boolean) => void],
		...
	}
	*/
	const activePads = PADS.reduce(
		(acc, val) => ({
			...acc,
			[val["padKey"]]: useState(false),
		}),
		{} as Record<Key, [boolean, Dispatch<SetStateAction<boolean>>]>,
	);

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (!KEYS.has(e.key.toUpperCase())) return;
			// sets the corresponding pad to be active
			activePads[e.key.toUpperCase() as Key]?.[1](true);
		});
		document.addEventListener("keyup", (e) => {
			if (!KEYS.has(e.key.toUpperCase())) return;
			// sets the corresponding pad to be not active
			activePads[e.key.toUpperCase() as Key]?.[1](false);
		});
	}, []);

	return (
		<div id="drum-machine" className="mx-auto flex w-fit flex-row gap-2 rounded-lg bg-zinc-900 p-4">
			<div className="grid grid-cols-3 grid-rows-3 gap-2">
				{PADS.map((v) => (
					<Pad
						key={v.padKey}
						{...v}
						active={activePads[v.padKey][0]}
						setActive={activePads[v.padKey][1]}
					></Pad>
				))}
			</div>
			<div className="border-l-[1px] border-zinc-600"></div>
			<div id="display" className="my-auto w-96 text-center text-xl">
				{Object.values(activePads)
					.map((v, i) => (v[0] ? PADS[i].name : undefined))
					.filter(Boolean)
					.join(" & ")}
			</div>
		</div>
	);
}
