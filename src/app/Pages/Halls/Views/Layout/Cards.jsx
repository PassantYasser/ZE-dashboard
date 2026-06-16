'use client'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { DeleteTableThunk, EditRestaurantTableThunk } from '@/redux/slice/Halls/HallsSlice';
import { toast } from 'react-toastify';

function Cards({ table, hallId, onRefresh, setSelectedTableId }) {
  const { t } = useTranslation()
  const router = useRouter()
  const dispatch = useDispatch()

  if (!table) return null;

  const handleDelete = async () => {
    if (window.confirm(t('Are you sure you want to delete this table?'))) {
      const result = await dispatch(DeleteTableThunk(table.id))
      if (!result.error) {
        toast.success(t('Table deleted successfully'));
        setSelectedTableId(null);
        if (onRefresh) onRefresh();
      } else {
        toast.error(t('Failed to delete table'));
      }
    }
  }

  const handleToggleActive = async () => {
    const data = new FormData();
    data.append('code', table.code);
    data.append('shape', table.shape);
    data.append('capacity', String(table.capacity));
    data.append('is_bookable', table.is_bookable ? '1' : '0');
    data.append('is_active', table.is_active ? '0' : '1');

    if (table.tags) {
      table.tags.forEach((tag, index) => {
        data.append(`tags[${index}]`, tag.id);
      });
    }

    if (table.views) {
      table.views.forEach((view, index) => {
        data.append(`views[${index}]`, view.id);
      });
    }

    try {
      await dispatch(EditRestaurantTableThunk({ id: table.id, formData: data })).unwrap();
      toast.success(t('Table status updated successfully'));
      if (onRefresh) onRefresh();
    } catch (err) {
      console.error(err);
      toast.error(err?.message || t('Failed to update table status'));
    }
  }

  const StatusRender = (status) => {
    switch (status) {
      case 1:
      case true:
        return (
          <div className='bg-[#DCFAE6] border border-[#17B26A] text-[#067647] w-fit h-7.5 rounded-full flex justify-center items-center'>
            <div className='py-1 px-3 flex items-center justify-center gap-1'>
              <span className='text-xs lg1:text-sm font-medium'>{t('active')}</span>
            </div>
          </div>
        );
      case 0:
      case false:
        return (
          <div className='bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-7.5 rounded-full flex items-center'>
            <div className='py-1 px-3 flex items-center justify-center gap-1'>
              <span className='text-xs lg1:text-sm font-medium'>{t('closed')}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  const StatusRender2 = (status) => {
    switch (status) {
      case 1:
      case true:
        return (
          <div className='bg-[#DCFAE6] border border-[#17B26A] text-[#067647] w-fit h-7.5 rounded-full flex justify-center items-center'>
            <div className='py-1 px-3 flex items-center justify-center gap-1'>
              <img src="/images/icons/true.svg" alt="" className='w-4 h-4' />
              <span className='text-xs lg1:text-sm font-medium'>{t('Available for booking')}</span>
            </div>
          </div>
        );
      case 0:
      case false:
        return (
          <div className='bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-7.5 rounded-full flex items-center'>
            <div className='py-1 px-3 flex items-center justify-center gap-1'>
              <img src="/images/icons/xxx.svg" alt="" className='w-4 h-4' />
              <span className='text-xs lg1:text-sm font-medium'>{t('Not available for booking')}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className='mt-8 animate-fade-in duration-300'>
      <div className='flex justify-between items-center mb-4'>
        <p className='text-[#364152] text-xl font-medium'>{t('Selected Table Details')}</p>
        <button 
          onClick={() => setSelectedTableId(null)}
          className='text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium cursor-pointer'
        >
          {t('Close')} ✕
        </button>
      </div>

      <div className='relative shadow-[0_0_8px_0_rgba(0,0,0,0.12)] border border-[#E3E8EF] bg-white rounded-[8px] p-5 grid grid-cols-1 md:grid-cols-4 gap-6 items-center'>
        {/* image/shape icon */}
        <div className='bg-[linear-gradient(180deg,_#1183FF_50.96%,_#0064D2_100%)] flex flex-col justify-center items-center rounded-[8px] text-[#FCFCFD] p-6 h-28 w-28 mx-auto md:mx-0 shadow-sm'>
          <p className='text-2xl font-bold'>{table?.code}</p>
          <span className='text-xs font-light tracking-wide opacity-80 mt-1'>{table?.shape}</span>
        </div>

        <div className='col-span-1 md:col-span-2 flex flex-col gap-4 justify-center'>
          <div className='flex flex-wrap items-center gap-3'>
            <p className='text-[#364152] text-xl font-semibold'>{t('Table')} {table?.code}</p>
            <p className='text-slate-400'>|</p>
            <p className='text-[#4B5565] text-base font-normal'>{table?.views?.[0]?.name || t('No specific view')}</p>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <p className='flex gap-1.5 items-center border border-[#CDD5DF] bg-[#F8FAFC] w-fit px-3 py-1 rounded-full'>
              <img src="/images/icons/user-group_grey.svg" className="w-4 h-4" alt="" />
              <span className='text-[#4B5565] text-sm font-medium'>{table?.capacity} {t('Guests')}</span>
            </p>
            {table?.tags && table.tags.map((tag,index) => (
              <span key={index} className='bg-[#EDE7FD] text-[#5D2ECC] border border-[#E3E8EF] px-3 py-1 rounded-full text-xs font-semibold'>
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-3 justify-end items-center md:items-end'>
          {StatusRender(table?.is_active)}
          {StatusRender2(table?.is_bookable)}
        </div>
        
        {/* Action buttons */} 
        <div className='grid grid-cols-3 gap-4 col-span-1 md:col-span-4 border-t border-[#E3E8EF] pt-4 w-full'>
          <button 
            onClick={() => router.push(`/Pages/Halls/Tables/Edit?id=${table?.id}&hall_id=${hallId}`)}  
            className='flex items-center justify-center gap-2 rounded-[4px] border border-[#CDD5DF] bg-white hover:bg-slate-50 transition-colors px-2 h-11 w-full cursor-pointer font-medium text-slate-700 text-sm'
          >
            <img src="/images/icons/EditYellow.svg" className='w-5 h-5' alt="" />
            <span>{t('modification')}</span>
          </button>

          <button 
            onClick={handleToggleActive}
            className='flex items-center justify-center gap-2 rounded-[4px] border border-[#CDD5DF] bg-white hover:bg-slate-50 transition-colors px-2 h-11 w-full cursor-pointer font-medium text-slate-700 text-sm'
          >
            <img src={table?.is_active ? "/images/icons/shut-down.svg" : "/images/icons/checkmark-circle-true.svg"} className='w-5 h-5' alt="" />
            <span>{table?.is_active ? t('closing') : t('reactivation')}</span>
          </button>

          <button 
            onClick={handleDelete} 
            className='flex items-center justify-center gap-2 rounded-[4px] border border-red-200 bg-red-50 hover:bg-red-100 transition-colors px-2 h-11 w-full cursor-pointer font-medium text-red-700 text-sm'
          >
            <img src="/images/icons/delete-darkRed.svg" className='w-5 h-5' alt="" />
            <span>{t('delete')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards