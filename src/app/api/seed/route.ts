import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {

  await prisma.todo.deleteMany(); // detete * from todo
  await prisma.user.deleteMany();  

  const user = await prisma.user.create({
    data: {
      email:'test1@gmail.com',
      password:bcrypt.hashSync('123456'),
      roles:['admin','client','super-user'],
      todos:{
        create: [
          {description: 'Piedra del alma', completed:true},
          {description: 'Piedra del fuego', },
          {description: 'Piedra del agua', completed:true},
          {description: 'Piedra de la tierra', },
      ]
      }
    }
  })

  return NextResponse.json({
    message:'datos sembrados'
  })
}