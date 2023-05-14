"use client"

// import Image from 'next/image'
import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'


export default function SearchBox() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  return (
    <form
      className="flex"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        router.push(`/${query}`)
      }}
    >
      <input
        className="flex-auto border border-graytext m-4 p-2 text-lg bg-field text-fieldtext"
        type="text"
        value={query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value)
        }}
        id="search" placeholder="busca por subtitulo"
      />
      <button
        className="flex-initial m-4 p-2 ml-0 text-lg bg-buttonface border-buttonborder text-buttontext"
        type="submit"
      >
        🐇
      </button>
    </form>
  )
}
