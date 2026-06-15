import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  useEffect(() => {
    console.log("UI rendering DOne");
  });
  const [text, setText] = useState('');
  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>

    </div>
  );
}

export default App;
