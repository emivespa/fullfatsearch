"use client"

// import Image from 'next/image'
import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


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
      <Input
        className="flex-auto border-graytext m-4 p-2 text-fieldtext bg-field"
        type="text"
        value={query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value)
        }}
        id="search" placeholder="busca por subtitulo"
      />
      <Button
        className="flex-initial m-4 p-2 ml-0 bg-buttonface text-buttontext border-buttonborder"
        type="submit"
      >
        🐇
      </Button>
    </form>
  )
}
