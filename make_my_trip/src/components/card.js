function Card({ id, image, info, price, name }) {
    const [readmore, setReadmore] = useState(false);
    const description = `${info.substring(0, 200)}...`


    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function removeTour(id) {

    }

    return (

        <div classNmae="card">
            <img src={image} alt=""></img>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>

            </div>
            <div className="description">{description}
                <span className="read-more" onclick={readmoreHandler}>
                    {readmore ? `show less` : `show more`}
                </span>
            </div>
            <button className="btn-red" onClick={removeTour}>
                Not Interested
            </button>
        </div>

    );

}

export default Card;
