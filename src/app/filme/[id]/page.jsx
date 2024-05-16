"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaMoneyCheckAlt,FaPiggyBank } from "react-icons/fa";
import Loading from "@/app/loading";

const FilmesURL = process.env.NEXT_PUBLIC_API
const chaveAPI = process.env.NEXT_PUBLIC_API_KEY
const ImageURL = process.env.NEXT_PUBLIC_IMG

export default function Filme() {

  const {id} = useParams()
  const [filme, setFilme] = useState(null)
  const [generos, setGeneros] = useState([])
  const [empresas, setEmpresas] = useState([])
  const [loading, setLoading] = useState(true);

  const getFilme = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    setFilme(data)
    setGeneros(data.genres)
    setEmpresas(data.production_companies)
    console.log(data.production_companies)
    setLoading(false);
  }

  useEffect(() => {
    const FilmeURL = `${FilmesURL}${id}?${chaveAPI}`

    getFilme(FilmeURL)
  }, [id])

  const FormatCurrency = (number) => {
    return number.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    })
  }

  if (loading) {
    return (
      <Loading/>
    );
  }

  console.log(empresas)
  
    return (
      <main className="flex w-full">
        {filme && (
          <section className="w-full flex-col flex justify-center items-center">
            <div className="mt-6">
              <img src={filme.poster_path ? `${ImageURL}${filme.poster_path}` : `/SEMCAPA.png`} 
              alt={filme.title} 
              className='h-[450px]'/>
            </div>

            <div className="flex flex-col items-center">

              <div className="mt-3 flex flex-col items-center">
                <h1 className=" text-[20px] max-w-[300px] text-center sm:text-3xl sm:max-w-[800px]">{filme.title}</h1>
                <h3 className=" text-xs sm:text-lg">{filme.tagline}</h3>
              </div>

              <div className="flex gap-[2rem] sm:gap-[8rem] items-center mt-6">

                <div className="flex flex-col items-center">
                  <h3 className="text-xl sm:text-2xl">Orçamento:</h3>
                  <p className="flex items-center text-base sm:text-lg mt-1"> <FaMoneyCheckAlt className="text-xl sm:text-3xl mr-1" />  {FormatCurrency(filme.budget)}</p>
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="text-xl sm:text-2xl">Receita:</h3>
                  <p className="flex items-center text-base sm:text-lg mt-1"> <FaPiggyBank className="text-xl sm:text-3xl mr-1" /> {FormatCurrency(filme.revenue)}</p>
                </div>

              </div>
              
              <div className=" grid grid-cols-2 mt-4 place-items-center w-[100%] sm:flex sm:gap-3 sm:mt-8 sm:w-full items-center justify-center">
                <p className="infoFilmeP mt-6 mr-3 sm:mr-0 sm:mt-0" >Duração:  <span className="text-[#8121ed]">{filme.runtime} min</span></p> 
                <p className="infoFilmeP mt-6 mr-3 sm:mr-0 sm:mt-0">Língua Original: <span className="text-[#8121ed]">{filme.original_language}</span></p>
                <p className="infoFilmeP mt-6 mr-3 sm:mr-0 sm:mt-0">Popularidade: <span className="text-[#8121ed]" >{filme.popularity}</span></p>
                <p className="infoFilmeP mt-6 mr-3 sm:mr-0 sm:mt-0">Votação Média: <span className="text-[#8121ed]">{filme.vote_average}</span></p>
              </div>

              <div className="mt-8 mb-2">
                <p className="w-[320px] text-sm sm:w-[500px] sm:text-base md:w-[750px] text-justify"><span className="font-bold">Descrição:</span> {filme.overview ? filme.overview : "Sem Descrição"} </p>
              </div>

              <div className="flex flex-col items-center bg-[#8121ed] min-w-[300px]  sm:min-w-[500px] rounded-[20px] mt-8 mb-8">
                <h3 className="text-2xl font-bold mt-2">Gêneros</h3>
                <div className="grid grid-cols-2 place-items-center sm:flex sm:justify-center sm:items-center gap-4 mt-4 mb-6 ">
                {generos.length > 0 ? (
                  generos.map(item => (
                    <div className="border-2 w-[80%] p-1 rounded-[10px] flex items-center justify-center text-center"
                      key={item.id}>

                      <p className="flex items-center justify-center text-xs h-[40px] sm:text-base font-bold pl-[10px[10px] sm:h-[45px]">
                        {item.name}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Nenhum gênero encontrado.</p>
                )}
                </div>

                <h3 className="text-2xl font-bold mt-2">Produção Por:</h3>
                <div className="grid grid-cols-2 sm:flex gap-6 mt-4 mb-6 ">
                {empresas.length > 0 ? (
                  empresas.map(item => (
                    <div className="border-2 p-1 rounded-[50%] w-[70px] h-[70px] flex items-center justify-center bg-white" key={item.id}>
                      <img src={item.logo_path ? `${ImageURL}${item.logo_path}` : `/SEMCAPAProdutora.png`} 
                      alt={item.name}
                      title={item.name} />
                    </div>
                  ))
                ) : (
                  <p className="text-center">Nenhum Produtor encontrado.</p>
                )}
                </div>

              </div>
                  
            </div>
            
          </section>
        )}
      </main>
    );
  }
  