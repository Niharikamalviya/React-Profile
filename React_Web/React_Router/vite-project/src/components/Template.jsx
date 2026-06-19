import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype === "signup" ?
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>

            </div>

            <div>
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
                />
            </div>
        </div>
    )
}

export default Template