import { useState } from 'react'

import './App.css'

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event) {
  //   // console.log("printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("printing last name")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value);

  // }

  // using single state to handler multiple input fields

  const [formData, setFormData] = useState({ firstName: "", lastName: "", comments: "", isVisible: true, mode: "" });
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type, mode } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type === "checkbox" ? checked : value
      }
    });


  }

  return (
    <>
      <div>
        <form>

          <br></br>
          <input
            type="text"
            placeholder="first name"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName} />

          <br></br>
          <br></br>

          <input
            type="text"
            placeholder="last name"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName} />

          <br></br>
          <br></br>

          <textarea
            placeholder="write text here..."
            onChange={changeHandler}
            name="comments"
            value={formData.comments} />

          <input
            type="checkbox"
            onChange={changeHandler}
            name="isVisible"
            id="checkBox"
            checked={formData.isVisible}
          />

          <label htmlFor='checkBox'>I AM Agree</label>

          <br></br>
          <br></br>

          <input type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <labe htmlFor="Online-Mode">Online Mode</labe>

          <br></br>
          <br></br>

          <input type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <labe htmlFor="Offline-Mode">Offline Mode</labe>



        </form>
      </div>
    </>
  )
}

export default App
