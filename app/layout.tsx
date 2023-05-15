import './globals.css'
import SearchBox from './searchbox'

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
      <body className="bg-canvas text-canvastext">
        <SearchBox></SearchBox>
        {children}
      </body>
    </html>
  )
}
