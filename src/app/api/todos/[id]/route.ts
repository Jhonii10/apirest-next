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