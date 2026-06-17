import React from 'react'
import Card from "./Cards"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react'

const testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {   //index negative ho jaye to last element  pr aa jaye index
            setIndex(reviews.length - 1);

        }
        else {
            setIndex(index - 1);
        }

    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }


    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);

    }


    return (
        <div className="w-[90vw] md:w-[700px] flex flex-col bg-white justify-center items-center mt-10 p-10 transition-all duration-700">
            <div>
                <Card review={reviews[index]} ></Card>
            </div>
            <div className="flex text-3xl mt-5 text-violet-300 font-bold mx-auto">
                <button
                    onClick={leftShiftHandler}
                    className=" cursor-pointer hover:text-violet-500 ">
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className="cursor-pointer hover:text-violet-500">
                    <IoIosArrowForward />
                </button>
            </div>

            <div>
                <button
                    onClick={surpriseHandler}
                    className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white mt-5">
                    Surprized Me
                </button>
            </div>

        </div>

    )
}

export default testimonial 