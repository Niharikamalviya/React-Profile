import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from "./Spinner"



const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const Tags = () => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    const [tag, setTag] = useState('');



    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        console.log(tag);
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
    function changeHandler() {
        setTag(event.target.value);

    }
    return (
        <div className="w-1/2 bg-blue-500 rounded-lg flex flex-col items-center border border-black mt-[12px]">
            <h1 className="text-2xl font-bold uppercase underline"> Random {tag} Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif}
                    width="450" />)
            }

            <input
                className="w-10/12 text-lg py-2 rounded-lg text-center bg-white mt-[12px] pt-[2px] "
                onChange={changeHandler}
                value={tag}
            />


            <button
                className="w-10/12 bg-white rounded-lg mt-[20px] mb-[20px]"
                onClick={clickHandler}> Generate</button>
        </div>
    )
}

export default Tags