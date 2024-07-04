import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import { TodosGrid } from "@/todos/components/TodosGrid";

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({orderBy:{description:'asc'}})
    
  return (
    <div>
        <div className="w-full px-5 mx-5 mb-5">
        < NewTodo/>
        </div>
      
      <TodosGrid todos={todos}/>
    </div>
  );
}