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
        navigate("../dashboard");

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
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

                <label>
                    <p>Password <sup>*</sup></p>
                    <input
                        required
                        name="password"
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter email id" />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<BiShow />) : (<BiHide />)}
                    </span>
                    <Link to="#" >
                        <p>Forget Password</p></Link>
                </label>

                <button>
                    Sign In
                </button>

            </form>
        </div>

    )

}

export default LoginForm