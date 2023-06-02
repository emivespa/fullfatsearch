export default function Home() {
  return (
    <>
      <main className="">
        <div className="m-4 markdown">
          <h1>fullfatsearch</h1>
          <p>es un motor de busqueda para episodios de @CirculoVicioso8</p>
          <h2>dorking</h2>
          <pre>videoId:MIoxw3nupFo AND &quot;propio marco&quot;</pre>
          <pre>&quot;mercado como&quot; AND (concepto OR entidad) </pre>
        </div>
      </main>
    </>
  )
}

// import dynamic from 'next/dynamic'
// import Prose from './prose'
//
// export default function Page() {
//   const Mdx = dynamic(() => import('@/README.mdx'))
//   return (
//     <Prose>
//       <Mdx />
//     </Prose>
//   )
// }
//
