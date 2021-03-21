import React from 'react';


const Square = ({value, onClick}) => {
   return (
        <button className={`square ${value}`} onClick = {onClick}>
        </button>
    )
}

export default Square;