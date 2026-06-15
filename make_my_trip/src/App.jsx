import { useState } from 'react'
import data from './data'
import Tours from "./components/Tours"
import './App.css'

const App = () => {
  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);


  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1>no tours left</h1>
        <button onClick={() => setTours(data)}>
          Refresh</button>

      </div>
    );
  }


  return (
    <>

      <div>
        <h2>Plan For Trip</h2>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>





    </>
  )
}

export default App;
