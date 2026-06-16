import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import './App.css';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";


const App = () => {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data
        setCourses(output.data);
      }
      catch (error) {
        toast.error("somthing went wrong");

      }
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />

      <Filter filterData={filterData} />

      <Cards courses={courses} />
    </div>
  );
}

export default App;
