import React, {useState} from 'react';
import Square from './Square';
import {calculateWinner, droppingDown} from '../utils/calculateWinner'
import ScoreBoard from './ScoreBoard';

const Board = () => {

    const [array, setArray] = useState({
        squares: Array(42).fill(null),
        isPlayerOneNext: true
    });

    const handleClick = (index) => {
        const newIndex = droppingDown(array.squares, index);
        
        if (calculateWinner(array.squares) || array.squares[newIndex]) {
            return;
        }
        if(newIndex === undefined) 
            return;
        
        let newArray = [...array.squares];

        newArray[newIndex] = array.isPlayerOneNext ? 'red' : 'yellow';

        setArray(
            {
                squares: newArray,
                isPlayerOneNext: !array.isPlayerOneNext
            }
        );
    }

    return (
        <div className="board">
            <div className = "scoreboard">
                <ScoreBoard />
            </div>
            <div className="board-row">
                {<Square value={array.squares[0]} onClick = {() => handleClick(0)}/>}
                {<Square value={array.squares[1]} onClick = {() => handleClick(1)}/>}
                {<Square value={array.squares[2]} onClick = {() => handleClick(2)}/>}
                {<Square value={array.squares[3]} onClick = {() => handleClick(3)}/>}
                {<Square value={array.squares[4]} onClick = {() => handleClick(4)}/>}
                {<Square value={array.squares[5]} onClick = {() => handleClick(5)}/>}
                {<Square value={array.squares[6]} onClick = {() => handleClick(6)}/>}
            </div>
            <div className="board-row">
                {<Square value={array.squares[7]} onClick = {() => handleClick(7)}/>}
                {<Square value={array.squares[8]} onClick = {() => handleClick(8)}/>}
                {<Square value={array.squares[9]} onClick = {() => handleClick(9)}/>}
                {<Square value={array.squares[10]} onClick = {() => handleClick(10)}/>}
                {<Square value={array.squares[11]} onClick = {() => handleClick(11)}/>}
                {<Square value={array.squares[12]} onClick = {() => handleClick(12)}/>}
                {<Square value={array.squares[13]} onClick = {() => handleClick(13)}/>}
            </div>
            <div className="board-row">
                {<Square value={array.squares[14]} onClick = {() => handleClick(14)}/>}
                {<Square value={array.squares[15]} onClick = {() => handleClick(15)}/>}
                {<Square value={array.squares[16]} onClick = {() => handleClick(16)}/>}
                {<Square value={array.squares[17]} onClick = {() => handleClick(17)}/>}
                {<Square value={array.squares[18]} onClick = {() => handleClick(18)}/>}
                {<Square value={array.squares[19]} onClick = {() => handleClick(19)}/>}
                {<Square value={array.squares[20]} onClick = {() => handleClick(20)}/>}
            </div>
            <div className="board-row">
                {<Square value={array.squares[21]} onClick = {() => handleClick(21)}/>}
                {<Square value={array.squares[22]} onClick = {() => handleClick(22)}/>}
                {<Square value={array.squares[23]} onClick = {() => handleClick(23)}/>}
                {<Square value={array.squares[24]} onClick = {() => handleClick(24)}/>}
                {<Square value={array.squares[25]} onClick = {() => handleClick(25)}/>}
                {<Square value={array.squares[26]} onClick = {() => handleClick(26)}/>}
                {<Square value={array.squares[27]} onClick = {() => handleClick(27)}/>}
            </div>
            <div className="board-row">
                {<Square value={array.squares[28]} onClick = {() => handleClick(28)}/>}
                {<Square value={array.squares[29]} onClick = {() => handleClick(29)}/>}
                {<Square value={array.squares[30]} onClick = {() => handleClick(30)}/>}
                {<Square value={array.squares[31]} onClick = {() => handleClick(31)}/>}
                {<Square value={array.squares[32]} onClick = {() => handleClick(32)}/>}
                {<Square value={array.squares[33]} onClick = {() => handleClick(33)}/>}
                {<Square value={array.squares[34]} onClick = {() => handleClick(34)}/>}
            </div>
            <div className="board-row">
                {<Square value={array.squares[35]} onClick = {() => handleClick(35)}/>}
                {<Square value={array.squares[36]} onClick = {() => handleClick(36)}/>}
                {<Square value={array.squares[37]} onClick = {() => handleClick(37)}/>}
                {<Square value={array.squares[38]} onClick = {() => handleClick(38)}/>}
                {<Square value={array.squares[39]} onClick = {() => handleClick(39)}/>}
                {<Square value={array.squares[40]} onClick = {() => handleClick(40)}/>}
                {<Square value={array.squares[41]} onClick = {() => handleClick(41)}/>}
            </div>
        </div>
    )
}

export default Board;