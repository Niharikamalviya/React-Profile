import { useState } from 'react'
import data from './data'
import Tours from "./components/Tours"
import './App.css'

function App() {
  const [Tours, setTours] = useState(data)


  return (
    <>

      <div>
        <h2>Plan For Trip</h2>
        <Tours tours={tours}></Tours>
      </div>





    </>
  )
}

export default App
