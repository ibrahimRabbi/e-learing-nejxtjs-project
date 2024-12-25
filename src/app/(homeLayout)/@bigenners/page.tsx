'use client'
import Card from '@/components/ui/Card';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const page =  () => {

   const [courses, setCourses] = useState<object[]>([])
       
   
       useEffect(() => {
           fetch('./bigenners.json')
               .then(res => res.json())
           .then(data => setCourses(data))
       }, []);
     
    
    
    return (
        <section className='w-[90%] mx-auto mt-20 text-center'>
            <p className='text-sm text-gray-600'>Course for bigenners</p>
            <p className='text-4xl'>নতুনদের জন্য কোর্স সমূহ</p>



            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10'>
                {
                    courses.map((course: any, index: number) => {
                        return (
                            <div key={index} className="border rounded-xl p-2">
                                <div className='avatar'>
                                    <div className='w-full'>
                                        <Image src={course?.image} alt='liveImage' className='w-full rounded-md  md:h-[150px] h-[170px]' height={500} width={200} />
                                    </div>
                                </div>
                                        
                            
                                        <div className="">
                                        <h1 className="text-[16px] mt-2">{course?.title}</h1>
                                    <div className="flex justify-between flex-shrink-0 items-center mt-2">
                                        <p className='text-xl'>৳ {course?.price}</p>
                                                <button className="flex justify-end items-center gap-1 text-green-600 font-semibold">Enroll <FaArrowCircleRight /></button>
                                           </div>
                                        </div>
                                    </div>
                        )
                    })
               }
            </div>
        </section>
    );
};

export default page;