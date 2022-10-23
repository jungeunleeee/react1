import React, {useState} from 'react';
import Board from './Board';
import Button from './Button';



export default function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [numYour, setNumYour] = useState(1);
  const [sumYour, setSumYour] = useState(0);
  const [gameYourHistory, setGameYourHistory] = useState([]);

  const random = () => {
    return Math.ceil(Math.random() *6);
  }

  const handleClick = () => {
    // random 함수를 호출하면 nextNum애 return값이 전달됨
    const nextNum = random();
    setNum(nextNum);
    // gameHistory.push(nextNum);
    // console.log(gameHistory);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);


    const nextYourNum = random();
    setNumYour(nextYourNum);
    setSumYour(sumYour + nextYourNum);
    setGameYourHistory([...gameYourHistory, nextYourNum]);
    
  }

  const handleClear = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setNumYour(1);
    setSumYour(0);
    setGameYourHistory([]);
  }

  return (
    <>
      <div>
        <Button onClick={handleClick}>던지기</Button>
        <Button onClick={handleClear}>다시하기</Button>
      </div>
      <div>
        <Board 
          name="My"
          color="red" 
          num={num} 
          sum={sum} 
          gameHistory={gameHistory} 
        />
        <Board 
          name="Your" 
          color="blue" 
          num={numYour} 
          sum={sumYour} 
          gameHistory={gameYourHistory}  
        />
      </div>
    </>
  );
}
