import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function MainLayout({children}) {
  return (
   <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>  )
}

export default MainLayout