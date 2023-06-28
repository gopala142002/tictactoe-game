import React from "react";
const StatusMessage =({winner ,isXNext,squares})=>
{
    const noMovesLeft=squares.every(squareValue => squareValue!==null);
    const nextPlayer=isXNext?'X':'O';

    // const statusMessage=winner?`Winner is ${winner}`:`Next Player is ${nextPlayer}`;

    const renderStatusMessage = () =>{
        if(winner)
        {
            return <>Winner is <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span></>
        }
        if(!winner && noMovesLeft)
        {
            return <><span className="text-orange">O</span> And <span className="text-green">X</span> Tied</>
        }
        if(!winner && !noMovesLeft)
        {
            return <>Next Player is <span className={isXNext?'text-green':'text-orange'}>{nextPlayer}</span></>
        }
        return null;
    }
    return <h2 className="status-message ">{renderStatusMessage()}</h2>
}
export default StatusMessage; 