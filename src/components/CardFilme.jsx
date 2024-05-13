import React from 'react'

const ImageURL = process.env.NEXT_PUBLIC_IMG

const CardFilme = ({filme}) => {
  return (
    <div className=''>
        <img src={ImageURL+filme.poster_path} className='w-[300px] h-[400px]'/>
        <p>{filme.title}</p>
    </div>
  )
}

export default CardFilme