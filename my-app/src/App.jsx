import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-[100vm] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
        <div>
          <div>Increment & Decrement</div>
          <div>
            <button>-</button>
            <div></div>
            <button>+</button>
          </div>

          <div>Reset</div>
        </div>

      </div>






    </>
  )
}

export default App
