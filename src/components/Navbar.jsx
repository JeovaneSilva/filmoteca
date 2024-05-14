"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full h-[70px] bg-[#fbbd01]'>
        <nav className=' h-full text-3xl flex justify-start items-center'>
            <h2>
                <Link href="/">FilmoTeca</Link>
            </h2>
        </nav>
    </header>
  )
}

export default Navbar