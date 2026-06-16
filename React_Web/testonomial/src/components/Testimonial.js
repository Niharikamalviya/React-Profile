import React from 'react'
import Card from "./Cards"

const testimonial = (props) => {
    let reviews = props.reviews;


    return (
        <div>
            <Card review={reviews[0]} ></Card>
        </div>

    )
}

export default testimonial 