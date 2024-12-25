import React from 'react';
import { CiSaveDown2 } from 'react-icons/ci';
import certificate from '@/assets/certificate.png'
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
const page = () => {
    return (
        <section className='w-[90%] mx-auto mt-20 flex md:flex-row flex-col justify-between items-center md:px-10 px-5 py-6 md:gap-0 gap-5 bg-gradient-to-l from-slate-900 to-black rounded-lg'>
            <div>
                <p className='text-3xl text-white md:w-[65%]'>সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?</p>
                <button className='flex justify-center items-center bg-green-500 mt-6 py-2 px-6 rounded-lg text-white gap-2'><FaDownload /> ফ্রি ডাউনলোড করুন</button>
            </div>
            <Image width={380} height={600} src={certificate} alt='certificate' />
        </section>
    );
};

export default page;