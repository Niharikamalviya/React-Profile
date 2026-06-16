import logo from './logo.svg';
import './App.css';
import Testimonial from './components/Testimonial';
import { reviews } from './data';


const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
