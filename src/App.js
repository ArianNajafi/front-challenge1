
import './App.css';
import { useState } from 'react';
import Bord from './components/Bord';


function App() {
  const [size, setSize] = useState({ x: 0, y: 0 });
  const [showBord, setShowBord] = useState(false);



  //control x and y that be the current input
  const changeHandlerX = (value) => {
    setSize({ x: Number(value), y: size.y })
  }
  const changeHandlerY = (value,) => {
    setSize({ x: size.x, y: Number(value) })
  }
  const playHandler = () => {
    if ((size.x >= 2 && size.x <= 10) && (size.y >= 2 && size.y <= 10)) {
      setShowBord(true)
    }
    else
      alert("chosse x and y between 2 to 10")
  }

  const page = () => {
    if (!showBord) {
      return (
        <div className='chosseSizeDiv'>
          <label for="x">x:</label>
          <input className='input' type="number" name="x" value={size.x} onChange={(e) => changeHandlerX(e.target.value)}></input>
          <label for="y">y:</label>
          <input className='input' type="number" name="y" value={size.y} onChange={(e) => changeHandlerY(e.target.value)}></input>
          <button onClick={playHandler} className='playBtn'>play</button>
        </div>
      )
    }
    else {
      return <Bord size={size} />
    }
  }

  return (
    <div className="App">
      {page()}
    </div>
  );
}

export default App;
