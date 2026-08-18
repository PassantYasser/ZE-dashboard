'use client'
import { Dialog } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getPermissionShowThunk } from '@/redux/slice/Setting/SettingSlice';

function RoleData({open , setOpen, roleId}) {
  const {t} = useTranslation()

  const [openGroupId, setOpenGroupId] = useState(null);
  const inputClassName = "w-5 h-5 appearance-none border border-gray-300 rounded-md bg-white cursor-pointer relative checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)] after:absolute after:hidden checked:after:block checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2";
  const [checked, setChecked] = useState(false);

  console.log('roleId' , roleId);

  //API
  const dispatch = useDispatch()
  const {getPermissionShow} = useSelector((state)=>state.setting)

  const selectedPermissionsCount =
    getPermissionShow?.role?.selected_permissions_count ??
    getPermissionShow?.role?.groups?.reduce((total, group) => {
      if (typeof group?.selected_count === "number") {
        return total + group.selected_count;
      }
      const countInGroup =
        group?.permissions?.filter((p) => p?.selected || p?.checked)?.length || 0;
      return total + countInGroup;
    }, 0) ??
    0;

  useEffect(()=>{
    if(roleId){
      dispatch(getPermissionShowThunk(roleId))
    }
    
  },[dispatch , roleId])

  console.log('getPermissionShow' , getPermissionShow);
  

  return (
    <>

    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        className: "ServiceDeletePage-dialog",
      }}
    >
      <div className='pt-6 px-6 flex justify-end'>
        <button 
          onClick={()=>setOpen(false)} 
          className='border border-[rgba(102,107,109,0.20)] w-12 h-12  rounded-[58.182px] flex justify-center items-center'
        >
          <img src="/images/icons/xx.svg" alt="" />
        </button>
      </div>
      
          <div className='flex flex-col gap-1 px-6  '>
          <h1 className='text-[#364152] text-xl font-medium'> {getPermissionShow?.role?.name}</h1>
          <p className='text-[#697586] text-sm font-normal'>{getPermissionShow?.role?.description}</p>
          <motion.p
              className='w-fit px-3 border border-primary bg-[#F9F5E8] rounded-full'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span className='text-primary text-xs font-normal'> {selectedPermissionsCount} {t('from')} {getPermissionShow?.role?.permissions_count} {t('Specific validity')}</span>
          </motion.p>
          </div>

          <div className='border border-[#CDD5DF] my-4 '></div>

        
          {getPermissionShow?.role?.groups?.map((group, index) => {
            const groupId = group?.id ?? group?.group_id ?? group?.group_name ?? index;
            const isOpen = openGroupId === groupId;

            return (
              <div key={groupId} className="flex flex-col px-6">

                {/* Group Header */}
                <div
                  onClick={() =>
                    setOpenGroupId((prev) => (prev === groupId ? null : groupId))
                  }
                  className={`border border-[#CDD5DF] bg-[#F8FAFC] rounded-3px p-3 flex justify-between cursor-pointer ${
                    isOpen ? "rounded-b-none" : "mb-4"
                  }`}
                >
                  <div className="flex gap-2">

                    <div className="w-7 h-7 rounded-full border border-primary flex items-center justify-center">
                      <div className="w-5.5 h-5.5 rounded-full bg-primary flex items-center justify-center">
                        <img
                          src="/images/icons/Terms and Policies_White.svg"
                          alt=""
                          className="w-4 h-4"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-[#364152] text-sm font-medium">
                        {group?.group_name}
                      </p>

                      <p className="text-[#4B5565] text-xs font-normal">
                        {group?.selected_count} من {group?.total_count} محدد
                      </p>
                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenGroupId((prev) => (prev === groupId ? null : groupId));
                    }}
                    className="cursor-pointer"
                  >
                    <motion.img
                      src="/images/icons/ArrowDown.svg"
                      alt="arrow"
                      className="w-5 h-5"
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  </button>
                </div>

                {/* Permissions */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden mb-10"
                    >
                      <div className="p-4 bg-white border border-t-0 border-[#CDD5DF]">

                        {group?.permissions?.map((permission, pIndex) => {
                          const isChecked = permission?.selected || permission?.checked;
                          return (
                            <motion.div
                              key={permission?.id || pIndex}
                              animate={{
                                borderColor: isChecked
                                  ? "var(--color-primary)"
                                  : "#CDD5DF",

                                backgroundColor: isChecked
                                  ? "#F9F5E8"
                                  : "#FFFFFF",

                                scale: isChecked ? 1.01 : 1,
                              }}
                              transition={{
                                duration: 0.25,
                                ease: "easeOut",
                              }}
                              className="p-2 border rounded-3px mb-2"
                            >
                              <div className="py-2 px-3 flex gap-3">

                                <div className="flex items-center">
                                  <input
                                    type="checkbox"
                                    className={inputClassName}
                                    checked={!!isChecked}
                                    onChange={(e) => {
                                      // handle permission change
                                    }}
                                  />
                                </div>

                                <div>
                                  <p className="text-[#364152] text-sm font-medium">
                                    {permission?.name}
                                  </p>

                                  <p className="text-[#4B5565] text-xs font-normal">
                                    {permission?.description}
                                  </p>
                                </div>

                              </div>
                            </motion.div>
                          );
                        })}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

          
        
      

    
      {/*  */}
      <div className='px-6 mb-4'>
        <motion.button
          className="bg-primary h-15 w-full rounded-3px text-white text-base font-normal cursor-pointer"
          whileHover={{ y: -1  }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {t('Preserving privileges')} ({selectedPermissionsCount})
        </motion.button>
      </div>
      </Dialog>
      
    </>
  )
}

export default RoleData