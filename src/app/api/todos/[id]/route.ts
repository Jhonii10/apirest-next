import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request , segments: any) { 

    const {id} = segments.params;
    const todo = await prisma.todo.findFirst({
        where: {
            id:id
        }
    })
    

  return NextResponse.json(todo)
}


export async function PUT(request: Request , segments: any) { 

    const {id} = segments.params;
    const {completed , description} = await request.json()
    
    const updatedTodo = await prisma.todo.update({
        where: { id: id },
        data: { completed , description}
      })
    

  return NextResponse.json(updatedTodo)
}

