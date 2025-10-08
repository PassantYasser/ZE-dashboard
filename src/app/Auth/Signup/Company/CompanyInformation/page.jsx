"use client";
import React, { useState } from 'react'
import FilesUploadOnePage from './FilesUploadOne/page';
import FilesUploadTwoPage from './FilesUploadTwo/page';
import ConfirmationDonePage from './ConfirmationDone/page';
import FirstCompanyInformationPage from './FirstCompanyInformation/page';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateInSignupThunk } from '@/redux/slice/Auth/AuthSlice';

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

  const handleChange = (e) => {
      const { name, type, files, value } = e.target;
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value,
      });
    };
  
  const handleSubmit = async () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    
    const result = await dispatch(UpdateInSignupThunk(data));

    if (UpdateInSignupThunk.fulfilled.match(result)) {
      console.log("Signup success ✅", result.payload);
    } else {
      console.error("Signup failed ❌", result.payload);
    }
  };

  console.log("typeof setFormDat.........:", typeof setFormData);

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
        return <FirstCompanyInformationPage 
                  nextSub={nextSub}
                  formData={formData}
                  setFormData={setFormData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
      case 2:
        return <FilesUploadOnePage 
                  nextSub={nextSub} 
                  prevSub={prevSub}
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />;
      case 3:
        return <FilesUploadTwoPage 
                  nextSub={nextSub} 
                  prevSub={prevSub}
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />;
      case 4 :
        return <ConfirmationDonePage 
                  nextSub={nextSub} 
                  prevSub={prevSub}
                />
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