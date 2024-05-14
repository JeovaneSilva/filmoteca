"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const [search, setSearch] = useState("")
  const router = useRouter()

  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(search)

    if(!search) return 

    router.push(`search?q=${search}`)
    setSearch("")
  }

  return (
    <header className='w-full h-[70px] bg-[#fbbd01]'>
        <nav className=' h-full text-3xl flex justify-between items-center'>
            <h2>
                <Link href="/">FilmoTeca</Link>
            </h2>
              <form onSubmit={handlesubmit}>
                <input className="border-2 border-black text-xl p-1 w-[350px] h-[40px] rounded-[10px] mr-3" 
                    type="text" 
                    placeholder='Digite o nome de um filme'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search} />
              </form>
        </nav>
    </header>
  )
}

export default Navbar