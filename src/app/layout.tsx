import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const prompt = Prompt({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "freeCodeCamp Front-end Challenges",
	description: "My solutions to the freeCodecamp Front-end Challenges",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></Script>
			<body className={prompt.className}>{children}</body>
		</html>
	);
}
