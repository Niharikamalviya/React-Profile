import { useState } from 'react'
import Random from "./components/Random"
import Tags from "./components/Tags"


const App = () => {


  return (
    <>
      <div className="relavite w-full h-full flex flex-col background items-center">
        <h1 className="absolute bg-white rounded-sm text-center mt-[40px]  w-11/12  px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
        <div className="w-full flex flex-col items-center mt-[8rem]">
          <Random />
          <Tags />
        </div>

      </div>



    </>
  )
}


export default App
