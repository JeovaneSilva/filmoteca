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
      <main className="flex flex-col items-center">
        <h1 className="text-4xl  mt-10 mb-8 font-bold">Resultados para: <span className="text-[#fbbd01]">{query}</span></h1>
        <div className="mt-[10px] mb-[30px] w-[80%] grid grid-cols-4 place-items-center gap-[30px]">
          {filmes.length > 0 && filmes.map((filme) => <CardFilme key={filme.id} filme={filme}/>)}
        </div>
      </main>
    );
  }
  