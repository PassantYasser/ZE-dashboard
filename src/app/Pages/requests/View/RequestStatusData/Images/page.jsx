"use client";
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

function ImagesPage() {
  const { t } = useTranslation();

const images = [
    "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
  "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
  "https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=",
  "https://static.vecteezy.com/ti/photos-gratuite/t2/60117855-rouge-rose-est-le-principale-concentrer-de-le-image-avec-une-bleu-contexte-et-une-peu-autre-fleurs-dans-le-contexte-le-rose-est-le-plus-important-et-magnifique-fleur-dans-le-image-photo.jpeg",
  "https://winbuzzer.com/wp-content/uploads/2024/12/Google-Imagen-3-sample-squirrel-via-Google.webp",
  'https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80',

];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 100000);
    return () => clearInterval(interval);
  }, [length]);

  // const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  // const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  if (!Array.isArray(images) || images.length === 0) return null;


  return (
    <>
      <section className='shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] p-4 mt-6 w-full'>
        <p className='text-[#364152] text-base font-normal mb-4'>{t('Illustrative images')} </p>

          <div className="overflow-y-auto overflow-x-hidden">
        {/* Image Slider */}
        <section className="relative w-full  h-[200px] ">
          
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`service-image-${index}`}
              className={`absolute top-0 left-0 w-full h-[200px] transition-opacity duration-700 ${
                          index === current ? "opacity-100" : "opacity-0"
                  }`}    
              />
            ))}

          
          {/* Image Dots */}
          <div className="absolute bottom-4  left-1/2 -translate-x-1/2 bg-white/55 h-5.5 px-3 py-1.5 rounded-[20px] flex items-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition rounded-full ${
                  current === index
                    ? "w-2.5 h-2.5 bg-white"
                    : "w-1.5 h-1.5 bg-[#EEF2F6]"
                }`}
              />
            ))}
          </div>
        </section>
        </div>


      </section>


    </>
  )
}

export default ImagesPage