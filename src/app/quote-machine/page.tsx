import Quote from './Quote'
import { APIResponse } from './types'
type Props = {}

export default async function QuoteMachine({ }: Props) {
	
	const quotes: APIResponse = await (await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", {cache: 'force-cache'})).json()
	

	return (
		<div className="grid h-screen min-w-8 max-w-1/3 p-8 place-items-center">
	  {/*~~ is a faster version of Math.floor*/}
			<Quote {...quotes.quotes[~~(Math.random() * quotes.quotes.length)]}></Quote>
			</div>
  )
}