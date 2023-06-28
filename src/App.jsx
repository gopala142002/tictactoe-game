import './style.scss'
import Board from './components/board'
import { useState } from "react";
import { calculateWinner } from './components/winner';
import StatusMessage from './components/statusMessage';


function App() {
    const [squares , setSquares] = useState(Array(9).fill(null));
    const [isXNext,setIsXNext]=useState(false);

    const winner=calculateWinner(squares);

    const handleSquareClick = clickedPosition => {
    if(squares[clickedPosition] || winner)
        return;
    setSquares(currentSquares => {
        return currentSquares.map((squareValue,position) => {
            if(clickedPosition === position) {
                return isXNext?'X':'O';
            }
            
            return squareValue;
        });
    });
    setIsXNext((currIsXNext) => !currIsXNext);
  };
  return (
    <div className='app'>
      <div>
        <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    </div>
  )
}
export default App
