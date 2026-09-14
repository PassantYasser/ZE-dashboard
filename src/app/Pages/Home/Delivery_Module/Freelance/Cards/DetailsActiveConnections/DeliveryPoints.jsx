'use client'
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

/* ── Animation variants ─────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.1 },
  },
};
/* ─────────────────────────────────────────────────────────────────── */

function DeliveryPoints({ getActiveDelivery }) {
  const { t } = useTranslation();

  const getActiveDeliveryData = getActiveDelivery?.data;

  return (
    <motion.div
      className="border border-[#CDD5DF] rounded-3px p-6"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.p
        className="text-[#364152] text-xl font-medium mb-6"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {t("Delivery points")} ({getActiveDeliveryData?.dropoffs?.count})
      </motion.p>

      {/* Delivery Points */}
      <div className="border border-[#E7E7E7] rounded-3px p-4">
        <motion.div
          className="flex flex-col"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {getActiveDeliveryData?.dropoffs?.items.map((point, index) => (
            <motion.div
              key={point?.id}
              className="relative"
              variants={itemVariants}
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Left Arrow */}
              <motion.div
                className="absolute left-0 top-5 cursor-pointer"
                whileHover={{ scale: 1.15, x: -2 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <img src="/images/icons/arrow-right-blackk.svg" alt="" />
              </motion.div>

              {/* Content */}
              <div className="mr-auto flex items-start gap-2 text-right rounded-md py-1 px-1 transition-colors duration-200">
                <div className="relative flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    className="w-10 h-10 rounded-3px bg-[#F4EAD0] flex items-center justify-center z-10"
                    style={{ boxShadow: '0 0 0 4px #FFF8E620' }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 0 6px #FFF8E640',
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <motion.img
                      src="/images/icons/map-pinpoint_yellow.svg"
                      alt=""
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.18 }}
                    />
                  </motion.div>

                  {/* Dotted Line */}
                  {index !== getActiveDeliveryData?.dropoffs?.items.length - 1 && (
                    <motion.div
                      className="w-px flex-1 border-l border-dashed border-[#F1D98A]"
                      style={{ minHeight: '60px' }}
                      variants={lineVariants}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col items-start">
                  <p className="text-base text-[#697586] font-normal whitespace-nowrap">
                    {t("recipient")}
                  </p>

                  <p className="text-base text-[#364152] font-normal whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px] leading-6">
                    {point?.address}
                  </p>
                  <p className="text-base text-[#697586] font-normal whitespace-nowrap">
                    {t("recipient")}: {point?.recipient?.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default DeliveryPoints;
