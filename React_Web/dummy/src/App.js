import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import './App.css';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      console.log("API Response:", output);

      setCourses(output.data);

    }
    catch (error) {
      toast.error("something went to wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();
  //       // save data
  //       setCourses(output.data);
  //     }
  //     catch (error) {
  //       toast.error("somthing went wrong");

  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <div className="App">
      <div>
        <Navbar /></div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>

        {loading ? (<Spinner />) : (<Cards courses={courses} />)
        }

      </div>
    </div>
  );
}

export default App;
