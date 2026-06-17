import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "India", address: "", city: "", state: "", ZIP: "", comment: false, candidate: false, offer: false, pushNotification: "" });


  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type === "checkbox" ? checked : value
      }

    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("form details");
    console.log(formData);

  }




  return (
    <>
      <div className="flex flex-col items-center mt-10 mb-10">
        <form onSubmit={submitHandler}>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input
            type="text"
            placeholder="Niharika"
            id="firstname"
            name="firstName"
            onChange={changeHandler}
            value={formData.firstName}
            className="outline" />
          <br />

          <label htmlFor="lastname">Last Name</label>
          <br />
          <input
            type="text"
            placeholder="Malviya"
            id="lasstname"
            name="lastName"
            onChange={changeHandler}
            value={formData.lastName}
            className="outline" />
          <br />

          <label htmlFor="emailID">Email Addess</label>
          <br />
          <input
            type="text"
            placeholder="neharikamalviya@gmail.com"
            id="emailID"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="outline" />
          <br />

          <label htmlFor="countryname">Country</label>

          <br />
          <select
            id="countryname"
            type="text"
            name="country"
            onChange={changeHandler}
            value={formData.country}
            className="outline"

          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Korea">Korea</option>
            <option value="Canada">Canada</option>
            <option value="Nepal">Nepal</option>
            <option value="China">China</option>
          </select>



          <br />
          <label htmlFor="streetAddress">Street Address</label>
          <br />
          <input
            type="text"
            placeholder="134Main,rd indore"
            name="address"
            id="streetAddress"
            onChange={changeHandler}
            value={formData.address}
            className="outline"
          />
          <br />

          <label htmlFor="cityname">City</label>
          <br />
          <input
            type="text"
            placeholder="Indore"
            name="city"
            id="cityname"
            onChange={changeHandler}
            value={formData.city}
            className="outline"
          />
          <br />

          <label htmlFor="statename">State/Province</label>
          <br />
          <input
            type="text"
            placeholder="Madhya Pradesh"
            name="state"
            id="statename"
            onChange={changeHandler}
            value={formData.state}
            className="outline"
          />
          <br />

          <label htmlFor="ZIPcode">ZIP/Postal code</label>
          <br />
          <input
            type="text"
            placeholder="718891"
            name="ZIP"
            id="ZIPcode"
            onChange={changeHandler}
            value={formData.ZIP}
            className="outline"
          />
          <br />

          <p>By Email</p>

          <br />


          <input
            type="checkbox"
            id="comments"
            name="comment"
            onChange={changeHandler}
            checked={formData.comment}
          />
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someones posts a comment on a posting.</p>

          <br />
          <input
            type="checkbox"
            id="candidate"
            name="candidate"
            onChange={changeHandler}
            checked={formData.candidate} />
          <label htmlFor="candidate">Candidates</label>
          <p>Get notified when someones posts a comment on a posting.</p>


          <br />
          <input
            type="checkbox"
            id="offer"
            name="offer"
            onChange={changeHandler}
            checked={formData.offer} />

          <label htmlFor="offer">Offers</label>

          <br />
          <p>Get notified when someones posts a comment on a posting.</p>
          <br />

          <p>Push Notification</p>
          <br />
          <p>These are delivered via SMS to your mobile phone.</p>
          <br />

          <input
            type="radio"
            onChange={changeHandler}
            name="pushNotification"
            id="everthing"
            value="Everthing" />
          <label htmlFor="everthing">Everthing</label>

          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="pushNotification"
            id="same-as-email"
            value="Same as email" />
          <label htmlFor="same-as-email">Same as email</label>

          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="pushNotification"
            id="no-push"
            value="No Push Notification" />
          <label htmlFor="no-push">No Push Notification</label>

          <br />
          <button className="border rounded-md px-2 bg-blue-500 text-white py-2">Submit</button>


        </form>

      </div >

    </>
  )
}

export default App
