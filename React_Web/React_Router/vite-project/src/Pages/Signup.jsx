import React from 'react'
import Template from "../components/Template"
import SignImg from "../assets/signUp.png"

const Signup = ({ setIsLoggedIn }) => {
    return (
        <Template
            title="Join the millioons to code with studyNotion for free"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-prof your career."
            image={SignImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}

        />
    )
}

export default Signup