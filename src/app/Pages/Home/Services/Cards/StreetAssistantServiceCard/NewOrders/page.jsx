import React from "react";
import { useTranslation } from "react-i18next";

function NewOrdersPage({ orders = [], layout = "list" }) {
  const { t } = useTranslation();

  return (
    <div className="border border-[#CDD5DF] rounded-[3px] p-6">
      <p className="text-[#0F022E] text-xl font-medium">
        {t("New orders")}
      </p>

      <div className={layout === "grid" ? "grid grid-cols-2 gap-4" : ""}>
      {orders.map((order) => (
        <div
          key={order.id}
          className="mt-6 border border-[#CDD5DF] bg-white shadow-sm rounded-[3px] p-4 mb-4"
        >
          {/* Service */}
          <div className="flex gap-2 items-center">
            <img src="/images/icons/automotive-battery.svg" alt="service" />
            <p>
              <span className="text-[#364152] text-lg font-medium">
                {order.service} -
              </span>{" "}
              <span className="text-[#4B5565] text-sm">
                {order.customer}
              </span>
            </p>
          </div>

          <hr className="border-[#E3E8EF] my-4" />

          {/* Price & Distance */}
          <div className="flex justify-between">
            <div className="flex gap-1.5 items-center">
              <img src="/images/icons/clock-gray.svg" alt="price" />
              <p className="text-[#364152] text-base font-medium">
                  الاجمالي 45 دقيقة
              </p>
            </div>
            
            <div className="flex gap-1.5 items-center">
              <img src="/images/icons/route.svg" alt="distance" />
              <p className="text-[#364152] text-base">
                مسافة العمل {order.distance}
              </p>
            </div>
          </div>

          <hr className="border-[#E3E8EF] my-4" />

          {/* Location */}
            <div className="flex justify-between w-full">
              <div className="flex gap-2 items-center">
                <img src="/images/icons/location-bluee.svg" alt="location" />
                <p className="text-[#364152] text-base">
                  {order.location}
                </p>
              </div>
              <button className=" bg-[#FF3B30] text-[#fff] text-sm font-medium w-[25%] h-10 rounded-[3px] cursor-pointer">
                {t("to reject")}
              </button>
            </div>
        

          <hr className="border-[#E3E8EF] my-4" />

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button className="bg-[#079455] text-white text-sm font-semibold w-[40%] h-14 rounded-[3px] cursor-pointer">
              {t("acceptance")}
            </button>

            <p className="text-[var(--color-primary)] text-xl font-semibold flex items-center">
              {order.price} جنية
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default NewOrdersPage;
