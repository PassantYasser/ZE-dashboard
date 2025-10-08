"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";

function FirstCompanyInformationPage({nextSub , formData , setFormData,handleChange,handleSubmit}) {
  const { t } = useTranslation();
  // const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);
  const options = [
    t("Design"),
    t("Development"),
    t("Marketing"),
    t("Consulting"),
  ];
  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenn(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //mapp********************************************************
  const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
  const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
  const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
  let L;
  if (typeof window !== "undefined") {
    L = require("leaflet");
  }

  const [mapPosition, setMapPosition] = useState([
    formData?.latitude ? parseFloat(formData.latitude) : 24.7136,
    formData?.longitude ? parseFloat(formData.longitude) : 46.6753,
  ]);
  
  // Fix default marker icon issue in Leaflet
  const markerIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });
  
  // ✅ مكون يتحكم في الضغط على الخريطة
  function LocationPicker({ position, setPosition }) {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return position ? <Marker position={position} icon={markerIcon} /> : null;
  } 
  
  // ✅ دالة جلب العنوان من الإحداثيات
  const fetchAddressFromCoords = async (latitude, longitude) => {
      const apiKey = 'AIzaSyBSf-rM8flnZXMLaXaHpVSVMQBs7Rq8M84';
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();
        if (data.status === "OK") {
          const addressComponents = data.results[0].address_components;
          const address = data.results[0].formatted_address;
          const getComponent = (type) =>
            addressComponents.find((comp) => comp.types.includes(type))?.long_name || "";
          const country = getComponent("country");
          const state = getComponent("administrative_area_level_1");
          const city = getComponent("administrative_area_level_2");
          setFormData((prev) => ({
            ...prev,
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            address,
            country,
            state,
            city,
          }));
        } else {
          console.error("Geocoding error:", data.status);
        }
      } catch (error) {
        console.error("Error fetching address:", error);
      }
  };
  
  // ✅ تحديد موقع المستخدم عند فتح الخريطة
  useEffect(() => {
      if (!formData?.latitude && !formData?.longitude && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setMapPosition([position.coords.latitude, position.coords.longitude]);
          },
          () => {}, // ignore error
          { enableHighAccuracy: true }
        );
      }
    }, [formData?.latitude, formData?.longitude]);
  
  // ✅ عند تأكيد الموقع
  const handleConfirmLocation = () => {
    setOpen(false);
    fetchAddressFromCoords(mapPosition[0], mapPosition[1]);
  };

    console.log(formData);
  

  return (
    <>
      <div className="mt-14 lg1:mt-8">
        <form className="grid grid-cols-2 gap-6 lg1:grid-cols-1 lg1:gap-0">      

          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Company Name")}
            </label>
            <input
              type="text"
              name="company_name"
              value={formData?.company_name}
              onChange={handleChange}
              className=" h-15 p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter company name')}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Number of employees")}
            </label>
            <input
              type="text"
              name="workers_count"
              value={formData?.workers_count}
              onChange={handleChange}
              className="h-15 p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter the number of employees')}
            />
          </div>


          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Select service activity")}
            </label>
            <div className="relative w-full mb-6" ref={dropdownRef}>
            <div
              onClick={() => setOpenn(!openn)}
              className="h-15 p-3 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center justify-between"
            >
              <span className={selected ? "text-[#364152]" : "text-[#9A9A9A]"}>
                {selected || t("Select service activity")}
              </span>
            
              <span className="ml-2">
                {openn ? (
                  <img src="/images/icons/ArrowUp.svg" alt="" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="" />
                )}
              </span>
            </div>
            
              {openn && (
                <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelected(option);
                        setOpenn(false);
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

          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Years of experience")}
            </label>
            <input
              type="text"
              name="yearsofexperience"
              value={formData?.yearsofexperience}
              onChange={handleChange}
              className="h-15 p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter the number of years of experience')} 
            />
          </div>

        <div className="flex flex-col col-span-2 lg1:col-span-1 ">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Company address")}
            </label>
            
            {/* <input
              type="text"
              // value={FormData?.address} 
              value={formData?.address || ""}
              readOnly
              onClick={handleClickOpen}
              className="h-15  p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter company address')}
            /> */}
            <textarea
              value={formData?.address || ""}
              readOnly
              onClick={handleClickOpen}
              className="h-15  p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              >

            </textarea>
          
        </div>
      

        </form>

        <button         
          className="px-4 py-2.5 bg-[#C69815] text-white text-base font-medium  w-full mt-8 mb-10 h-15 rounded-[3px]"
          onClick={nextSub}
        >
          {t('the next')}
        </button>

        <p className='flex justify-center gap-1.5'>
        <span className='text-[#697586] text-lg font-normal'>{t('Dont have an account?')}</span>
        <Link href='/Auth/Signup' className="text-[#9E7A11] text-lg font-medium">
          {t("Create an account")}
        </Link>
      </p>

      </div>
      

    
      <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        className: "ServicePage-dialog",
      }}
      >
        <div style={{ padding: 20 }}>
          <h3 className="mb-4 text-lg font-semibold text-right">اختر موقعك على الخريطة</h3>
          <div style={{ height: 400 }}>
            <MapContainer
              center={mapPosition}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <LocationPicker position={mapPosition} setPosition={setMapPosition} />
            </MapContainer>
          </div>

          <div className="flex justify-end mt-4 gap-2">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              إلغاء
            </button>
            <button
              onClick={handleConfirmLocation}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              تأكيد الموقع
            </button>
          </div>
        </div>
      </Dialog>
    </> 
  );
}

export default FirstCompanyInformationPage;
