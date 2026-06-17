import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { format } from 'date-fns';
import { HexColorPicker } from "react-colorful";  //imported another library for the color component

function App() {
  const [time, setTime] = useState(new Date()); //starts my clock at current time
  const [color, setColor] = useState('#000000'); //starts clock as black

  useEffect(() => { // updates the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup function to clear the interval
  }, []);

//style in p tag superimposes the color on the time and border css coming from the attached class inline

  return (
    <>
      <section id="center">
        <div>
          <h1>Color Clock</h1>
          <p className="time" style= {{color:color, border: '8px solid ' + color}}>
            {format(time, "MM/dd/yyyy HH:mm:ss")}
          </p>
        </div>
        <div>
          <h2>Current Color</h2>
          <p>{color}</p>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App
