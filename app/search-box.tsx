"use client"

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
      className="flex border-b border-border"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        router.push(`/${query}`)
      }}
    >
      <Input
        className="m-4 p-2 max-w-[80ch] bg-input border-border"
        type="text"
        value={query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value)
        }}
        id="search" placeholder="busca por subtitulo"
      />
      <Button
        className="m-4 p-2 ml-0 bg-primary text-primary-foreground"
        type="submit"
      >
        🐇
      </Button>
    </form>
  )
}
