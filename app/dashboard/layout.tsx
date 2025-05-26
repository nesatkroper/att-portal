import type React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/get-current-user";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header user={user} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4'>
          <div className='animate-fade-in'>{children}</div>
        </main>
      </div>
    </div>
  );
}
