'use client'
import React from 'react'
import Home_Car_Module from './Home_Car_Module/Service/page';
import StreetAssistant_Module from './StreetAssistant_Module/Service/page';
import NoModuleAvailable from '@/app/Components/DaialogsOfNavbar/NoModuleAvailable';


function Servicespage() {
  const userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null
  const current_module_key = userData?.current_module_key

    let content;

  if (current_module_key === 'car_services' || current_module_key === 'home_services' ) {
    content = <Home_Car_Module />;
  } else if (current_module_key === 'street_assistant') {
    content = <StreetAssistant_Module />;
  } else {
    content = <NoModuleAvailable/>
  }
  return (
    <>
      {content}
    </>
  )
}

export default Servicespage
