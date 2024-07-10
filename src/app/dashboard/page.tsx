import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export const metadata = {
 title: 'Dashboard',
 description: 'Dashboard',
};
export default async function DashboardPage() {

  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/api/auth/signin')
  }
  const {name, image , email }:any = session?.user;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <WidgetItem title="Usuario conectado ">
            <div className="flex flex-col justify-center items-center gap-2">
            <h2 >{name}</h2>
            <Image
            src={image}
            alt="tailus logo"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-20 lg:h-20"
            width={320}
            height={320}
            /> 
            <p>{email}</p>
              

            </div>
        </WidgetItem>
    </div> 
  );
}