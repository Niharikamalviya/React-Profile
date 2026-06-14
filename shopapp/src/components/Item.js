import React, { useState } from 'react';
import './Item.css'


const ProductItem = (props) => {
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle("Popcorn");
        console.log("button clicked");

        // return (
        //     <button onclicked="clickHandler">add to cart</button>

        // )
    }


}



function Item(props) {
    const day = props.date;
    const month = props.month;
    const year = props.year;

    return (<div className="nirma">
        <span> {day}</span>
        <span> {month}</span>
        <span> {year}</span>

    </div>

    )

};

export default Item;