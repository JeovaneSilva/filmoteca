"use client"
import CardFilme from "@/components/CardFilme";
import { useEffect,useState } from "react";

const FilmesURL = process.env.NEXT_PUBLIC_API
const chaveAPI = process.env.NEXT_PUBLIC_API_KEY

export default function Home() {

 

  const [TopFilmes, setTopFilmes] = useState([])
  const [popularFilmes, setPopularFilmes] = useState([])
  const [FilmesCinema, setFilmesCinema] = useState([])
  

  // const router = useRouter();

  const FilmesMaisVotados = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setTopFilmes(data.results) 
  };
  
  const PopularFilmes = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setPopularFilmes(data.results) 
  };

  const FilmesEmCinema = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setFilmesCinema(data.results) 
  };

  useEffect(() => {
    const MelhoresFilmesURL = `${FilmesURL}top_rated?${chaveAPI}`
    const PopularURL = `${FilmesURL}popular?${chaveAPI}`
    const EmCinemaURL = `${FilmesURL}now_playing?${chaveAPI}`

    FilmesMaisVotados(MelhoresFilmesURL)
    PopularFilmes(PopularURL)
    FilmesEmCinema(EmCinemaURL)
  },[])

  console.log(popularFilmes)

  return (
    <>
      <section>
        <h1 className="text-3xl mt-7">Filmes Mais Votados</h1>
        <div className="slider mt-[10px] flex overflow-y-auto gap-[30px]">
          {TopFilmes.length > 0 && TopFilmes.map((filme) => <CardFilme key={filme.id} filme={filme}/>)}
        </div>
      </section>

      <section>
        <h1 className="text-3xl mt-7">Filmes Populares</h1>
        <div className="slider mt-[10px] flex overflow-y-auto gap-[30px]">
          {popularFilmes.length > 0 && popularFilmes.map((filme) => <CardFilme key={filme.id} filme={filme}/>)}
        </div>
      </section>

      <section>
        <h1 className="text-3xl mt-7">Filmes Em Lançamento</h1>
        <div className="slider mt-[10px] flex overflow-y-auto gap-[30px]">
          {FilmesCinema.length > 0 && FilmesCinema.map((filme) => <CardFilme key={filme.id} filme={filme}/>)}
        </div>
      </section>
    </>
  );
}
