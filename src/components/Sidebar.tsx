import Image from 'next/image';
import React from 'react'
import {CiLogout } from 'react-icons/ci';
import { SidebarItem } from './SidebarItem';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export const Sidebar = async () => {

  const session = await getServerSession();
  const name = session?.user?.name ?? 'sin nombre';
  const image = session?.user?.image ?? '';



  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
      <div className="-mx-6 px-6 py-4">
        <Link href="/dashboard" title="dashboard">
          <Image
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
            alt="tailus logo"
            className='w-32'
            width={32}
            height={32}
          />
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Image
            src={image}
            alt={name}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-20 lg:h-20"
            width={320}
            height={320}
        />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{name}</h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
      </div>

      <SidebarItem/>
    </div>

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-red-600 hover:text-white">
        <CiLogout size={24} />
        <span >Logout</span>
      </button>
    </div>
  </aside>
  )
}
