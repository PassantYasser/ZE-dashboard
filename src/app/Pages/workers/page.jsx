"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useState } from 'react'
import Pagination from './Pagination'
import NavWorker from './NavWorker'
import TableWorkers from './TableWorkers'
import dynamic from 'next/dynamic'

function WorkersPage() {
  const FiltersPage = dynamic(() => import("./Filters/page"), { ssr: false });

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <MainLayout>
      <NavWorker handleClickOpen={handleClickOpen}/>
      <TableWorkers/>
      <Pagination/>

      <FiltersPage open={open} handleClose={handleClose} />
    </MainLayout>
  )
}

export default WorkersPage