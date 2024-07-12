
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { SessionStrategy } from "next-auth"
import { Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInEmailPassword } from "@/auth/actions/actions";
import prisma from "@/lib/prisma";


export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo", type: "text", placeholder: "example@gmail.com" },
        password: { label: "Contraseña", type: "password", placeholder:"********" }
      },
      async authorize(credentials, req) {
        const user = await signInEmailPassword(credentials!.email, credentials!.password)
        console.log(user);
        
        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      }),
    // ...add more providers here
    
  
  ],
  
  session:{
    strategy: 'jwt' as SessionStrategy,
  },
 
  callbacks: {
    async signIn({ user, account, profile, email, credentials }:any){
      return true
    },

    async jwt({token, user, account, profile}:any){
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email ?? "",

        }
      })

      if(dbUser?.isActive === false){
          throw Error('Usuario no esta activo')
      }

      token.roles = dbUser?.roles ?? ['no-roles'];
      token.id = dbUser?.id ?? 'no-uuid';

      return token
    },

    async session({session, token, user}:any){
      if( session && session.user){
        session.user.roles = token.roles;
        session.user.id = token.id;

      }
      return session
    }
  }
}

const handler =  NextAuth(authOptions);
export {handler as GET , handler as POST}