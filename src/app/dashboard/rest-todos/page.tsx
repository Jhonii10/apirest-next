export const dynamic = 'force-dynamic';
export const revalidate = 0;


import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import { TodosGrid } from "@/todos/components/TodosGrid";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export const metadata = {
 title: 'Rest todos',
 description: 'Rest todos',
};

export default async function RestTodosPage() {

  const session = await getServerSession(authOptions);
  if (!session) redirect('/dashboard');

    const todos = await prisma.todo.findMany({
      where:{
        userId: session!.user.id ?? ''
      },
      orderBy:{
        description:'asc'
      }}
    )

    
  return (
    <div>
        <div className="w-full px-5 mx-5 mb-5">
        < NewTodo/>
        </div>
      
      <TodosGrid todos={todos}/>
    </div>
  );
}