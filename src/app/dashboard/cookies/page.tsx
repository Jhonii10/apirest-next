import { TabBar } from "@/components";
import { cookies } from "next/headers";



export const metadata = {
 title: 'Cookies page',
 description: 'Cookies page',
};

export default function CookiesPage() {

    const cookieStore = cookies()
    const cookieTab = cookieStore.get('selected')?.value ?? '1';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
        <span className="text-3xl font-medium">Tabs</span>
        <TabBar currentTab={Number(cookieTab)}/>
        </div>
    </div>
  );
}