"use client"
import { useEffect,useState } from "react";
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import CardFilme from "@/components/CardFilme";
import Loading from "../loading";

const searchURl = process.env.NEXT_PUBLIC_SEARCH
const chaveAPI = process.env.NEXT_PUBLIC_API_KEY

const SearchSuspense = () => {

  const searchParams = useSearchParams()
  const[filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true);
  const query = searchParams.get("q")

  const GetSearchQuery = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setFilmes(data.results) 
    setLoading(false);
  };

  useEffect(() => {
    const SearchURL = `${searchURl}?${chaveAPI}&query=${query}`

    GetSearchQuery(SearchURL)
  },[query])

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <main className="flex flex-col items-center">
        <h1 className="text-xl w-[80%] text-center sm:text-4xl  mt-10 mb-8 font-bold">Resultados para: <span className="text-[#fbbd01]">{query}</span></h1>
        <div className="mt-[10px] mb-[30px] w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[30px]">
          {filmes.length > 0 && filmes.map((filme) => <CardFilme key={filme.id} filme={filme}/>)}
        </div>
    </main>
  )
}

export default function Search() {

    return (
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="loader"></div></div>}>
        <SearchSuspense />
      </Suspense>
    );
  }
  