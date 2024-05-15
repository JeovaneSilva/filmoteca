"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter,useParams } from 'next/navigation'

const Navbar = () => {

  const {id} = useParams()

  const [search, setSearch] = useState("")
  const router = useRouter()

  const handlesubmit = (e) => {
    e.preventDefault()

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
            {id ? (
              <Link href="/">
                <button className=' border-2 p-1 text-xl font-bold border-[#8121ed] mr-5 rounded-[13px] w-[100px]'>
                  Voltar
                </button>
              </Link>
            ):(<form onSubmit={handlesubmit}>
              <input className="border-2 border-black rounded-[10px] mr-3 p-1  w-[200px] h-[35px] text-lg sm:w-[350px] sm:h-[45px]" 
                  type="text" 
                  placeholder='Busque um filme...'
                  onChange={(e) => setSearch(e.target.value)}
                  value={search} />
            </form>)}
              
        </nav>
    </header>
  )
}

export default Navbar