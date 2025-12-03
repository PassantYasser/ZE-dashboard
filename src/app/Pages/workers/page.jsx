"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import NavWorker from './NavWorker'
import TableWorkers from './TableWorkers'
import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWorkersThunk } from '@/redux/slice/Workers/WorkersSlice'

function WorkersPage() {
  const FiltersPage = dynamic(() => import("./Filters/page"), { ssr: false });

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    //api
    const dispatch = useDispatch();
    const {workers , loading , error}=useSelector(state=>state.workers)

    useEffect(() => {
      dispatch(getAllWorkersThunk());
    }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;


  return (
    <MainLayout>
      <NavWorker handleClickOpen={handleClickOpen}/>
      <TableWorkers workers={workers} loading={loading}/>
      <Pagination/>

      <FiltersPage open={open} handleClose={handleClose} />
    </MainLayout>
  )
}

export default WorkersPage