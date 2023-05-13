 "use client" // FIXME.

import Image from 'next/image'
import Link from 'next/link'
import {
  useState,
  useEffect,
} from 'react'


export default function Page({ params }: any) {
  // const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[] | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://rv3come0o0.execute-api.us-east-1.amazonaws.com/Prod/s?q=${params.s}&size=100`)
          const data = await response.json()
          setResults(data.hits.hits)
      } catch (error) {
        console.log(error)
      }
    })()
  })
  // }, [])

  const prettyTime = (t: number) => {
    let hh = Math.floor(t / 3600).toString().padStart(2, '0')
    let mm = Math.floor(t % 3600 / 60).toString().padStart(2, '0')
    let ss = Math.floor(t % 3600 % 60).toString().padStart(2, '0')
    return `${hh}:${mm}:${ss}`
  }

  return (
    <>
      <main className="">
        {results === null ? (
          <div className="flex m-2 p-2">
            <Image
              alt="bunny running to and fro"
              src="/loading.gif"
              height={500} width={500}
            />
          </div>
        ) : (
          results.length === 0 ? (
            <div className="m-2 p-2">
              <span className="text-lg">no encontramos nada loko</span>
            </div>
          ) : (
            results.map((result) => (
              <div className="m-2 p-2" key={result._id}>
                <div className="">
                  <Link
                    href={`https://youtube.com/watch?v=${result._source.videoId}&t=${result._source.timestamp}`}
                    prefetch={false}
                  >
                    {result._source.videoTitle}
                    &nbsp;<span className="font-mono">&lt;{prettyTime(result._source.timestamp)}&gt;</span>
                  </Link>
                </div>
                <div className="text-graytext text-xs">
                  {`https://youtube.com/watch?v=${result._source.videoId}&t=${result._source.timestamp}`}
                </div>
                <div className="font-mono">
                  {result._source.text}
                </div>
              </div>
            ))
          )
        )}
      </main>
    </>
  )
}

