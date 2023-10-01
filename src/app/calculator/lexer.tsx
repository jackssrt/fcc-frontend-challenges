import { P, match } from "ts-pattern";
const operatorPattern = P.union("+", "-", "/", "*");

type Token =
	| {
			type: "number";
			number: string;
	  }
	| {
			type: "operator";
			operator: P.infer<typeof operatorPattern>;
	  };

export default class Lexer {
	private completeNumberParts() {
		console.log(`completing number parts, ${this.numberParts.join(" ")}`);
		const originalNumber = this.numberParts.join("");
		const number = parseFloat(originalNumber);
		if (!Number.isNaN(number)) {
			this.output.push({ type: "number", number: originalNumber.endsWith(".") ? `${number}.` : `${number}` });
			this.numberParts = [];
		}
	}
	private readonly output: Token[] = [];
	private numberParts: string[] = [];

	constructor(private readonly input: string) {}
	public lex(): Token[] {
		for (const x of this.input) {
			console.log(`looping of ${x}`);
			match(x)
				.with(P.union("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."), (x) => {
					console.log("adding number");
					if (!(x === "." && this.numberParts.includes("."))) this.numberParts.push(x);
				})
				.with(operatorPattern, (x) => {
					this.completeNumberParts();
					this.output.push({ type: "operator", operator: x });
				})
				.otherwise(() => undefined);
		}
		this.completeNumberParts();
		return this.output;
	}
}
export function stringifyTokens(tokens: Token[]): string {
	return tokens.map((v) => (v.type === "number" ? v.number : v.operator)).join("");
}
export function lex(input: string): Token[] {
	return new Lexer(input).lex();
}
