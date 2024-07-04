export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"


export const metadata = {
 title: 'Server todos',
 description: 'Server todos',
};

export default async function ServerTodosPage() {
    const todos = await prisma.todo.findMany({orderBy:{description:'asc'}})
    
    return (
      <div>
          <div className="w-full px-5 mx-5 mb-5">
          < NewTodo/>
          </div>
        
        <TodosGrid todos={todos}/>
      </div>)
}