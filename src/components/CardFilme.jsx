import React from 'react'

const ImageURL = process.env.NEXT_PUBLIC_IMG

const CardFilme = ({filme}) => {
  return (
    <div className='mb-10'>
        <img src={ImageURL+filme.poster_path} className='w-[300px] h-[330px]'/>
        <div className='bg-[#fbbd01] flex flex-col justify-center items-center'>
          <h3 className='text-white font-bold text-xl w-[240px] text-center'>{filme.title}</h3>
          <p>Avaliação: {filme.vote_average}</p>
          <button className='bg-[#8121ed] w-[100px]'>Ver mais</button>
        </div>
        
    </div>
  )
}

export default CardFilme