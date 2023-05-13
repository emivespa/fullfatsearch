import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import {
	ChangeEvent,
	FormEvent,
	useState,
} from 'react'

export default function Home() {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState<any[] | null>(null)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			const response = await fetch(`https://rv3come0o0.execute-api.us-east-1.amazonaws.com/Prod/s?q=${query}&size=100`)
				const data = await response.json()
				setResults(data.hits.hits)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Head>
				<title>full fat search</title>
				<meta name="description" content="busca conejo" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🐇</text></svg>" />
			</Head>
			<main className="">
				<div className="m-2 p-2">
					<form className="" onSubmit={handleSubmit}>
						<input
						className="border border-slate-400 m-2 p-2 text-lg"
						type="text" value={query} onChange={handleInputChange}
						id="search" placeholder="search"
						/>
						<button className="bg-blue-500 text-white m-2 p-2 text-lg" type="submit">Tuki</button>
					</form>
				</div>
				<div className="m-2 p-2" id="search-results">
					{results === null ? (
						<div className="m-2 p-2">
							<span className="text-lg">Para los gordos dorking:
							<br/>
							<code>videoId:MIoxw3nupFo AND &quot;propio marco&quot;</code>
							<br/>
							<code>&quot;mercado como&quot; AND (concepto OR entidad) </code>
							</span>
						</div>
					) : (
						results.length === 0 ? (
							<div className="m-2 p-2">
								<span className="text-lg">no encontramos nada loko</span>
							</div>
						) : (
							results.map((result) => (
								<div className="border border-slate-200 m-2 p-2" key={result._id}>
									<div className="">
										<a
											className="text-indigo-800"
											href={`https://youtube.com/watch?v=${result._source.videoId}&t=${result._source.timestamp}`}
										>
											{result._source.videoTitle}
										</a>
									</div>
									<div className="text-neutral-400 text-xs">
										{`https://youtube.com/watch?v=${result._source.videoId}&t=${result._source.timestamp}`}
									</div>
									<div className="font-mono">
										{result._source.text}
									</div>
								</div>
							))
						)
					)}
				</div>
			</main>
		</>
	)
}
