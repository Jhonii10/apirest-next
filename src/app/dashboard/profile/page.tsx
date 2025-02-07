'use client'
import { useSession } from "next-auth/react";

export default function ProfilePage() {

    const {data: session} = useSession();

  return (
    <div>
        <h1>Profile Page</h1>
        <hr/>
        <div className="flex flex-col">
            <span>{session?.user?.name ?? 'Not name'}</span>
            <span>{session?.user?.image ?? 'Not image'}</span>
            <span>{session?.user?.email ?? 'Not email'}</span>
            <span>{session?.user?.id ?? 'Not uuid'}</span>
            <span>{session?.user?.roles ?? 'Not rol'}</span>
        </div>
    </div>
  );
}