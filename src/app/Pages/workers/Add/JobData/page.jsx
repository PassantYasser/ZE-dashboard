"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import MapDialog from './MapDialog';
import TimeRangePicker from './TimeRangePicker';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAreasThunk } from '@/redux/slice/Services/ServicesSlice';

function JobDataPage({handlePrev , getDesignations ,formData ,setFormData,handleChange ,handleSubmit  }) {
  const {t}= useTranslation();
  
    //api
    const dispatch = useDispatch()
    const {getAreas } = useSelector(state=>state.services)
    useEffect(() => {
      dispatch(getAllAreasThunk()); 
    }, [dispatch])


    //job
    const [open1, setOpen1] = useState(false);
    const [selected1, setSelected1] = useState("");
    const [searchValue1, setSearchValue1] = useState("");
    const dropdownRef1 = useRef(null);
    const optionJob=getDesignations || []
  
    // workplace 
    const [open2, setOpen2] = useState(false);
    const [selected2, setSelected2] = useState("");
    const [searchValue2, setSearchValue2] = useState("");
    const dropdownRef2 = useRef(null);
    const optionWorkplace =getAreas?.areas || [];
  

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) setOpen2(false);

      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  

    //map
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState("");
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLocationSelect = async (lat, lng) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        const data = await response.json();
        const formattedAddress = data.display_name || "Unknown address";
        setAddress(formattedAddress);
        setOpen(false);
      } catch (error) {
        console.error("Error fetching address:", error);
        setAddress(`Latitude: ${lat}, Longitude: ${lng}`); // fallback لو حصل خطأ
      }
    };

