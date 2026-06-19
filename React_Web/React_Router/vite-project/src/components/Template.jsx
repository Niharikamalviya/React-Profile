import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { FcGoogle } from "react-icons/fc";


const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className="max-w-[1160px] w-11/12 py-2 mx-auto justify-between gap-x-12 gap-y-0 flex">
            <div className="w-11/2 max-w-[450px]">
                <h1 className="text-white text-[1.875rem] leading-[2.375rem] font-semibold">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-white">{desc1}</span>
                    <br />
                    <span className="text-blue-300 italic">{desc2}</span>
                </p>

                {formtype === "signup" ?
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] bg-gray-500 w-full"></div>
                    <p className="text-gray-500 font-medium leading-[1.375rem]">OR</p>
                    <div className="h-[1px] bg-gray-500 w-full"></div>
                </div>

                <button className=" w-full flex gap-2 items-center justify-center py-2 border text-gray-300 font-medium rounded-md">
                    <FcGoogle />
                    <p> Sign Up with Google</p>
                </button>

            </div>

            <div className="relative w-11/12 max-w-[450px] py-12">
                <img src={frameImage}
                    alt="frame"
                    width={558}
                    heigth={504}
                    loading="lasy"
                />

                <img src={image}
                    alt="student"
                    width={558}
                    heigth={490}
                    loading="lasy"
                    className="absolute top-8 right-4"
                />
            </div>
        </div>
    )
}

export default Template