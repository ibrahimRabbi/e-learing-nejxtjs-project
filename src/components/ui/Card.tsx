import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { Rating as ReactRating } from '@smastrom/react-rating'

const Card = ({ data }: {data:any}) => {
    return (
        <div className="w-[250px] backdrop-blur-md bg-[rgba(131,129,129,0.32)] rounded-xl p-2">
            <Image src={data?.image} alt='liveImage' className='w-full rounded-md' height={300} width={200} />

            <div className="">
                <h1 className="text-white text-[14px] mt-1">{data?.title}</h1>
                <div className="flex justify-between items-center mt-2">
                    <ReactRating style={{ maxWidth: 60 }} value={data?.rating}/>
                    <button className="flex justify-end items-center gap-1 text-purple-400 font-semibold">Enroll <FaArrowCircleRight /></button>
               </div>
            </div>
        </div>
    );
};

export default Card;