"use client";

import { sanitize } from "dompurify";
import { parse } from "marked";
import { useState } from "react";
import { dedent } from "./../../utils";
import "./preview.scss";

const DEFAULT_MARKDOWN_SOURCE = dedent`# An interesting heading

## An interesting subheading

### An interesting subsubheading

#### An interesting subsubsubheading

##### An interesting subsubsubsubheading

###### An interesting subsubsubsubsubheading


[link to something](https://www.example.com)  
some \`inline\` code
\`\`\`ts
console.log("Hello World!");
\`\`\`
**random** shopping list
- eggs
- bread
- butter
- milk
- flour

> hi, I'm inside of a blockquote

![picture of a cat hiding under paper with text saying 404 not found](https://http.cat/404)`;

export default function MarkdownRenderer() {
	const [text, setText] = useState(DEFAULT_MARKDOWN_SOURCE);
	return (
		<div className="markdown-container my-2 flex w-full gap-x-2 rounded-lg bg-zinc-900 p-2">
			<textarea
				id="editor"
				onChange={(e) => setText(e.target.value)}
				className="h-full w-full resize-none rounded-lg bg-transparent bg-zinc-800 p-2"
				defaultValue={text}
			></textarea>
			<div className="border-l-[1px] border-zinc-600"></div>

			<div
				id="preview"
				className="h-full w-full overflow-x-auto overflow-y-scroll rounded-lg"
				dangerouslySetInnerHTML={{ __html: sanitize(parse(text)) }}
			></div>
		</div>
	);
}
