import { ArrowRight } from 'lucide-react';
import React from 'react';

const page = () => {
    return (
        <section className='mt-24 w-[90%] mx-auto'>
            <div className='md:w-[70%] w-full mx-auto text-center'>
                <h1 className='md:text-4xl text-2xl md:w-[80%] mx-auto tracking-wide leading-snug font-semibold '>আমাদের কোর্সের সুবিধা এবং সার্টিফিকেশন</h1>
                <p className='text-gray-500 text-lg mt-2'>May the progress of education continue from any part of the country under the care of the best teachers</p>
            </div>


            <div className='w-full flex md:flex-row flex-col justify-center md:justify-between gap-5 items-center mt-12'>

                <div className='border rounded-lg p-4 mx-auto'>
                    <iframe className='rounded-lg' width="350" height="200" src="https://www.youtube.com/embed/vK4Mno4QYqk?si=-SljlBDu-z8IGuyT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className='text-lg font-semibold mt-2'>Build up your career with cyberSecurity</p>
                    <span className='text-sm mt-2 text-gray-500'>অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।</span>
                </div>

                <div className='border rounded-lg p-4 mx-auto'>
                    <iframe className='rounded-lg' width="350" height="200" src="https://www.youtube.com/embed/FPMmzbYYyQM?si=gEPVbCzGSx6V8oZc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className='text-lg font-semibold mt-2'>Benifit and live support About IELTS</p>
                    <span className='text-sm mt-2 text-gray-500'>লাইভ ক্লাসে থাকবে ২ জন শিক্ষক! একজন পড়াবেন, চ্যাটে শিক্ষার্থীদের প্রশ্নের উত্তর দিবেন।</span>
                </div>
                
                <div className='border rounded-lg p-4 mx-auto'>
                    <iframe className='rounded-lg' width="350" height="200" src="https://www.youtube.com/embed/34bRv6cQezo?si=N11Ii5gT3LeIavAO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className='text-lg font-semibold mt-2'>Why you Need to learn Next JS !</p>
                    <span className='text-sm mt-2 text-gray-500'>অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।</span>
                </div>
            </div>

            <button className='flex mt-20 mx-auto justify-center items-center gap-1 bg-green-500 p-2 rounded-md text-white font-semibold'>Choose Your Class <ArrowRight/></button>
        </section>
    );
};

export default page;