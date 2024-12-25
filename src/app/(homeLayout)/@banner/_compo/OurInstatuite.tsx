import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';

const OurInstatuite = () => {
    return (
        <div className='relative bg-gradient-to-br from-[rgba(90,24,34,0.73)] to-[rgba(53,17,22,0.66)] md:p-6 p-2 w-[100%] md:mt-20 mt-12 rounded-xl border border-[#81222f]'>


            <span className='bg-[#351116] md:flex hidden md:absolute -top-5 left-[540px] text-sm text-[#b32b3d] border border-[#c4283c] py-2 px-5 rounded-full'>অফলাইন সেন্টার</span>
            <p className='text-[22px] font-semibold mt-5 tracking-widest text-white text-center mx-auto md:w-[40%] '>অনলাইনে ৫ লক্ষাধিক শিক্ষার্থীকে ইংরেজি শিখিয়ে আমরা এখন অফলাইনে</p>

            <div className='text-white text-center mt-5 flex items-center justify-center flex-wrap gap-6'>
                <span className='flex text-sm items-center justify-center rounded-md gap-2 bg-[rgba(255,255,255,0.24)] p-2'><CiLocationOn className='size-5' /> উত্তরা</span>
                <span className='flex text-sm items-center justify-center rounded-md gap-2 bg-[rgba(255,255,255,0.24)] p-2'><CiLocationOn className='size-5' /> পান্থপথ</span>
                <span className='flex text-sm items-center justify-center rounded-md gap-2 bg-[rgba(255,255,255,0.24)] p-2'><CiLocationOn className='size-5' /> মিরপুর</span>
                <span className='flex text-sm items-center justify-center rounded-md gap-2 bg-[rgba(255,255,255,0.24)] p-2'><CiLocationOn className='size-5' /> মগবাজার</span>
                <span className='flex text-sm items-center justify-center rounded-md gap-2 bg-[rgba(255,255,255,0.24)] p-2'><CiLocationOn className='size-5' /> চকবাজার, চট্টগ্রাম</span>

            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                    <div className='flex items-center justify-start gap-4 bg-[rgba(255,255,255,0.15)] p-4 rounded-xl'>
                        <Image src='https://i.ibb.co.com/yWRxRSb/images.jpg' className='w-28 rounded-md' alt='3d' width={200} height={200} />
                        <div>
                            <p className='text-xs text-amber-500 font-semibold'>End Date: 12-09-2026</p>
                            <p className=' text-white'>3D Animation Design</p>
                            <p className='text-gray-400'>Jhon Doe-</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-4 bg-[rgba(255,255,255,0.15)] p-4 rounded-xl'>
                        <Image className='w-32 rounded-md' src='https://i.ibb.co.com/xCd9Gdb/download-1.jpg' alt='3d' width={200} height={200} />
                        <div>
                            <p className='text-xs text-amber-500 font-semibold'>End Date: 12-09-2026</p>
                            <p className=' text-white'>IELTS programme</p>
                            <p className='text-gray-400'>Sir Luke-</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-start gap-4 bg-[rgba(255,255,255,0.15)] p-4 rounded-xl'>
                        <Image className='w-28 rounded-md' src='https://i.ibb.co.com/sK9YdWt/download-2.jpg' alt='3d' width={200} height={200} />
                        <div>
                            <p className='text-xs text-amber-500 font-semibold'>End Date: 12-09-2026</p>
                            <p className=' text-white'>Degital Marketing</p>
                            <p className='text-gray-400'>Travis Head-</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className='flex justify-center items-center my-5 gap-6'>
                <button className='flex items-center gap-1 hover:underline text-green-600 text-sm mt-5 '>ফ্রি ক্লাস বুক করুন <FaArrowRight /></button>

                <button className='flex items-center gap-1 hover:underline text-green-600 text-sm mt-5 '>বিস্তারিত জানুন <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default OurInstatuite;