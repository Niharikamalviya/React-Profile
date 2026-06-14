import logo from './logo.svg';
import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div>
      <Item></Item>
      <div className="App">
        good morning
        <Item date="20" month="july" year="1990"></Item>
        <Item date="10" month="june" year="1998"></Item>
        <Item date="12" month="april" year="2003"></Item>
      </div>

    </div>
  );
}

export default App;
