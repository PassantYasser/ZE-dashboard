"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { getYearsDrowpdownThunk } from '@/redux/slice/Finance/FinanceSlice';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function ChartPage({chartData}) {

  const { t } = useTranslation();
  
  //api
  const dispatch = useDispatch();
  const {yearOfChart , loading , error} = useSelector((state) => state.finance);
  useEffect(()=>{
    dispatch(getYearsDrowpdownThunk())
  },[dispatch])
  // console.log('yearOfChart',yearOfChart?.years);
  
  const years = yearOfChart?.years || [];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (years.length > 0 && selected === "") {
      setSelected(years[years.length - 1]);
    }
  }, [years, selected]);
  const options = years;

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };
console.log("profit", chartData?.total);
console.log("months", chartData?.month_name);
  const Profit = chartData?.total || [];
  const months = chartData?.month_name || [];
  const [state] = React.useState({
            series: [{
              name: "Profit",
              data: [...Profit].reverse()
            }],
            options: {
              chart: {
                type: 'area',
                height: 350,
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#2E078B'],
              fill: {
                type: 'solid',
                colors: ['#DBCEFA']
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 2,
                curve: 'straight',
                colors: ['#2E078B']
              },
              labels: [...months].reverse(),
              xaxis: {
                type: 'string',
              },
              yaxis: {
                opposite: true
              },
              legend: {
                horizontalAlign: 'right'
              }
            },
          
          
        });

  const getPeriodLabelAndRange = (selected) => {
    let label = `سنة ${selected}`;
    // let range = `1 يناير ${selected} - 31 ديسمبر ${selected}`;

    return { label };
  };

  const { label } = getPeriodLabelAndRange(selected);
  
  return (
    <>

      <section className="flex justify-between  relative z-10 mt-4 py-4 px-6 ">
        <div className="flex flex-col">
          <span className="text-[#364152] text-base font-medium">{label}</span>
          {/* <span className="text-[#697586] text-sm font-medium">{range}</span> */}
        </div>

        {yearOfChart?.years_count > 1 ? (
          <div className="relative">
            <button
              className="border border-[#C69815] rounded-[3px] font-medium text-base flex items-center justify-between min-w-[120px] h-10 py-2.5 px-4 cursor-pointer text-[#C69815] "
              onClick={() => setOpen(!open)}
            >
              {selected}
              <svg
                className={`transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="#C69815" strokeWidth="2" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {open && (
              <ul className="absolute right-0 mt-1 w-full bg-white border border-[#E3E8EF] rounded shadow-md">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-3 py-2 text-sm text-right hover:bg-[#FCFCFD] cursor-pointer text-[#475467]"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
            </div>
        ): null}
      
      </section>
  
      {/* chart */} 
      <section>
        <div id="chart" dir="rtl">
            <ReactApexChart options={state.options} series={state.series} type="area"  height={210} />
        </div>
        <div id="html-dist"></div>
      </section>
  
    </>
  )
}

export default ChartPage