import Image from 'next/image';
import React from 'react';

const Client = () => {
    return (
        <div className='bg-slate-900 p-6 text-center rounded-lg md:mt-20 mt-10'>
            <p className='text-lg mt-4 text-slate-400'>দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট প্রোগ্রাম</p>
            <div className='grid grid-cols-5 w-[80%] mx-auto mt-5 items-center gap-6 '>
                
                <Image width={100} height={80} src="https://i.ibb.co.com/Mg2S7JN/150b4fcab8522bf65adf1cf9ef6c860a.png" alt="client" />

                <Image width={120} height={80} src="https://i.ibb.co.com/DYfr1Kr/samsung-logo-png-1285.png" alt="client" />

                <Image width={120} height={80} src="https://i.ibb.co.com/D7Fz2cR/pngegg-1.png" alt="client" />

                <Image width={120} height={80} src="https://i.ibb.co.com/KGnqnWX/download-removebg-preview.png" alt="client" />

                <Image width={140} height={80} src="https://i.ibb.co.com/p4wSKcV/1630670409099-removebg-preview.png" alt="client" />
               
                
            </div>
           
        </div>
    );
};

export default Client;