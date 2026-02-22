'use client'
import React, { useEffect } from 'react'
import NavRequest from './NavRequest'
import TableRequest from './TableRequest'
import Pagination from './Pagination'
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getBookingsThunk } from '@/redux/slice/Requests/RequestsSlice'

function RequestsPage() {
  const dispatch = useDispatch()
  const {bookings , loading , error } =useSelector((state)=>state.requests)
  useEffect(()=>{
    dispatch(getBookingsThunk())
  },[dispatch])
  console.log('bookings',bookings?.bookings?.data);
  return (
    <MainLayout>

      <NavRequest/>

      <TableRequest bookings={bookings}/>

      <Pagination/>

    </MainLayout>
  )
}

export default RequestsPage