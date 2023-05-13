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
        className="flex-auto border m-4 p-2 text-lg bg-field border-buttonborder text-fieldtext"
        type="text"
        value={query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value)
        }}
        id="search" placeholder="🐇"
      />
      <button
        className="flex-initial border m-4 p-2 text-lg bg-buttonface border-buttonborder text-buttontext"
        type="submit"
      >
        Tuki
      </button>
    </form>
  )
}
