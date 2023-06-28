import { useState } from 'react';
import './style.scss'
import Board from './components/board'
function App() {
  const [counter,setCounter]=useState(1);
  const onBtnClick=()=>{
    setCounter(counter+1);
  };
  return (
    <div className='app'>
      <div>
        <button onClick={onBtnClick}>Click Me Please</button>
        <div>{counter}</div>
      </div>
    </div>
  )
}
export default App
