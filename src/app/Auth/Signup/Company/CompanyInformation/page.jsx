"use client";
import React, { useState } from 'react'
import FilesUploadOnePage from './FilesUploadOne/page';
import FilesUploadTwoPage from './FilesUploadTwo/page';
import ConfirmationDonePage from './ConfirmationDone/page';
import FirstCompanyInformationPage from './FirstCompanyInformation/page';
import { useDispatch, useSelector } from 'react-redux';

function CompanyInformationPage() {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth)
  const [formData , setFormData] = useState({
    designation_id:'',
    role:'',
    yearsofexperience:'',
    address:'',
    country:'',
    state:'',
    city:'',
    latitude:'',
    longitude:'',
    id_front:'',
    id_back:'',
    tax_number:'',
    company_name:'',
    workers_count:'',
    commercial_register:'',
    tax_card:'',
    country_code:'',
    nationality:'',
    gender:'',
  });
  
  const [subStep, setSubStep] = useState(1);

  const nextSub = () => {
    if (subStep < 4) setSubStep((prev) => prev + 1);
  };

  const prevSub = () => {
    if (subStep > 1) setSubStep((prev) => prev - 1);
  };

  const renderSubStep = () => {
    switch (subStep) {
      case 1:
        return <FirstCompanyInformationPage nextSub={nextSub}  />
      case 2:
        return <FilesUploadOnePage nextSub={nextSub} prevSub={prevSub}/>;
      case 3:
        return <FilesUploadTwoPage nextSub={nextSub} prevSub={prevSub}/>;
      case 4 :
        return <ConfirmationDonePage nextSub={nextSub} prevSub={prevSub}/>
      default:
        return null;
    }
  };
  return (
    <>
    <div>
      {/* عرض الـ sub-step */}
      {renderSubStep()}
    </div>


    </>
  )
}

export default CompanyInformationPage