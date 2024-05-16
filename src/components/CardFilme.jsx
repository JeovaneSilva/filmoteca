"use client";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

const ImageURL = process.env.NEXT_PUBLIC_IMG

const CardFilme = ({filme}) => {
  return (
    <div className='min-w-[200px] relative'>
        <img src={filme.poster_path ? `${ImageURL}${filme.poster_path}` : `/SEMCAPA.png`} 
        alt={filme.title} 
        className=' w-full h-full block m-auto'/>
        <div className=" flex justify-center items-center flex-col opacity-0 transition-[0.5s] top-0 left-0 absolute w-full h-full bg-[#8021ed50] text-white hover:opacity-[1]">
          <h1 className="w-[90%] text-center text-lg font-bold">{filme.title}</h1>
          <p className="flex justify-center items-center gap-2 mt-3"> <FaRegStar className="text-[#fbbd01] text-2xl"/> {filme.vote_average}</p>
          <Link href={`/filme/${filme.id}`}>
            <button className="w-[100px] h-[40px] rounded-[10px] font-bold mt-3 bg-[#fbbd01] ">Saber Mais</button>
          </Link>
        </div>
  
        

    </div>
  )
}

export default CardFilme