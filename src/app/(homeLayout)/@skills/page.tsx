import { FaCheck } from 'react-icons/fa';
import SkillSlider from './_compo/SkillSlider';
import LanguageCourse from './_compo/LanguageCourse';



const page = () => {

    

    return (
        <section className='bg-black text-white  mt-20'>
            <div className='w-[90%] mx-auto'>
                <div className="text-center pt-28">
                    <p className='text-xl text-center'>🚀 স্কিলস</p>
                    <h1 className="text-3xl sm:text-4xl mt-2 font-bold mb-4">
                        দেশের সেরা স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম
                    </h1>
                    <div className='flex justify-center space-x-10 mt-6'>
                        <p className='flex justify-center items-center gap-2'><FaCheck className='text-teal-400' /> দেশের সেরা শিক্ষক</p>
                        <p className='flex justify-center items-center gap-2'><FaCheck className='text-teal-400' /> ৫ লক্ষ+ শিক্ষার্থী</p>
                        <p className='flex justify-center items-center gap-2'><FaCheck className='text-teal-400' /> ১০০+ অনলাইন কোর্স</p>
                    </div>

                </div>
               
                <div className='py-10'>
                    <SkillSlider />  
                    <LanguageCourse />
                  </div>
               
            </div>
        </section>
    );
};

export default page;