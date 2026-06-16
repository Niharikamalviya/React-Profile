import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
    return (
        <div>
            <div>
                <img src={review.avatar} />
            </div>

            <div>
                <p>{review.name}</p>
            </div>

            <div>
                <p>{review.role}</p>
            </div>

            <div>
                <FaQuoteLeft />
            </div>

            <div>
                {review.text}
            </div>

            <div>
                <FaQuoteRight />
            </div>

            <button>
                +
            </button>
            <button>
                -
            </button>

            <div>
                <button>
                    Surprized Me
                </button>
            </div>
        </div>


    )
}

export default Card