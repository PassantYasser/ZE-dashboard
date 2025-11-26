"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';

function DescriptionPage() {
  const { t } = useTranslation();

const src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";


  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(Math.floor(secs % 60)).padStart(2, "0");
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.currentTime / audio.duration || 0); // نسبة التقدم
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", update);
    };
  }, []);

  return (
    <>
      <section className='shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] p-4 mt-6'>
        <div>
          <p className='text-[#364152] text-base font-normal mb-1'> {t('status description')}</p>
          <p className='text-[#697586] text-sm font-normal leading-[27px]'>
            عندما كنت أقود سيارتي في طريق مزدحم، فجأة سمعت صوت طقطقة غريب. توقفت على جانب الطريق لأكتشف أن الإطار الخلفي الأيسر قد انفجر. كان من الصعب عليّ تغيير الإطار بسبب الحرارة الشديدة، لكنني تمكنت من استدعاء المساعدة. 
          </p>
        </div>

        <hr className="border-[0.5px] border-[#E3E8EF] my-4 " />


        <div>
          <p className='text-[#364152] text-base font-normal mb-1'>{t('voice message')} </p>
          
          
            <div className="bg-white mt-4 border border-[#CDD5DF] rounded-[3px] p-2 flex items-center gap-3 shadow">

              {/* On/Off button */}
              <button
                onClick={togglePlay}
                className=" flex items-center justify-center hover:bg-gray-100 transition"
              >
                {isPlaying ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Green Dot */}           
              <div
                className={`w-2 h-2 rounded-full transition ${
                  isPlaying ? "bg-[#E3E8EF]" : "bg-[#079455]"
                }`}
              ></div>

              {/* waveform */}
              <div className="flex-1 flex items-center gap-[3px] h-8">
                {Array.from({ length: 45 }).map((_, i) => {
                  const activeIndex = Math.floor(progress * 300); 
                  return (
                    <div
                      key={i}
                      className={`w-[3px] rounded-full transition-all duration-200 ${
                        i <= activeIndex ? "bg-blue-500" : "bg-gray-300"
                      }`}
                      style={{
                        height: `${5 + ((i * 7) % 10)}px`,
                        opacity: i <= activeIndex ? 1 : 0.5,
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* time */}
              <div className="text-[#364152] text-sm min-w-[45px]">
                {formatTime(currentTime)}ث 
              </div>
              
              <audio ref={audioRef} src={src}></audio>
            </div>


        </div>
      </section>

    </>
    

    
  )
}

export default DescriptionPage