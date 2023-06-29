import './style.scss'
import Board from './components/board'
import { useState } from "react";
import { calculateWinner } from './components/winner';
import StatusMessage from './components/statusMessage';
import History from './components/History';



function App() {
    const [history,setHistory] =useState([{squares:Array(9).fill(null),isXNext:false}]);

    const [currentMove,setCurrMove]=useState(0);

    const gamingBoard=history[currentMove];

    const winner=calculateWinner(gamingBoard.squares);
    console.log({history,currentMove});


    const handleSquareClick = clickedPosition => {
    if(gamingBoard. squares[clickedPosition] || winner)
        return;  
    setHistory(currentHistory => {
      const isTraversing=currentMove+1!==history.length;

      const lastGamingState = isTraversing?currentHistory[currentMove]:history[history.length-1];
        const nextSquareState=lastGamingState.squares.map((squareValue,position) => {
            if(clickedPosition === position) {
                return lastGamingState.isXNext?'X':'O';
            }
            
            return squareValue;
        });
        const base=isTraversing?currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1):currentHistory;
        return base.concat({squares : nextSquareState,isXNext : !lastGamingState.isXNext}); 
    }); 
    setCurrMove(move => move+1);
  };

  const moveTo= move => {
    setCurrMove(move);
  };

  return (
    <div className='app'>
      <div>
        <StatusMessage winner={winner} gamingBoard={gamingBoard}/>

        <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} />
        <h3>Current Game History</h3>
        <History history={ history } moveTo={moveTo} currentMove={currentMove}/>
      </div>
    </div>
  )
}
export default App
