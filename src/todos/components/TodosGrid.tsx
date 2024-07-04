'use client'
import { Todo } from '@prisma/client'
import React from 'react'
import { TodoItem } from './TodoItem'

import * as todosApi from '@/todos/helpers/todos'
import { useRouter } from 'next/navigation'

interface Props {
    todos?:Todo[]

}

export const TodosGrid = ({todos = []}:Props) => {

    const router = useRouter();

    const toggleTodo = async(id:string , completed:boolean)=>{
        await todosApi.updateTodo(id , completed);
        router.refresh();
    }

  
    if (todos.length === 0) {
        return (
            <div className='flex items-center justify-center h-[70vh] w-full gap-4'>
                <h1 className='text-2xl font-bold'>No se encontraron tareas</h1>
            </div>
        )
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {
            todos?.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))

        }
    </div>
  )
}
