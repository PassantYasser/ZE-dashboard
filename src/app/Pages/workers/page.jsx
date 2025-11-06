import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import Pagination from './Pagination'
import NavWorker from './NavWorker'
import TableWorkers from './TableWorkers'

function WorkersPage() {
  return (
    <MainLayout>
      <NavWorker/>
      <TableWorkers/>
      <Pagination/>
    </MainLayout>
  )
}

export default WorkersPage