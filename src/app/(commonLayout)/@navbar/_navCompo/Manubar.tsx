import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import React from 'react';

const Manubar = () => {

    const educationLevels = [
        "এইচএসসি",
        "দশম শ্রেণি",
        "নবম শ্রেণি",
        "অষ্টম শ্রেণি",
        "সপ্তম শ্রেণি",
        "ষষ্ঠ শ্রেণি"
    ];


    const courses = [
        "সকল কোর্সসমূহ",
        "ভাষা শিক্ষা",
        "ফ্রিল্যান্সিং",
        "বান্ডেল",
        "স্কিলস এন্ড আইটি",
        "ডিজাইন এন্ড ক্রিয়েটিভ",
        "ক্যারিয়ার রেডিনেস",
        "কিডস কোর্সসমূহ",
        "প্রফেশনাল কোর্সসমূহ",
        "ফ্রি কোর্সসমূহ"
    ];


    const programs = [
        "সকল প্রোগ্রামসমূহ",
        "IELTS প্রোগ্রাম",
        "স্পোকেন ইংলিশ (জুনিয়র)",
        "ইংলিশ ফাউন্ডেশন প্রোগ্রাম"
    ];

    const resources = [
        "চাকরি প্রস্তুতি কোর্সসমূহ",
        "ব্লগ",
        "বুক স্টোর",
        "ফ্রি নোটস ও গাইড",
        "একাডেমিক ডিজিটাল কন্টেন্ট",
        "সার্টিফিকেট ভেরিফাই করুন",
        "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি",
        "শিক্ষক হিসাবে যোগ দিন",
        "অ্যাফিলিয়েট হিসাবে যোগ দিন"
    ];



    return (
        <div className="hidden px-2 text-sm md:flex items-center text-gray-600">
            <NavigationMenu>
                <NavigationMenuList className='-space-x-2'>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>ক্লাস ৬-১২</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="p-4 md:w-[150px] lg:w-[150px] lg:grid-cols-[.75fr_1fr]">
                                {
                                    educationLevels.map((level) => (
                                        <li key={level}>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="block p-3 rounded-md hover:bg-gray-100"
                                                    href='/'
                                                >
                                                    {level}
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    ))
                                }

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
            

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>স্কিলস</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-[400px] gap-3 p-4 md:w-[250px] lg:w-[250px] ">
                                {
                                    courses.map((level) => (
                                        <li key={level}>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="block p-3 rounded-md hover:bg-gray-100"
                                                    href='/'
                                                >
                                                    {level}
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    ))
                                }

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>



                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                ভর্তি পরীক্ষা
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>



                    <NavigationMenuItem>
                        <NavigationMenuTrigger>অনলাইন ব্যাচ</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-[400px] gap-3 p-4 md:w-[150px] lg:w-[150px] ">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link className="block rounded-md hover:bg-gray-100" href="/" passHref>এইচএসসি</Link>
                                    </NavigationMenuLink>
                               </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>ইংলিশ সেন্টার</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {programs.map((program) => (
                                    <li key={program}>
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="block p-3 rounded-md hover:bg-gray-100"
                                                href='/'
                                            >
                                                {program}
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>আরো</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {resources.map((component) => (
                                    <li key={component}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="block p-3 rounded-md hover:bg-gray-100"
                                                href='/'
                                            >
                                                {component}
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Manubar;