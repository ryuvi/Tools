"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {FaArrowLeft} from 'react-icons/fa'

export default function Header() {
    const pathname = usePathname()

    return <header className="my-5 mx-5 rounded-lg flex justify-between p-3 font-bold text-center shadow-md shadow-stone-50 bg-white">
        {(pathname !== "/") && (<Link href="/" className='justify-self-start'><p className='flex items-center text-black'><FaArrowLeft className='mr-1'/> Home</p></Link>)}
        <h1 className="text-black text-xl justify-self-end">Tela Principal</h1>
    </header>
}
