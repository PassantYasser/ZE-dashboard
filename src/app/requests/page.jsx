import React from 'react'
import MainLayout from '../Components/MainLayout/MainLayout'
import NavRequest from './NavRequest'
import TableRequest from './TableRequest'
import Pagination from './Pagination'

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