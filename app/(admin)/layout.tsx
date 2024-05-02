'use client'
import React, { useState } from 'react'
import "@/app/globals.css"
import SidebarComponent from "@/components/sidebar/SidebarComponent"
import { MenuIcon } from "@/components/icons/FontAwsome";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(true);
  console.log(isShowSideBar)
  return (
    <body className="flex none-scroll-bar">
      <MenuIcon
        onClick={() => setIsShowSideBar(!isShowSideBar)}
        classname='h-8 z-20 w-8 m-4 fixed bottom-0 cursor-pointer lg:hidden'
      />
      <aside className={`sticky left-0 z-10 h-screen ${isShowSideBar && "hidden"} lg:block`}>
        <SidebarComponent />
      </aside>
      <main className='flex-1'>
        {children}
      </main>
    </body>
  )
}

