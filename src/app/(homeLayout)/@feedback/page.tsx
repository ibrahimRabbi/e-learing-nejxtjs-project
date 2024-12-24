'use client'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import Card from '@/components/ui/Card';


const page = () => {
    const [data, setData] = useState<object[]>([])
    const swiperRef = useRef<SwiperType>(null);


    useEffect(() => {
        fetch('./feedback.json')
            .then(res => res.json())
            .then(data => setData(data))
    })
     
    console.log(data);

    return (
        <section className='w-[90%] mx-auto mt-28'>
            <h1 className='text-3xl sm:text-4xl text-center font-bold mb-4 w-[50%] mx-auto'>কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?</h1>
             
                <div className='flex justify-center items-center gap-4'>
                    <button
                    className='bg-[rgba(138,136,136,0.37)] p-2 rounded-full'
                        onClick={() => swiperRef.current?.slidePrev()}>
                        <FaChevronLeft className='size-5 text-slate-700' />
                    </button>
                    <Swiper
                        className='mx-auto'
                        spaceBetween={30}
                        slidesPerView={3}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation, FreeMode]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div>
                            {
                                data.map((item: any, index: number) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div key={index} className='border p-6 text-start rounded-lg mt-10'>
                                                <FaQuoteLeft className='text-4xl text-red-400 bg-red-100 p-2 rounded-full' />
                                                <p className='text-[16px] mt-4 text-slate-900'>{item?.comment}</p>
                                                <p className='text-[16px] mt-4 text-slate-600'>{item?.name}</p>
                                                <p className=' text-slate-400 text-xs'>{item?.designation}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </div>

                    </Swiper>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className='bg-[rgba(138,136,136,0.37)] p-2 rounded-full'>
                        <FaChevronRight className='size-5 text-slate-700' />
                    </button>
                </div>
               
        </section>
    );
};

export default page;