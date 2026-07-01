import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from "./Spinner"



const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const Random = () => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');



    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const { data } = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;

        setGif(imageSource);
        setLoading(false);

    }
    useEffect(() => {
        fetchData();
    }, [])

    function clickHandler() {
        fetchData();

    }
    return (
        <div className="w-1/2 bg-green-500 rounded-lg flex flex-col items-center border border-black">
            <h1 className="text-2xl font-bold uppercase underline">A Random Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif}
                    width="450" />)
            }


            <button
                className="w-10/12 bg-white rounded-lg mt-[20px] mb-[20px]"
                onClick={clickHandler}> Generate</button>
        </div>
    )
}

export default Random