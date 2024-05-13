import React from 'react'

const ImageURL = process.env.NEXT_PUBLIC_IMG

const CardFilme = ({filme}) => {
  return (
    <div className='mb-10'>
        <img src={ImageURL+filme.poster_path} className='w-[290px] h-[330px]'/>
        <div className='bg-[#fbbd01]'>
          <h3>{filme.title}</h3>
          <p>Avaliação: {filme.vote_average}</p>
          <button className='bg-[#8121ed]'>Ver mais</button>
        </div>
        
    </div>
  )
}

export default CardFilme