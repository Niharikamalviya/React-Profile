import React from 'react'
import { useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", comfirmPassword: "" });
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
            <div>
                {/* student -instructor tab */}
                <button>
                    student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            value={formData.firstname}
                            placeholder="Enter Your First Name"
                        >
                        </input>
                    </label>

                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            value={formData.lastname}
                            placeholder="Enter Your Last Name"
                        >
                        </input>
                    </label>

                </div>

                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id" />
                </label>

                <div>

                    <label>
                        <p> Create Password <sup>*</sup></p>
                        <input
                            required
                            name="password"
                            type={showPassword ? ("text") : ("password")}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password" />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<BiShow />) : (<BiHide />)}
                        </span>

                    </label>

                    <label>
                        <p> Confirm Password <sup>*</sup></p>
                        <input
                            required
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmpassword}
                            onChange={changeHandler}
                            placeholder="Confirm Password" />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<BiShow />) : (<BiHide />)}
                        </span>


                    </label>

                </div>

                <button>
                    Create Account
                </button>

            </form>

        </>

    )
}

export default SignUpForm
