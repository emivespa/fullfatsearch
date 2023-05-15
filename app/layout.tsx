import './globals.css'
import SearchBox from './search-box'
// import Script from 'next/script'
import { Providers } from './providers'

export const metadata = {
  title: 'full fat search',
  description: '@CirculoVicioso8 search engine',
  other: {
    'color-scheme': 'dark light',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SearchBox></SearchBox>
          {children}
        </Providers>
      </body>
    </html>
  )
}
