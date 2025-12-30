"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function ChartPage({chartData}) {

  const { t } = useTranslation();
  
  
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("شهري");
    const options = ["شهر","3 شهور", "6 شهور ", "سنوي"];
  
    const handleSelect = (option) => {
      setSelected(option);
      setOpen(false);
    };
  
    const Profit = ['0','13','10','20','22','15','25','30','40',null,null];
    const mounths = ['يناير','','فبراير','','مارس','','ابريل','','مايو','','يونيو'];
    const [state] = React.useState({
              series: [{
                name: "Profit",
                data: Profit.reverse()
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
                labels: mounths.reverse(),
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
      const now = new Date();
      let label = "";
      let range = "";
  
      if (selected === "شهر") {
        // Arabic month names
        const months = [
          "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو",
          "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        label = "شهر";
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        range = `1 ${month} - ${new Date(year, now.getMonth() + 1, 0).getDate()} ${month}`;
      } else if (selected === "6 شهور ") {
        label = "الستة أشهر الماضية";
        const months = [
          "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو",
          "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        const endMonth = months[now.getMonth()];
        const endYear = now.getFullYear();
        const startDate = new Date(now.getFullYear(), now.getMonth() - 5, 1);
        const startMonth = months[startDate.getMonth()];
        const startYear = startDate.getFullYear();
        range = `1 ${startMonth} ${startYear} - ${new Date(endYear, now.getMonth() + 1, 0).getDate()} ${endMonth} ${endYear}`;
      } else if (selected === "سنوي") {
        label = "سنوي";
        const year = now.getFullYear();
        range = `1 يناير ${year} - 31 ديسمبر ${year}`;
      }
  
      return { label, range };
    };
  
    const { label, range } = getPeriodLabelAndRange(selected);
  
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