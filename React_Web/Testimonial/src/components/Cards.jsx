import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
    let review = props.review;
    return (
        <div className="md:relative flex flex-col">
            <div className="absolute top-[-7rem]  mx-auto z-[10]">
                <img
                    className="aspect-squre rounded-full w-[140px] h-[140px] z-[20]"
                    src={review.avatar} />
                <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] left-[10px] z-[-10]">

                </div>

            </div>


            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
            </div>

            <div className="text-center mt-7">
                <p className="text-violet-300 uppercase text-sm">{review.role}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>


        </div>


    )
}

export default Card