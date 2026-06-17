
import Testimonial from './components/Testimonial';
import { reviews } from './data';


function App() {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-5">Our Testimonials</h1>
          <div className="bg-violet-400 h-[4px] mx-auto w-1/5 mt-1"></div>
          <Testimonial reviews={reviews} />
        </div>
      </div>
    </>
  );
}

export default App;
