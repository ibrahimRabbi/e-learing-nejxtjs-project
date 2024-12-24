import Image from "next/image";
import logo from '@/assets/10 mint logo.svg'
import Link from "next/link";
import pathToGooglePlay from '@/assets/google-play-icon.png'
import pathToAppStore from '@/assets/ios-store-icon.png'



const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 px-4 md:px-12 lg:px-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div className="flex flex-col items-start">
                    <Image src={logo} alt="Logo" width={100} height={40} />
                    <p className="text-gray-600 mb-4">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="w-32 h-10 bg-black flex items-center justify-center rounded"
                        >
                            <Image
                                src={pathToGooglePlay}
                                alt="Get it on Google Play"
                                className="h-full"
                            />
                        </Link>
                        <Link
                            href="#"
                            className="w-32 h-10 bg-black flex items-center justify-center rounded"
                        >
                            <Image
                                src={pathToAppStore}
                                alt="Download on the App Store"
                                className="h-full"
                            />
                        </Link>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">কোম্পানি</h4>
                        <ul className="space-y-4">
                            {[
                                "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি",
                                "শিক্ষক হিসাবে যোগ দিন",
                                "অ্যাফিলিয়েট হিসাবে যোগ দিন",
                                "প্রাইভেসি পলিসি",
                                "রিফান্ড পলিসি",
                                "ব্যবহারকারীর শর্তাবলী",
                            ].map((item, index) => (
                                <li key={index} className="text-gray-600 hover:underline">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">অন্যান্য</h4>
                        <ul className="space-y-4">
                            {[
                                "ব্লগ",
                                "বুক স্টোর",
                                "ফ্রি নোটস ও গাইড",
                                "চাকরির প্রস্তুতি কোর্সসমূহ",
                                "সার্টিফিকেট ভেরিফাই করুন",
                                "ফ্রি ডাউনলোড",
                            ].map((item, index) => (
                                <li key={index} className="text-gray-600 hover:underline">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="pl-7">
                    <h4 className="font-semibold text-gray-800 mb-4">
                        আমাদের যোগাযোগের মাধ্যম
                    </h4>
                    <ul className="space-y-6 text-gray-600">
                        <li>কল করুন: <span className=" text-green-500 font-semibold">16910</span> (24x7)</li>
                        <li>
                            হোয়াটসঅ্যাপ: <a href="tel:+8801896016252" className="hover:underline text-green-500 font-semibold">+8801896016252</a> (24x7)
                        </li>
                        <li>
                            দেশের বাইরে থেকে:{" "}
                            <a href="tel:+8809610916910" className="hover:underline text-green-500 font-semibold">
                                +880 9610916910
                            </a>
                        </li>
                        <li>
                            ইমেইল:{" "}
                            <a
                                href="mailto:support@10minuteschool.com"
                                className="hover:underline"
                            >
                                support@10minuteschool.com
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 mt-4">
                        {["facebook", "instagram", "linkedin", "youtube", "tiktok"].map(
                            (platform, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-600 hover:text-gray-800"
                                    aria-label={platform}
                                >
                                    <i className={`fab fa-${platform} text-2xl`}></i>
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
