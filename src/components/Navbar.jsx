"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full h-[70px] bg-[#fbbd01] '>
        <nav>
            <h2>
                <Link href="/">FilmoTeca</Link>
            </h2>

            <input type="text" placeholder='Digite o nome de um filme' />
        </nav>
    </header>
  )
}

export default Navbar