"use client";
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function MainLayout({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
  <div className="flex h-screen">
    <Sidebar  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}  />
    <div className="flex flex-1 flex-col">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className="lg1:pt-8 pt-10 px-6">{children}</main>
    </div>
  </div>  
  )
}

export default MainLayout