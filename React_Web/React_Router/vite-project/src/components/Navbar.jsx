import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/icon.png"
import { toast } from "react-hot-toast"



const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/">
                <img src={logo} alt="Logo" width={160} heigth={32} loading="lazy"
                /></Link>

            <nav>
                <ul className="flex gap-3 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>



                    <li>
                        <Link to="/">About</Link>
                    </li>


                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* login-signup logout dashboard */}

            <div className="flex ml-5 mr-3 items-center gap-3">
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className=" rounded-md bg-gray-900 py-1 px-2 text-gray-400">
                            Login
                        </button>
                    </Link>
                }

                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className="rounded-md bg-gray-900 py-1 px-2 text-gray-400">
                            SignUp
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }}
                            className="rounded-md bg-gray-900 py-1 px-2 text-gray-400">
                            Log Out
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="rounded-md bg-gray-900 py-1 px-2 text-gray-400">
                            Dashboard
                        </button>
                    </Link>
                }
            </div >

        </div >
    )
}

export default Navbar