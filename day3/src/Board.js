import React from 'react';
import {useState} from 'react';
import Dice from './Dice';


export default function Board({name, color, gameHistory}) {

  // 배열에 들어온게 없으면 1을 넣어
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a,b)=>{
    return a +b;
  },0);

  return (
    <div className="Board App-board">
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <div>
        <h2 className="Board-heading">총점</h2>
        <p>{sum}</p>
        <h2 className="Board-heading">기록</h2>
        {gameHistory.join(' , ')}
      </div>
    </div>
  );
}
