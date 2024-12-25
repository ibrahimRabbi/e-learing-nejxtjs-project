'use client'
import React, { useEffect, useRef, useState } from 'react';
import style from './milestone.module.css';
import CountUp from 'react-countup';

const page = () => {
    const [isCounting, setIsCounting] = useState(false);
    const [hasCounted, setHasCounted] = useState(false); // To keep the final value displayed
    const elementRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasCounted) {
                    setIsCounting(true);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasCounted]);


    return (
        <div className={`${style.bgImage} p-10 my-20 text-center text-white `}>
            <div className='font-semibold'>
                <p className='text-4xl '>২০২২-২৪ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য</p>
                <p className='text-lg mt-1'>তোমাদের সাফল্যই আমাদের অনুপ্রেরণা</p>
            </div>

            <div className='grid grid-cols-1 md:gap-8 gap-5 md:grid-cols-3 my-8 w-[90%] mx-auto '>
                <div className='bg-[rgba(0,0,0,0.38)] py-2 rounded-lg'>
                    <div ref={elementRef}>
                        {isCounting ? (
                            <CountUp
                                className="text-6xl font-semibold"
                                end={15585}
                                start={1}
                                duration={3}
                                onEnd={() => {
                                    setIsCounting(false);
                                    setHasCounted(true);  
                                }}
                            />
                        ) : (
                             
                            hasCounted && (
                                <span className="text-6xl font-semibold">{15584}</span>
                            )
                        )}
                    </div>
                    <p className='mt-2'>মোট শিক্ষার্থী</p>
                </div>
                <div className='bg-[rgba(0,0,0,0.36)] py-2 rounded-lg'>
                    <div ref={elementRef}>
                        {isCounting ? (
                            <CountUp
                                className="text-6xl font-semibold"
                                end={13820}
                                start={1}
                                duration={3}
                                onEnd={() => {
                                    setIsCounting(false);
                                    setHasCounted(true);  
                                }}
                            />
                        ) : (
                           
                            hasCounted && (
                                <span className="text-6xl font-semibold">{13820}</span>
                            )
                        )}
                    </div>
                    <p className='mt-2'>চান্সপ্রাপ্ত শিক্ষার্থী</p>
                </div>
                <div className='bg-[rgba(0,0,0,0.4)] py-2 rounded-lg'>
                    <div ref={elementRef}>
                        {isCounting ? (
                            <CountUp
                                className="text-6xl font-semibold"
                                end={34}
                                start={1}
                                duration={4}
                                onEnd={() => {
                                    setIsCounting(false);
                                    setHasCounted(true);  
                                }}
                            />
                        ) : (
                            
                            hasCounted && (
                                <span className="text-6xl font-semibold">{34}</span>
                            )
                        )}
                    </div>
                    <p className='mt-2'>টপ ১০০-তে চান্সপ্রাপ্ত শিক্ষার্থী</p>
                </div>
            </div>
            
        </div>
    );
};

export default page;