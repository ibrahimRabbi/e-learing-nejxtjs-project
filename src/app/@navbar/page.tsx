import Image from 'next/image';
import logo from '@/assets/10 mint logo.svg'
import Manubar from './_navCompo/Manubar';
import { BsTelephoneFill } from "react-icons/bs";
import { IoSearch } from 'react-icons/io5';
import Rmanubar from '@/components/ui/responsive/Rmanubar';
 



const page = () => {
    return (
        <nav className="bg-white shadow py-2">
            <div className="w-[95%] mx-auto flex items-center md:justify-start justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image src={logo} alt="Logo" width={100} height={40} />
                </div>

                {/* Search Bar */}
                <div className="hidden relative md:flex mx-3 w-[25%]">
                    <IoSearch className='size-5 absolute top-3 left-2 text-gray-700' />
                    <input
                        type="text"
                        placeholder="ক্লাস কোর্স, কুইজ স্কুল প্রোগ্রাম সার্চ করুন..."
                        className="flex-1 py-3 pl-8 border rounded-2xl text-xs font-semibold focus:outline-none w-full "
                    />
                </div>


                {/* Menu */}
                <Manubar />

                {/* Language Selector & Buttons */}
                <div className="flex items-center gap-4 justify-end md:justify-between w-[60%] md:w-[20%]">
                    <IoSearch className='size-5 text-gray-700 md:hidden'/>
                    <button className="text-gray-600 border py-1 px-2 rounded-md text-center font-semibold hover:bg-gray-50 md:flex hidden">EN</button>
                    <div className="text-green-600 font-bold flex items-center gap-1">
                        <BsTelephoneFill />
                        <span className='md:flex hidden'>16910</span>
                    </div>
                    <button className="bg-green-500 text-white py-2 px-6 text-sm font-semibold rounded-lg">
                        লগ-ইন
                    </button>
                </div>
            </div>
            <Rmanubar/>
        </nav>
    );
};

export default page;