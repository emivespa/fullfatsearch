import ReadMe from '@/README.mdx'

export default function Home() {
  return (
    <div className="markdown m-4">
      <ReadMe />
    </div>
  )
  // return (
  //   <>
  //     <main className="">
  //       <div className="m-4 markdown">
  //         <h1>fullfatsearch</h1>
  //         <p>es un motor de busqueda para episodios de @CirculoVicioso8</p>
  //         <h2>dorking</h2>
  //         <pre>videoId:MIoxw3nupFo AND &quot;propio marco&quot;</pre>
  //         <pre>&quot;mercado como&quot; AND (concepto OR entidad) </pre>
  //       </div>
  //     </main>
  //   </>
  // )
}
