import { Strikethrough } from "lucide-react"

export default function Home(): FC {
  return (
    <>
      <main className="">
        <div
          className="
          prose
          m-4
          max-w-none
          dark:prose-invert
          prose-p:text-[canvastext]
          prose-code:bg-[buttonface]
          prose-code:font-normal
          prose-code:text-[canvastext]
          prose-code:before:content-['']
          prose-code:after:content-['']
          prose-pre:bg-[buttonface]
          prose-pre:text-[canvastext]
          "
        >
          <h1>fullfatsearch</h1>
          <p>
            fullfatsearch es un motor de busqueda para episodios de
            @CirculoVicioso8
          </p>
          <p>
            El ultimo episodio indexado es{" "}
            <s>
              <em>Circulo Vicioso #127 - Dante Choi (CEO de Peabody)</em>
            </s>
            {" "}
            <em>Circulo Vicioso #145 - Nicchinno Welcome Party</em>
          </p>
          <h2>Dorking</h2>
          <p>
            Syntax de Lucene: comillas, paréntesis y operadores lógicos.
            Busqueda por video con <code>AND videoId:XX</code>
          </p>
          <pre>&quot;propio marco&quot; AND videoId:MIoxw3nupFo</pre>
          <pre>&quot;mercado como&quot; AND (concepto OR entidad) </pre>
        </div>
      </main>
    </>
  );
}
