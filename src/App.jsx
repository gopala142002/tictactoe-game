import './style.scss'
import Board from './components/board'
import { useState } from "react";
import { calculateWinner } from './components/winner';
import StatusMessage from './components/statusMessage';
import History from './components/History';

const NEW_GAME=[{squares:Array(9).fill(null),isXNext:false}];

function App() {
    const [history,setHistory] =useState(NEW_GAME);

    const [currentMove,setCurrMove]=useState(0);

    const gamingBoard=history[currentMove];

    const { winner , winningSquares }=calculateWinner(gamingBoard.squares);
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
  const onNewGameStart=()=>{
    setHistory(NEW_GAME);
    setCurrMove(0);
  }
  return (
    <div className='app'>
      <h1>
        TIC <span className='text-green'>TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard}/>

      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
      <button type='button' onClick={onNewGameStart} className={`btn-reset ${winner?`active`:``}`}>Start New Game</button>
      <h3 
        style={{
          fontWeight: 'normal',
        }}
      >
        Current Game History
      </h3>
      <History history={ history } moveTo={moveTo} currentMove={currentMove}/>
    </div>
  )
}
export default App
