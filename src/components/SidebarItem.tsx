'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { CiBookmarkCheck } from 'react-icons/ci';

const menuItems = [
    {
        path: '/dashboard',
        icon: <CiBookmarkCheck size={40}/>,
        title:'Inicio',
    },
    {
        path: '/dashboard/rest-todos',
        icon: <CiBookmarkCheck size={40}/>,
        title:'rest todos',
    },
    

    
]

export const SidebarItem = () => {

    const path = usePathname();
    
  return (
    <ul className="space-y-2 tracking-wide mt-8">
        {
            menuItems.map((item)=>{
                return(
                    <li key={item.title}>
                        <Link href={item.path} className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${item.path === path && 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'} hover:bg-gradient-to-r  from-sky-600 to-cyan-400 hover:text-white`}>
                            {item.icon}
                            <span className="-mr-1 font-medium">{item.title}</span>
                        </Link>
                    </li>
                )
            })
        }
      </ul>
  )
}
