'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const toggleTodo = async(id:string , completed:boolean)=>{
  const todo = await prisma.todo.findFirst({where:{
    id:id
  }})
  if (!todo) {
    throw `todo con id ${id} no encontrado`
  }else{

    const updateTodo = await prisma.todo.update({
        where:{id:id},
        data:{completed:completed}
    })

    revalidatePath('/dashboard/server-todos')

    return updateTodo
  }
}


export const addTodo = async(description:string)=>{

    try {
        const todo = await prisma.todo.create({
            data: {description}
        })
    
        revalidatePath('/dashboard/server-todos')
    
        return todo
    } catch (error:any) {
        throw new Error(error.message) 
    }
    
    
}


export const deleteCompletedAction = async()=>{

    try {
        const todo = await prisma.todo.deleteMany({
            where:{completed:true}
        })
    
        revalidatePath('/dashboard/server-todos')
        return todo
    } catch (error:any) {
        throw new Error(error.message)

    }
    

    
}
