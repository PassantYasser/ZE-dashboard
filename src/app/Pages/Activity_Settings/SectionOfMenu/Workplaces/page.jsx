import React, { useEffect } from 'react'
import Header from './Header';
import HaveWorkplacesPage from './HaveWorkplaces/page';
import NoWorkplacesPage from './NoWorkplaces/page';
import { getWorkplacesThunk } from '@/redux/slice/Setting/SettingSlice';
import { useDispatch, useSelector } from 'react-redux';

function WorkplacesPage() {
    const data = true ;
    const dispatch = useDispatch()
    const {Workplaces , loading , error} = useSelector((state)=>state.setting)
    useEffect(()=>{
      dispatch(getWorkplacesThunk())
    },[dispatch])


  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      {
        data? (
          <HaveWorkplacesPage Workplaces={Workplaces}/>
        ):(
          <NoWorkplacesPage/>
        )
      }
    </div>

    </>
  )
}

export default WorkplacesPage