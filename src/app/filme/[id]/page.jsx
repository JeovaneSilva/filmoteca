"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const FilmesURL = process.env.NEXT_PUBLIC_API
const chaveAPI = process.env.NEXT_PUBLIC_API_KEY
const ImageURL = process.env.NEXT_PUBLIC_IMG

export default function Filme({ params }) {

  const {id} = useParams()
  const [filme, setFilme] = useState(null)

  const getFilme = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setFilme(data)
  }

  useEffect(() => {
    const FilmeURL = `${FilmesURL}${id}?${chaveAPI}`

    getFilme(FilmeURL)
  }, [])


    return (
      <main className="flex w-full">
        {filme && (
          <section className="w-full flex">
            <div className="w-[30%]">
              <img src={ImageURL+filme.poster_path} className=' w-full h-[89vh]'/>
            </div>
            <div className="w-[70%]">
              <h1> Titulo: {filme.title}</h1>
              <h3>Slogan: {filme.tagline}</h3>
              <p>Orçamento: {filme.budget}</p>
              <p>Receita: {filme.revenue}</p>
              <p>Duração: {filme.runtime} min</p>
              <p>Descrição: {filme.overview}</p>
            </div>
            
          </section>
        )}
      </main>
    );
  }
  