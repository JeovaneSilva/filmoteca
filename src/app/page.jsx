"use client"
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
      <div>
    {TopFilmes && TopFilmes.map((filme) => <p key={filme.id}>{filme.title}</p>)}
    </div>
    </>
  );
}
