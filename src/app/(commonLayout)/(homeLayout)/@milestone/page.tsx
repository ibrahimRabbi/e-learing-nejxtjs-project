'use client'
import React from 'react';
import style from './milestone.module.css';
import CountUp from 'react-countup';

const page = () => {
    return (
        <div className={`${style.bgImage} p-10 my-20 text-center text-white `}>
            <div className='font-semibold'>
                <p className='text-4xl '>২০২২-২৪ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য</p>
                <p className='text-lg mt-1'>তোমাদের সাফল্যই আমাদের অনুপ্রেরণা</p>
            </div>

            <div className='grid grid-cols-1 md:gap-8 gap-5 md:grid-cols-3 my-8 w-[90%] mx-auto '>
                <div className='bg-[rgba(0,0,0,0.38)] py-2 rounded-lg'>
                    <CountUp className='text-6xl font-semibold' end={15584} start={1} duration={3} scrollSpyOnce scrollSpyDelay={800} />
                    <p className='mt-2'>মোট শিক্ষার্থী</p>
                </div>
                <div className='bg-[rgba(0,0,0,0.36)] py-2 rounded-lg'>
                    <CountUp className='text-6xl font-semibold' end={1400} start={1} duration={3} scrollSpyOnce scrollSpyDelay={800} />
                    <p className='mt-2'>চান্সপ্রাপ্ত শিক্ষার্থী</p>
                </div>
                <div className='bg-[rgba(0,0,0,0.4)] py-2 rounded-lg'>
                    <CountUp className='text-6xl font-semibold' end={34} start={1} duration={3} scrollSpyOnce scrollSpyDelay={800} />
                    <p className='mt-2'>টপ ১০০-তে চান্সপ্রাপ্ত শিক্ষার্থী</p>
                </div>
            </div>
            
        </div>
    );
};

export default page;