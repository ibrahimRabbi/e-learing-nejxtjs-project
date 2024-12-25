'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowCircleRight, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';


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


const LanguageCourse = () => {

    const swiperRef = useRef<SwiperType>(null);
    const [data, setData] = useState<object[]>([])
    const [screen, setScreen] = useState(1300)


    useEffect(() => {
        fetch('./languageCourse.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        setScreen(window.innerWidth)
    }, [screen]);


    return (

        <div>
            <div className='flex justify-center items-center gap-4 mt-10'>
                <button
                    className='bg-[rgba(206,205,205,0.34)] -mr-8 z-10 p-2 rounded-full'
                    onClick={() => swiperRef.current?.slidePrev()}>
                    <FaChevronLeft className='size-5 text-slate-700' />
                </button>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={screen > 600 ? 4 : 2}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation, FreeMode]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            data.map((item: any, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className=" bg-slate-900 rounded-lg">
                                            <Image src={item?.image} alt='liveImage' className='w-full rounded-t-md' height={300} width={200} />

                                            <div className="p-2">
                                                <h1 className="text-white md:text-[16px] text-sm mt-1">{item?.title}</h1>
                                                <div className="mt-5">
                                                    <p className='text-sm text-gray-500'>{item?.mentor}</p>
                                                    <button className="flex mt-4 justify-end items-center gap-1 text-purple-400 text-xs font-semibold">বিস্তারিত <FaArrowRight /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })


                        }
                    </div>

                </Swiper>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className='bg-[rgba(255,254,254,0.35)] -ml-8 z-10 p-2 rounded-full'>
                    <FaChevronRight className='size-5 text-slate-700' />
                </button>
            </div>
            <button className='flex justify-center items-center gap-3 bg-green-500 text-white mt-10 md:mt-20 mx-auto py-2 px-5 rounded-lg'>সকল কোর্স <FaArrowRight/></button>
        </div>
    );
};

export default LanguageCourse;