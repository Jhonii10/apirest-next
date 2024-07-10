'use client'
import { useSession,signOut , signIn } from 'next-auth/react'
import React from 'react'
import { CiLogout } from 'react-icons/ci'
import { IoShieldOutline } from 'react-icons/io5'

export const LogoutButton = () => {

    const {data:session , status } = useSession();
    

    if (status === 'loading') {
        return(
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-red-600 hover:text-white">
            <IoShieldOutline size={24} />
            <span >Espere...</span>
        </button>)
    }

    if (status === 'unauthenticated') {
        return(
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-red-600 hover:text-white"
        onClick={() => signIn()}
        >
            <IoShieldOutline size={24} />
            <span >Ingresar</span>
        </button>)
    }
    


  return (
    <button 
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-red-600 hover:text-white"
        onClick={()=>signOut()}
        >
        <CiLogout size={24} />
        <span >Logout</span>
    </button>
  )
}
