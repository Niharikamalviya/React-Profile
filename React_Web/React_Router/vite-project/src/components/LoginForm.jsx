import React from 'react'
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("login Data");
        console.log(formData)
        navigate("../dashboard");

    }

    return (

        <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">
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
                    className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b-blue-400 border-b" />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]">Password
                    <sup className="text-pink-400">*</sup></p>
                <input
                    required
                    name="password"
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                    className="bg-gray-800 rounded-[0.5rem] text-gray-400 w-full p-[12px] border-b-blue-400 border-b"
                />

                <span
                    className="absolute right-3 top-[40px] cursor-pointer z-100"
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                        (<BiShow fontSize={24} fill="#AFB2BF" />) :
                        (<BiHide fontSize={24} fill="#AFB2BF" />)}
                </span>


                <Link to="#" >
                    <p className="flex justify-end mt-1 text-xs mt-1 text-blue-300 ">Forget Password</p></Link>
            </label>

            <button className="bg-yellow-500 rounded-md  font-medium text-gray-900 py-[8px] px-[12px] mt-3">
                Sign In
            </button>

        </form>


    )

}

export default LoginForm