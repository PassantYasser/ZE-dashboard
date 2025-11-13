"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import dayjs from 'dayjs';
import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllAreasThunk, getCategoriesThunk, getmodulesThunk } from "@/redux/slice/Services/ServicesSlice";
import { IMAGE_BASE_URL } from "../../../../../../config/imageUrl";


function BasicInformationPage({handleGoBack ,handleNext ,service}) {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const {getmodules ,getCategories , getAreas } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getmodulesThunk());
    dispatch(getCategoriesThunk());
    dispatch(getAllAreasThunk())
  }, [dispatch]);


  //upload images
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const MAX_IMAGES = 7;
  
  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > MAX_IMAGES) {
      alert(`${t("Maximum number of photos")} ${MAX_IMAGES}`);
      return;
    }
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...newImages]);
  };

  const handleDelete = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (service?.images && service.images.length > 0) {
      const existingImages = service.images.map(img => `${IMAGE_BASE_URL}${img.image_path}`);
      setImages(existingImages);
    }
  }, [service]);

  

  // MainClassification 1
  const [open1, setOpen1] = useState(false);
  const [selected1, setSelected1] = useState("");
  const [searchValue1, setSearchValue1] = useState("");
  const dropdownRef1 = useRef(null);
  const optionMainClassification =getmodules || [];
  useEffect(() => {
    if (selected1?.id) {
      dispatch(getCategoriesThunk(selected1.id));
    }
  }, [selected1, dispatch]);

  // Subcategory 2
  const [open2, setOpen2] = useState(false);
  const [selected2, setSelected2] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const dropdownRef2 = useRef(null);
  const optionSubcategory =getCategories || [];;


  // SubService 3
  const [open3, setOpen3] = useState(false);
  const [selected3, setSelected3] = useState("");
  const [searchValue3, setSearchValue3] = useState("");
  const dropdownRef3 = useRef(null);
  const optionSubService =  getCategories?.flatMap(cat => cat.children?.map(child => child.title) || []) || [];


  // ServiceActivityLocation 4
  const [open4, setOpen4] = useState(false);
  const [selected4, setSelected4] = useState("");
  const dropdownRef4 = useRef(null);
  const optionServiceActivityLocation = getAreas?.areas?.map(area => area.city) || [];

  // Time 5
  const [open5, setOpen5] = useState(false);
  const [tempTime, setTempTime] = useState(null);
  const [confirmedTime, setConfirmedTime] = useState(null); 

  const formattedTime = confirmedTime ? dayjs(confirmedTime).format("HH:mm") : "";

  
  const handleOkClick = () => {
    setConfirmedTime(tempTime);
    setOpen5(false); 
  };
  // close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) setOpen2(false);
      if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) setOpen3(false);
      if (dropdownRef4.current && !dropdownRef4.current.contains(event.target)) setOpen4(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [text, setText] = useState("");


  return (
    <>
    {/* upload image */}
    <div
      onClick={() => fileInputRef.current.click()}
      className="w-full p-8 border border-dashed border-[#9AA4B2] cursor-pointer"
    >
      {/* hidden input */}
      <input
        type="file"
        ref={fileInputRef}
        multiple
        accept=".svg,.png,.jpg,.jpeg"
        className="hidden"
        onChange={handleFilesChange}
      />

      {images.length === 0 ? (
        <>
          {/* icon */}
          <div className="flex items-center justify-center">
            <div className="bg-[#E3E8EF] w-14 h-14 rounded-full flex items-center justify-center">
              <div className="bg-[#EEF2F6] w-12 h-12 rounded-full flex items-center justify-center">
                <img src="/images/icons/upload images.svg" alt="upload" />
              </div>
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col items-center mt-5">
            <p className="text-sm text-center">
              <span className="text-[#364152] font-semibold">{t("Click to upload")} </span>
              <span className="text-[#9AA4B2] font-medium">{t("Or drag and drop files")}</span>
            </p>
            <p className="text-[#494C4D] text-sm font-normal m-3">
              ({t("Maximum")} 15MB) SVG, PNG, JPG
            </p>
            <p className="text-sm font-normal">
              <span className="text-[#9AA4B2]">{t("Maximum number of photos")} :</span>
              <span className="text-[#202939]"> {MAX_IMAGES} {t("Photos")}</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-4 lg1:grid-cols-7 gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative w-32.5 h-27.5 border border-[#C8C8C8] rounded-[6px] overflow-hidden flex  items-center justify-center"
              >
                {/* image */}
                <img
                  src={images[idx]}
                  alt={`uploaded-${idx}`}
                  className="w-full h-full object-cover"
                />

                {/* delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // يمنع فتح input
                    handleDelete(idx);
                  }}
                  className="absolute top-3.5 left-3.5 bg-[#FEE4E2] border border-[#F04438] rounded-[3px] p-1"
                >
                  <img src="/images/icons/delete Red.svg" alt="" />
                </button>
              </div>
            ))}

            {/* زرار الإضافة */}
            {images.length < 7 && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // يمنع تكرار الفتح
                  fileInputRef.current.click();
                }}
                className="w-28 h-28 py-6 px-7.5 border border-[#CDD5DF] bg-[#F8FAFC] rounded-[6px] flex items-center justify-center"
              >
                <img src="/images/icons/AddGrayIcon.svg" alt="" />
              </button>
            )}
          </div>

          {/* الرسالة تحت الصور */}
          {images.length >= 7 && (
            <div className="flex gap-2 mt-6 bg-[#FFFCF5] border border-[#FEC84B] rounded-2xl px-3 py-1.5">
              <img src="/images/icons/i.svg" alt="" />
              <p>
                {t(
                  "You have reached the maximum number of image uploads (7 images). If you want to upload a new image, please delete an existing image first."
                )}
              </p>
            </div>
          )}
        </>
      )}
    </div>

    <form className="mt-8">
      <section className="grid lg768:grid-cols-2 lg1:grid-cols-2 gap-6">
        
        {/* Main classification 1 */}
        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Main classification")}
          </label>

          <div className="relative w-full" ref={dropdownRef1}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen1(!open1)}
            >
              {/* Input */}
              <input
                type="text"
                placeholder={t("Select the main category")}
                value={searchValue1 || selected1?.name || ""}
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
                {optionMainClassification
                  .filter((option) =>
                    option.name
                      ?.toLowerCase()
                      .includes(searchValue1.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={option.id || index}
                      onClick={() => {
                        setSelected1(option);
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
    
        {/* Subcategory 2 */}
        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Subcategory")}
          </label>

          <div className="relative w-full" ref={dropdownRef2}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen2(!open2)}
            >
              {/* 🔍 Input for search + typing */}
              <input
                type="text"
                placeholder={t("Select a subcategory")}
                value={searchValue2 || selected2?.title || selected2 || ""}
                onChange={(e) => {
                  setSearchValue2(e.target.value);
                  setOpen2(true);
                  setSelected2(null);
                }}
                className="h-15 p-3  w-full text-[#364152] focus:outline-none"
              />

              {/* 🔽 Dropdown arrow */}
              <span className="absolute left-3 pointer-events-none">
                {open2 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="up" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="down" />
                )}
              </span>
            </div>

            {/* 🔽 Dropdown list */}
            {open2 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionSubcategory
                  .filter((option) =>
                    option.title
                      ?.toLowerCase()
                      .includes(searchValue2.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelected2(option);
                        setSearchValue2("");
                        setOpen2(false);
                      }}
                      className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      {option.title}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
    
        {/* Sub-service name 3 */}
        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Sub-service name")}
          </label>

          <div className="relative w-full" ref={dropdownRef3}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen3(!open3)}
            >
              <input
                type="text"
                placeholder={t("Select the sub-service")}
                value={searchValue3 || selected3?.title || selected3 || ""}
                onChange={(e) => {
                  setSearchValue3(e.target.value);
                  setOpen3(true);
                  setSelected3("");
                }}
                className="h-15 p-3  w-full text-[#364152] focus:outline-none"
              />

              {/* 🔽 Dropdown arrow */}
              <span className="absolute left-3 pointer-events-none">
                {open3 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="up" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="down" />
                )}
              </span>
            </div>

            {/* 🔽 Dropdown list */}
            {open3 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionSubService
                  .filter((option) =>
                    (option?.title || option)
                      ?.toString()
                      .toLowerCase()
                      .includes(searchValue3.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelected3(option);
                        setSearchValue3("");
                        setOpen3(false);
                      }}
                      className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      {option?.title || option}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
    
        {/* Service Activity Location 4 */}
        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Service Activity Location")}
          </label>

          <div className="relative w-full" ref={dropdownRef4}>
            <div
              onClick={() => setOpen4(!open4)}
              className="p-2 min-h-15 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center flex-wrap gap-2"
            >
              {/* Selected tags / placeholder */}
              {selected4.length > 0 ? (
                selected4.map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 h-10 w-fit bg-[#EDE7FD] border border-[#E2E2E2] text-[#505050] text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected4(selected4.filter((_, i) => i !== index));
                      }}
                      className="text-[#364152]"
                    >
                      <img src="/images/icons/x.svg" alt="" className="w-3 h-3" />
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-[#9A9A9A]">{t("Select City")}</span>
              )}

              {/* Arrow icon on the right */}
              <span className="absolute left-3">
                {open4 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="" />
                )}
              </span>
            </div>

            {/* Dropdown options */}
            {open4 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionServiceActivityLocation.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      if (!selected4.includes(option)) {
                        setSelected4([...selected4, option]);
                      }
                      setOpen4(false);
                    }}
                    className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Average length of service 5 */}
        <div className="flex flex-col mb-6">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Average length of service")}
          </label>

          {/* Clickable box */}
          <div
            onClick={() => setOpen5(true)}
            className="h-15 p-3 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center justify-between"
          >
            <span className={formattedTime ? "text-[#364152]" : "text-[#9A9A9A]"}>
              {formattedTime || t("Average length of service")}
            </span>
            <span className="ml-2">
              <img src="/images/icons/timepicker.svg" alt="" />
            </span>
          </div>

          {/* Calendar Popup (Dialog) */}
          <Dialog open={open5} onClose={() => setOpen5(false)}>
            <div className="bg-[#eef2f6] p-4 w-[320px]">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MultiSectionDigitalClock
                  value={tempTime}
                  onChange={(newValue) => setTempTime(newValue)}
                  ampm={false}
                  timeSteps={{ minutes: 15 }}
                  sx={{
                    width: "100%",
                    "& .MuiMultiSectionDigitalClock-root": { width: "100%" },
                    "& .MuiMultiSectionDigitalClockSection-root": { flex: 1 },
                  }}
                />
              </LocalizationProvider>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleOkClick}
                  className="bg-[var(--color-primary)] text-white px-4 py-1 rounded-[3px] cursor-pointer"
                >
                  {t("Add")}
                </button>
              </div>
            </div>
          </Dialog>
        </div>


      </section>

      {/* Service Description */}
      <div className="flex flex-col">
        <label className="text-[#364152] text-base font-normal mb-3">
          {t("Service Description")}
        </label>
        <div className="relative w-full">
          <textarea
            value={service?.long_description}
            onChange={(e) => setText(e.target.value)}
            placeholder={t("Write a description of the service.")}
            maxLength={5000}
            className="w-full h-41.5 border border-[#C8C8C8] rounded-[3px] p-3  text-[#364152] placeholder-[#9A9A9A] resize-none focus:outline-none focus:ring-1 focus:ring-[#C69815]"
          />
          {/* counter inside the box */}
          <span className="absolute bottom-3 left-3 text-[#9A9A9A] text-sm">
            5000/{text.length}
          </span>
        </div>
      </div>
    </form>






    {/* btns */}
    <div className="my-12 flex gap-3">
      <button onClick={handleGoBack} 
      className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[#C69815] text-[#C69815] text-base font-medium cursor-pointer">{t('cancel')}</button>
      <button onClick={handleNext} 
        className="border w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[#C69815] text-[#fff] text-base font-medium cursor-pointer">{t('the next')}</button>
    </div>
        
    </>
  );
}

export default BasicInformationPage;
