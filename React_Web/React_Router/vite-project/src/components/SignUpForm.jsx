import React from 'react'
import { useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", comfirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value

            }

        })

    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;

        }

        setIsLoggedIn(true);
        toast.success("Sign In");
        navigate("../dashboard");

    }
    return (

        <>
            <div className="w-[200px] flex bg-gray-800 p-1 gap-x-1 my-1 rounded-full ">
                {/* student -instructor tab */}
                <button onClick={() => setAccountType("student")}
                    className={`${accountType === "student" ?
                        "bg-gray-900 text-gray-300" : "bg-transparent text-gray-300 rounded-full px-2 py-2"
                        }`}>
                    student
                </button>
                <button onClick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor" ?
                        "bg-gray-900 text-gray-300" : "bg-transparent text-gray-300 px-2 py-2 rounded-full"
                        }`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-3">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]">First Name
                            <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            value={formData.firstname}
                            placeholder="Enter Your First Name"
                            className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[4px] border-b-blue-400 border-b"
                        >
                        </input>
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]">Last Name
                            <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            value={formData.lastname}
                            placeholder="Enter Your Last Name"
                            className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[4px] border-b-blue-400 border-b"
                        >
                        </input>
                    </label>

                </div >

                <label className="w-full relative">
                    <p className="text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]">Email Address
                        <sup className="text-pink-400">*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[4px] border-b-blue-400 border-b" />
                </label>

                <div className="flex gap-3">

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]"> Create Password
                            <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            name="password"
                            type={showPassword ? ("text") : ("password")}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[4px] border-b-blue-400 border-b" />

                        <span
                            className="absolute right-3 top-[40px] cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<BiShow fontSize={24} fill="#AFB2BF" />) : (<BiHide fontSize={24} fill="#AFB2BF" />)}
                        </span>

                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]"> Confirm Password
                            <sup className="text-pink-400">*</sup></p>
                        <input
                            required
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[4px] border-b-blue-400 border-b" />

                        <span
                            className="absolute right-3 top-[40px] cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<BiShow fontSize={24} fill="#AFB2BF" />) : (<BiHide fontSize={24} fill="#AFB2BF" />)}
                        </span>


                    </label>

                </div>

                <button className="w-full bg-yellow-500 rounded-md  font-medium text-gray-900 py-[8px] px-[12px] mt-3">
                    Create Account
                </button>

            </form>

        </>

    )
}

export default SignUpForm
