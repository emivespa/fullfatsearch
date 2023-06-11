"use client" // FIXME.

import Image from "next/image"
import {
  useState,
  // useEffect,
} from "react"
import prettyTime from "../prettyTime"

export default function Page({ params }: any) {
  // const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[] | null>(null)

  ;(async () => {
    try {
      const response = await fetch(
        `https://rv3come0o0.execute-api.us-east-1.amazonaws.com/Prod/s?q=${params.s}&size=100`
      )
      const data = await response.json()
      setResults(data.hits.hits)
    } catch (error) {
      setResults([])
      console.log(error)
    }
  })()

  return (
    <main className="">
      {results === null ? (
        <div className="m-4 flex justify-center p-2">
          <Image
            alt="bunny running to and fro"
            src="/loading.gif"
            height={400}
            width={400}
          />
        </div>
      ) : results.length === 0 ? (
        <div className="m-4 p-2">
          <span className="text-graytext">No encontramos nada</span>
        </div>
      ) : (
        <div className="m-4 flex flex-col gap-4 p-2">
          {results.map((result) => (
            <div key={result._id}>
              <a
                href={`https://youtube.com/watch?v=${result._source.videoId}&t=${result._source.timestamp}`}
              >
                {result._source.videoTitle}
                &nbsp;
                <span className="font-mono">
                  &lt;{prettyTime(result._source.timestamp)}&gt;
                </span>
              </a>
              <div className="text-xs text-graytext">
                {`https://youtube.com/watch?v=${result._source.videoId}&t=${result._source.timestamp}`}
              </div>
              <div className="font-mono">{result._source.text}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
