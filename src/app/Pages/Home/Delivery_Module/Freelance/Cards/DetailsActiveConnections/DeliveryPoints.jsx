'use client'
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function DeliveryPoints() {
  const { t } = useTranslation();

  const deliveryPoints = [
    {
      address: "321 شارع ابن، جناح 200",
      recipient: "أمير هارون",
    },
    {
      address: "321 شارع ابن، جناح 200",
      recipient: "أمير هارون",
    },
    {
      address: "321 شارع ابن، جناح 200",
      recipient: "أمير هارون",
    },
  ];

  return (
    <motion.div
      className="border border-[#CDD5DF] rounded-3px p-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Title */}
      <motion.p
        className="text-[#364152] text-xl font-medium mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        {t("Delivery points")} (3)
      </motion.p>

      {/* Delivery Points */}
      <div className="border border-[#E7E7E7] rounded-3px p-4">
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {deliveryPoints.map((point, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Left Arrow */}
              <motion.div
                className="absolute left-0 top-5 cursor-pointer"
                whileHover={{ x: -2, opacity: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/images/icons/arrow-right-blackk.svg" alt="" />
              </motion.div>

              {/* Content */}
              <motion.div
                className="mr-auto flex items-start gap-2 text-right rounded-md py-1 px-1 transition-colors duration-200"
                
              >
                <div className="relative flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    className="w-10 h-10 rounded-3px bg-[#F4EAD0] flex items-center justify-center z-10"
                    style={{ boxShadow: '0 0 0 4px #FFF8E620' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ scale: 1.08, boxShadow: '0 0 0 6px #F1D98A30' }}
                  >
                    <img src="/images/icons/map-pinpoint_yellow.svg" alt="" />
                  </motion.div>

                  {/* Dotted Line */}
                  {index !== deliveryPoints.length - 1 && (
                    <motion.div
                      className="w-px flex-1 border-l border-dashed border-[#F1D98A]"
                      style={{ minHeight: '60px' }}
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col items-start">
                  <p className="text-base text-[#697586] font-normal whitespace-nowrap">
                    {t("recipient")}
                  </p>

                  <p className="text-base text-[#364152] font-normal whitespace-nowrap leading-6">
                    {point.address}
                  </p>

                  <p className="text-base text-[#697586] font-normal whitespace-nowrap">
                    {t("recipient")}: {point.recipient}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default DeliveryPoints;
