"use client"; 

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const SwiperComponent = () => {
  return (
    <div className="w-[1165px] max-w-full h-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={20} 
        slidesPerView={1} 
        // navigation // Oldinga va orqaga tugmalar
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} 
        loop 
      >
        <SwiperSlide>
          <div className="flex  w-[1165px] h-[400px] ">
            <div className="pl-10 w-[600px]">
              <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO GREENSHOP
              </h3>
              <h1 className="font-black text-[#3D3D3D] text-6xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S MAKE A <br />
                BETTER <span className="text-[#46A358]">PLANET</span>
              </h1>
              <p className="text-sm font-normal text-[#727272] w-[600px] max-lg:text-xs mt-[10px] ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
                SHOP NOW
              </button>
            </div>
            <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
              <Image
                src="/image.png"
                alt="Slide 1"
                width={100}
                height={50}
                className="w-[300px] h-[300px]"
                priority
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex  w-[1165px] h-[400px] ">
            <div className="pl-10 w-[600px]">
              <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO GREENSHOP
              </h3>
              <h1 className="font-black text-[#3D3D3D] text-6xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S MAKE A <br />
                BETTER <span className="text-[#46A358]">PLANET</span>
              </h1>
              <p className="text-sm font-normal text-[#727272] w-[600px] max-lg:text-xs mt-[10px] ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
                SHOP NOW
              </button>
            </div>
            <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
              <Image
                src="/image copy.png"
                alt="Slide 1"
                width={100}
                height={50}
                className="w-[300px] h-[300px]"
                priority
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex  w-[1165px] h-[400px] ">
            <div className="pl-10 w-[600px]">
              <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
                WELCOME TO GREENSHOP
              </h3>
              <h1 className="font-black text-[#3D3D3D] text-6xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
                LET'S MAKE A <br />
                BETTER <span className="text-[#46A358]">PLANET</span>
              </h1>
              <p className="text-sm font-normal text-[#727272] w-[600px] max-lg:text-xs mt-[10px] ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
                SHOP NOW
              </button>
            </div>
            <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
              <Image
                src="/gul.png"
                alt="Slide 1"
                width={100}
                height={50}
                className="w-[300px] h-[300px]"
                priority
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
