import React from 'react'

import NavRequest from './NavRequest'
import TableRequest from './TableRequest'
import Pagination from './Pagination'
import MainLayout from '@/app/Components/MainLayout/MainLayout'

function RequestsPage() {
  return (
    <MainLayout>

      <NavRequest/>

      <TableRequest/>

      <Pagination/>

    </MainLayout>
  )
}

export default RequestsPage