"use client"
import CardFilme from "@/components/CardFilme";
import Navbar from "@/components/Navbar";
import { useEffect,useState } from "react";

const FilmesURL = process.env.NEXT_PUBLIC_API
const chaveAPI = process.env.NEXT_PUBLIC_API_KEY

export default function Home() {

  const [TopFilmes, setTopFilmes] = useState([])

  const MelhoresFilmes = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setTopFilmes(data.results) 
  };

  useEffect(() => {
    const MelhoresFilmesURL = `${FilmesURL}top_rated?${chaveAPI}`

    MelhoresFilmes(MelhoresFilmesURL)
  },[])

  console.log(TopFilmes)

  return (
    <>
      <Navbar />
      <div className=" w-full mt-20 grid grid-cols-4 place-items-center">
        {TopFilmes.length > 0 && TopFilmes.map((filme) => <CardFilme key={filme.id} filme={filme}/>)}
    </div>
    </>
  );
}
