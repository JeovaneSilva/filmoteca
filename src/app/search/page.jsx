"use client"
import { useEffect,useState } from "react";
import { useSearchParams } from 'next/navigation'
import CardFilme from "@/components/CardFilme";


const searchURl = process.env.NEXT_PUBLIC_SEARCH
const chaveAPI = process.env.NEXT_PUBLIC_API_KEY

export default function Search() {

  const searchParams = useSearchParams()

  const[filmes, setFilmes] = useState([])
  const query = searchParams.get("q")

  const GetSearchQuery = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setFilmes(data.results) 
  };

  useEffect(() => {
    const SearchURL = `${searchURl}?${chaveAPI}&query=${query}`

   
    GetSearchQuery(SearchURL)
  },[query])
  
    return (
      <main>
        <section>
        <h1 className="text-3xl mt-7">Resultados para: {query}</h1>
        <div className="slider mt-[10px] flex overflow-y-auto gap-[30px]">
          {filmes.length > 0 && filmes.map((filme) => <CardFilme key={filme.id} filme={filme}/>)}
        </div>
      </section>
      </main>
    );
  }
  