//

  //Front national ID card photo
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.type === "application/pdf") {
        setFile(selectedFile);
  
        let uploaded = 0;
        const interval = setInterval(() => {
          uploaded += 20;
          if (uploaded >= 100) {
            uploaded = 100;
            clearInterval(interval);
          }
          setProgress(uploaded);
        }, 500);
      }
    };
  
    const handleRemove = () => {
      setFile(null);
      setProgress(0);
    };
    
    //Front national ID card photo
    const [taxFile , setTaxFile]= useState(null);
    const[taxProgress , setTaxProgress]= useState(0);
    
    const handleTaxesFileChange = (e)=>{
      const selectTaxFile = e.target.files[0];
      if(selectTaxFile && selectTaxFile.type === "application/pdf" ){
        setTaxFile(selectTaxFile);
        let uploaded=0;
        const interval = setInterval(() => {
          uploaded += 20;
          if (uploaded >= 100) {
            uploaded = 100;
            clearInterval(interval);
          }
          setTaxProgress(uploaded);
        }, 500);
      }
    }
    const handleTaxRemove = () => {
      setTaxFile(null);
      setTaxProgress(0);
    };

    // Working hours
    const [workingHours, setWorkingHours] = useState({
      start: '09:00',
      end: '17:00',
    });


  return (
    <>
    <form className='grid grid-cols-2 gap-6 mb-6'>

      {/* job */}
      <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("job")}
          </label>
    
          <div className="relative w-full" ref={dropdownRef1}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen1(!open1)}
            >
              {/* Input */}
              <input
                type="text"
                placeholder={t("Choose the job")}
                value={searchValue1 || selected1}
                onChange={(e) => {
                  setSearchValue1(e.target.value);
                  setOpen1(true);
                  setSelected1(null);
                }}
                className="h-15 p-3 w-full text-[#364152] focus:outline-none"
              />
    
              {/* 🔽 Dropdown arrow */}
              <span className="absolute left-3 cursor-pointer">
                {open1 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="up" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="down" />
                )}
              </span>
            </div>
    
            {/* 🔽 Dropdown options */}
            {open1 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionJob
                  .filter((option) =>
                    option?.name
                      ?.toLowerCase()
                      .includes(searchValue1.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={option.id}
                      onClick={() => {
                        setSelected1(option?.name);
                        setSearchValue1("");
                        setOpen1(false);
                      }}
                      className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      {option.name}
                    </li>
                  ))}
              </ul>
            )}
          </div>
      </div>
    
      {/* Employee address  */}
      <div className="flex flex-col">
        <label className="text-[#364152] text-base font-normal mb-3">
          {t("Employee address")}
        </label>
      <textarea
          readOnly
          placeholder={t("Enter the address")}
          value={address} 
          onClick={handleClickOpen}
          className="h-15 p-3 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
        />
      </div>

      {/* workplace */}
      <div className="flex flex-col">
        <label className="text-[#364152] text-base font-normal mb-3">
          {t("Workplaces")}
        </label>

        <div className="relative w-full" ref={dropdownRef2}>
          <div
            onClick={() => setOpen2(!open2)}
            className="p-2 min-h-15 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center flex-wrap gap-2"
          >
            {/* Selected tags / placeholder */}
            {selected2.length > 0 ? (
              selected2.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1.5 h-10 w-fit bg-[#EDE7FD] border border-[#E2E2E2] text-[#505050] text-sm px-3 py-1 rounded-full"
                >
                  {item?.city}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected2(selected2.filter((_, i) => i !== index));
                    }}
                    className="text-[#364152]"
                  >
                    <img src="/images/icons/x.svg" alt="" className="w-3 h-3" />
                  </button>
                </span>
              ))
            ) : (
              <span className="text-[#9A9A9A]">{t("Identify the workplaces")}</span>
            )}

            {/* Arrow icon on the right */}
            <span className="absolute left-3">
              {open2 ? (
                <img src="/images/icons/ArrowUp.svg" alt="" />
              ) : (
                <img src="/images/icons/ArrowDown.svg" alt="" />
              )}
            </span>
          </div>

          {/* Dropdown options */}
          {open2 && (
            <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
              {optionWorkplace.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (!selected2.includes(option)) {
                      setSelected2([...selected2, option]);
                    }
                    setOpen2(false);
                  }}
                  className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                >
                  {option.city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Working hours */}
      <div className='flex flex-col'>
        {/* <label className="text-[#364152] text-base font-normal">{t('Working hours')}</label> */}
        <TimeRangePicker
            value={workingHours}
            onChange={setWorkingHours}
            label={t('Working hours')}
            language="ar"
          />
      </div>

    
      

  


    </form>
    <div className='w-full flex flex-col gap-3 lg1:flex-row '>
        {/* Front national ID card photo */}
        <div className="flex flex-col w-full">
          <label className="text-[#364152] text-base font-normal mb-3">{t("Front national ID card photo")}</label>
          {!file ? (
            <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
              <img
                src="/images/icons/upload.svg"
                alt="upload"
                className="w-5 h-5 absolute left-3"
              />
              <span className="flex-1">
                {t("Upload a photo of the front of your national ID card")}
              </span>
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          ) : progress < 100? (
            // === Upload in progress UI ===
            <div className="border border-[#C8C8C8] rounded-[3px] p-3">
              <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                  <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                  <span className="text-sm text-[#364152] font-medium">
                    {file.name}
                  </span>
                </div>
                <button onClick={handleRemove} className="text-[#C69815]">
                  <img src="/images/icons/cancel-circle.svg" alt="" />
                </button>
              
              </div>

              <div className="flex items-center justify-between mt-2 text-xs text-[#364152] p-3">
                <p className='flex gap-2'>
                  <span className='text-[#9D919F] text-sm font-normal '> • 60 ك ب من 120 م ب</span>
                  <img src="/images/icons/loading.svg" alt="" />
                  <span>{t("Loading...")}</span>
                </p>
              </div>

              <div className="w-full bg-gray-200 h-1 mt-1 rounded">
                <div
                  className="bg-[#C69815] h-1 rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

          ) : (

            // Final UI after upload complete
            <div className="border border-[#C8C8C8]   h-15 rounded-[3px] p-3 flex items-center justify-between">
                {/* file name + icon */}
              <div className="flex items-center gap-2">
                <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                <span className="text-sm text-[#656565] font-medium">{file.name}</span>
              </div>
              {/* delete button */}
              <button onClick={handleRemove}>
                <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[#C69815]" />
              </button>

            
            </div>
          )}
        </div>

        {/* Back national ID card photo */}
        <div className="flex flex-col w-full">
          <label className="text-[#364152] text-base font-normal mb-3">{t("Back national ID card photo")}</label>

          {!taxFile ? (
            <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
              <img
                src="/images/icons/upload.svg"
                alt="upload"
                className="w-5 h-5 absolute left-3"
              />
              <span className="flex-1">
                {t("Upload a photo of the back of your national ID card")}
              </span>
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleTaxesFileChange}
              />
            </label>
          ) : taxProgress < 100? (
            // === Upload in progress UI ===
            <div className="border border-[#C8C8C8] rounded-[3px] p-3">
              <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                  <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                  <span className="text-sm text-[#364152] font-medium">
                    {taxFile.name}
                  </span>
                </div>
                <button onClick={handleTaxRemove} className="text-[#C69815]">
                  <img src="/images/icons/cancel-circle.svg" alt="" />
                </button>
              
              </div>

              <div className="flex items-center justify-between mt-2 text-xs text-[#364152] p-3">
                <p className='flex gap-2'>
                  <span className='text-[#9D919F] text-sm font-normal '> • 60 ك ب من 120 م ب</span>
                  <img src="/images/icons/loading.svg" alt="" />
                  <span>{t("Loading...")}</span>
                </p>
                {/* <span>{progress}%</span> */}
              </div>

              <div className="w-full bg-gray-200 h-1 mt-1 rounded">
                <div
                  className="bg-[#C69815] h-1 rounded"
                  style={{ width: `${taxProgress}%` }}
                ></div>
              </div>
            </div>

          ) : (
            // Final UI after upload complete
            <div className="border border-[#C8C8C8]  h-15 rounded-[3px] p-3 flex items-center justify-between">
                {/* file name + icon */}
              <div className="flex items-center gap-2 ">
                <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                <span className="text-sm text-[#656565] font-medium">{taxFile.name}</span>
              </div>
              {/* delete button */}
              <button onClick={handleTaxRemove}>
                <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[#C69815]" />
              </button>
            </div>
          )}
        </div>
    </div>
    
      <div className="my-12 flex gap-3">
      <button
        onClick={handlePrev} 
        className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[#C69815] text-[#C69815] text-base font-medium cursor-pointer"
      >
        {t('the previous')}
      </button>
      <button
        className="border w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[#C69815] text-[#fff] text-base font-medium cursor-pointer"
      >
          {t('save')}
      </button>
  

      </div>
  

    {/* 🗺️ Map Dialog Component */}
      <MapDialog
        open={open}
        handleClose={handleClose}
        onSelectLocation={handleLocationSelect} 
      />
    </>
  )
}

export default JobDataPage