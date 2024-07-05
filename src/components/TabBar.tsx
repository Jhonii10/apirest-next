'use client'

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    currentTab?:number;
    tabOptions?: number[];
}

export const TabBar = ({tabOptions=[1,2,3,4], currentTab = 1}:Props) => {

    const [selected, setSelected] = useState(currentTab);
    const router = useRouter()
    const numbercols = tabOptions.length
    

    const onTabSelected = (tab:number)=>{
        setSelected(tab);
        setCookie('selected',tab.toString())
        router.refresh();

    }

    return (
      <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 grid-cols-${numbercols} p-2 `}>
        {
            tabOptions.map(tab => (
                <div key={tab}>
                <input 
                    type="radio"
                    id={tab.toString()}
                    className="peer hidden" 
                    checked={selected === tab}
                    onChange={() => {}}
                    />
                <label
                    onClick={()=>onTabSelected(tab)} 
                    className="transition-allnpm install --save cookies-next block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                    {tab}
                </label>
              </div> 
            ))
        }
       
      </div>
    )
  }