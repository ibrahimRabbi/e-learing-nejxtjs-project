'use client'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import liveImage from '@/assets/availableCourse/live.png'
import iltesImage from '@/assets/availableCourse/ielts_1700654663556.png'
import spokenImage from '@/assets/availableCourse/spoken.png'
import youtubeImage from '@/assets/availableCourse/youtubeMarketing.png'
import emailImage from '@/assets/availableCourse/email.png'
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';

const AvailableCourse: React.FC = () => {

    const swiperRef = useRef<SwiperType>(null);



    return (

        <div className='bg-[rgba(82,48,12,0.48)] relative border border-[rgb(82,48,12)] w-[50%] rounded-xl'>
            <span className='bg-[rgb(82,48,12)] absolute -top-4 left-60 text-sm text-[#ff9900] border border-[#ff9900] py-1 px-5 rounded-full'>অনলাইন কোর্স</span>
            <p className='text-xl mt-10 tracking-widest text-white text-center mx-auto w-72'>পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন</p>

            <div className='flex justify-center items-center gap-2 p-4'>
                <button
                    className='bg-[rgba(255,254,254,0.34)] p-2 -mr-5 z-10 rounded-full'
                    onClick={() => swiperRef.current?.slidePrev()}>
                    <FaChevronLeft className='size-5 text-slate-700' />
                </button>
                <Swiper
                    className='mt-5'
                    spaceBetween={20}
                    slidesPerView={5}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Image src={liveImage} alt='liveImage' className='w-[92px] rounded-md' width={200} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={iltesImage} alt='liveImage' className='w-24 rounded-md' width={200} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={spokenImage} alt='liveImage' className='w-24 rounded-md' width={200} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={youtubeImage} alt='liveImage' className='w-[92px] rounded-md' width={200} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={emailImage} alt='liveImage' className='w-24 rounded-md' width={200} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={liveImage} alt='liveImage' className='w-[92px] rounded-md' width={200} />
                    </SwiperSlide>

                </Swiper>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className='bg-[rgba(255,254,254,0.35)] p-2 -ml-5 z-10 rounded-full'>
                    <FaChevronRight className='size-5 text-slate-700' />
                </button>
</div>
            <button className='flex justify-center items-center gap-1 hover:underline text-green-600 text-sm my-7 mx-auto'>৩০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন <FaArrowRight /></button>
        </div>


    );
};

export default AvailableCourse;