'use client'
import React, { useRef } from 'react';
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';


const categories = [
    { name: "ভাষা শিক্ষা", courses: "23 Courses", isActive: true },
    { name: "ফ্রিল্যান্সিং", courses: "10 Courses" },
    { name: "বান্ডেল", courses: "13 Courses" },
    { name: "স্কিলস এন্ড আইটি", courses: "23 Courses" },
    { name: "ডিজাইন", courses: "9 Courses" },
    { name: "ক্যারিয়ার রেডিনেস", courses: "9 Courses" },
    { name: "ফিউচার কোর্সসমূহ", courses: "2 Courses" },
    { name: "বান্ডেল", courses: "13 Courses" },
];


const SkillSlider = () => {

    const swiperRef = useRef<SwiperType>(null);


    return (

        <div className='flex justify-center items-center gap-4'>
            <button
                className='bg-[rgba(255,254,254,0.34)] p-2 rounded-full'
                onClick={() => swiperRef.current?.slidePrev()}>
                <FaChevronLeft className='size-5 text-slate-700' />
            </button>
            <Swiper
                spaceBetween={30}
                slidesPerView={7}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation, FreeMode]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div>
                    {
                        categories.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    key={index}
                                    className={`p-4 border bg-gray-800 hover:bg-gray-700 duration-100 rounded-md ${item.isActive
                                        ? "border-green-600 text-white"
                                        : "border-gray-800 text-gray-300"
                                        } text-center shadow-md cursor-pointer`}
                                >
                                    <h3 className="font-semibold text-xs whitespace-nowrap">{item.name}</h3>
                                    <p className="text-sm mt-1">{item.courses}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>

            </Swiper>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className='bg-[rgba(255,254,254,0.35)] p-2 rounded-full'>
                <FaChevronRight className='size-5 text-slate-700' />
            </button>
        </div>
    );
};

export default SkillSlider;