'use client'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Card from '@/components/ui/Card';




const AvailableAdmisssion = () => {

    const swiperRef = useRef<SwiperType>(null);
    const [courses, setCourses] = useState<object[]>([])
    

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
        .then(data => setCourses(data))
    }, []);



    return (
        <div className='bg-[rgba(16,30,70,0.73)] h-[355px] relative border border-[#172d69] w-[50%] rounded-xl'>
            <span className='border text-[rgb(98,98,241)] bg-[#101e46] border-[rgb(98,98,241)] rounded-full py-1 px-5 absolute -top-4 left-60 text-sm'>অনলাইন কোর্স</span>
            <p className='text-xl mt-10 text-white text-center mx-auto'>অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে !</p>

            <div className='flex justify-center items-center p-4'>
                <button
                    className='bg-[rgba(255,254,254,0.34)] -mr-5 z-10 p-2 rounded-full'
                    onClick={() => swiperRef.current?.slidePrev()}>
                    <FaChevronLeft className='size-5 text-slate-700' />
                </button>
                <Swiper
                    className='mx-auto'
                    spaceBetween={10}
                    slidesPerView={2}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation,FreeMode]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div>
                        {
                            courses.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card data={item} />
                                </SwiperSlide>
                            ))
                        }
                   </div>

                </Swiper>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className='bg-[rgba(255,254,254,0.35)] p-2 -ml-12 z-10 rounded-full'>
                    <FaChevronRight className='size-5 text-slate-700' />
                </button>
            </div>
            <button className='flex justify-center items-center gap-1 hover:underline text-green-500 text-sm mt-2 mx-auto'>ফ্রি ক্লাস বুক করুন <FaArrowRight /></button>
        </div>
    );
};

export default AvailableAdmisssion;