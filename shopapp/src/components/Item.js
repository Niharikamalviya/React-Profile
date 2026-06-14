import './Item.css'

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