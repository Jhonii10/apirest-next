import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  await prisma.todo.deleteMany(); // detete * from todo

  const todo = await prisma.todo.createMany({
    data: [
        {description: 'Piedra del alma', completed:true},
        {description: 'Piedra del fuego', },
        {description: 'Piedra del agua', completed:true},
        {description: 'Piedra de la tierra', },
    ]
  })

  return NextResponse.json({
    message:'datos sembrados'
  })
}