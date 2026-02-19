'use client';
import React from 'react'
import HomeAndCarServiceCardPages from './HomeAndCarServiceCard/pages'
import StreetAssistantServiceCardPage from './StreetAssistantServiceCard/page';
import NoModuleAvailable from '@/app/Components/DaialogsOfNavbar/NoModuleAvailable';

function CardsPage({ current_module_key }) {
  let content;

  if (current_module_key === 'car_services' ||current_module_key === 'home_services' ) {
    content = <HomeAndCarServiceCardPages />;
  } else if (current_module_key === 'street_assistant') {
    content = <StreetAssistantServiceCardPage />;
  } else {
    content = <NoModuleAvailable/>
  }

  return (
    <>
      {content}
    </>
  )
}

export default CardsPage