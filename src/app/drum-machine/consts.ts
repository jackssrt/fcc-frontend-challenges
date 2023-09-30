interface BasePadInfo {
	/**
	 * Named padKey because key conflicts with React's built-in key prop
	 */
	padKey: string;
	audio: string;
	name: string;
}

export const PADS = [
	{ padKey: "Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", name: "Heater 1" },
	{ padKey: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", name: "Heater 2" },
	{ padKey: "E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", name: "Heater 3" },
	{ padKey: "A", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", name: "Heater 4" },
	{ padKey: "S", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", name: "Clap" },
	{ padKey: "D", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", name: "Open Hi-hat" },
	{ padKey: "Z", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", name: "Kick n' hat" },
	{ padKey: "X", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", name: "Kick" },
	{ padKey: "C", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", name: "Closed Hi-hat" },
] as const satisfies readonly BasePadInfo[];
export const KEYS = new Set<string>(PADS.map((v) => v.padKey));
export type StaticPadInfo = (typeof PADS)[number];
export type Key = StaticPadInfo["padKey"];
export type Name = StaticPadInfo["name"];
