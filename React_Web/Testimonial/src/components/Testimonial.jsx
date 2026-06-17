import React from 'react'
import Card from "./Cards"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonial = (props) => {
    let reviews = props.reviews;


    return (
        <div className="md:relative flex flex-col">
            <div>
                <Card review={reviews[0]} ></Card>
            </div>
            <div className="flex text-3xl mt-5 text-violet-300 font-bold mx-auto">
                <button className=" cursor-pointer hover:text-violet-500 ">
                    <IoIosArrowBack />
                </button>
                <button className="cursor-pointer hover:text-violet-500">
                    <IoIosArrowForward />
                </button>
            </div>

            <div>
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white mt-5">
                    Surprized Me
                </button>
            </div>

        </div>

    )
}

export default testimonial 