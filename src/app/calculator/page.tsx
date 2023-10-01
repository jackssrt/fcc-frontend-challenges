"use client";

import { evaluate } from "mathjs";
import { useState } from "react";
import Button from "./Button";
import { lex, stringifyTokens } from "./lexer";

/*function fixNumbers(math: string) {
	// the first regex matches decimals after the first decimal (which is not allowed)
	// the second matches any number that doesn't end with a .
	return math.replace(/(?<=\d*\.\d*)\.\d+/g, "").replace(/(\d|(\.\d))+/g, (v) => {
		const num = parseInt(v);
		return !Number.isNaN(num) ? `${num}` : v;
	});
}*/

export default function Calculator() {
	const [math, setMath] = useState<string>();
	const [result, setResult] = useState<string | number>();

	function handleButtonClick(value: string) {
		setMath((prevMath) => (prevMath || "") + value);
	}
	function handleEqualsClick() {
		try {
			// the regex replaces duplicate operators
			setResult(
				evaluate((math && stringifyTokens(lex(math)))?.replace(/[+\-/*]+(?=[*/])/g, "") || "0") as number,
			);
		} catch (e) {
			setResult(`${e instanceof Error ? e.message : "Math Error"}`);
		}
		setMath("");
	}
	function handleOperationClick(value: string) {
		setMath((v) => `${v === "" && typeof result === "number" ? result : v}${value}`);
	}

	return (
		<div className="mx-auto flex w-96 flex-col gap-2 rounded-lg bg-zinc-900 p-4">
			<div id="display" className="break-all rounded-lg bg-zinc-950 p-4 text-2xl">
				{(math && stringifyTokens(lex(math))) || result}
			</div>
			<br></br>
			{/*2rem 4rem*5 0.5rem*4*/}
			<div className="grid grid-cols-[repeat(5,4rem)] grid-rows-[repeat(4,4rem)] gap-2">
				{/* 1 2 3 + *
					4 5 6 - /
					7 8 9 = =
					c 0 . = =*/}
				{/* prettier-ignore */}
				<>
					<Button id="one" onClick={() => handleButtonClick("1")}>1</Button>
					<Button id="two" onClick={() => handleButtonClick("2")}>2</Button>
					<Button id="three" onClick={() => handleButtonClick("3")}>3</Button>
					<Button id="plus" onClick={() => handleOperationClick("+")}>+</Button>
					<Button id="times" onClick={() => handleOperationClick("*")}>*</Button>
					<Button id="four" onClick={() => handleButtonClick("4")}>4</Button>
					<Button id="five" onClick={() => handleButtonClick("5")}>5</Button>
					<Button id="six" onClick={() => handleButtonClick("6")}>6</Button>
					<Button id="minus" onClick={() => handleOperationClick("-")}>-</Button>
					<Button id="divide" onClick={() => handleOperationClick("/")}>/</Button>
					<Button id="seven" onClick={() => handleButtonClick("7")}>7</Button>
					<Button id="eight" onClick={() => handleButtonClick("8")}>8</Button>
					<Button id="nine" onClick={() => handleButtonClick("9")}>9</Button>
					<Button id="equals" className="col-span-2 row-span-2" onClick={handleEqualsClick}>=</Button>
					<Button id="clear" onClick={
						() => {
							setMath("");
							setResult(0);
						}
					}>c</Button>
					<Button id="zero" onClick={() => handleButtonClick("0")}>0</Button>
					<Button id="decimal" onClick={() => handleButtonClick(".")}>.</Button>
				</>
			</div>
		</div>
	);
}
