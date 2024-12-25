import headline from '@/assets/headline.png'
import Image from 'next/image';
import AvailableAdmisssion from './_compo/AvailableAdmisssion';
import AvailableCourse from './_compo/AvailableCourse';
import OurInstatuite from './_compo/OurInstatuite';



const page = () => {
    return (
        <section className={`min-h-screen background py-10`}>
            <div className='w-[90%] mx-auto'>
                <Image src={headline} alt='headline' width={600} className='mx-auto pt-5' />

                <div className='flex md:flex-row flex-col justify-center items-center gap-6 mt-8'>
                    <AvailableAdmisssion/>
                    <AvailableCourse/>
                </div>
                <OurInstatuite/>
            </div>
        </section>
    );
};

export default page;