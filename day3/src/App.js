import React, {useState} from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';


export default function App() {
  const [gameHistory, setGameHistory] = useState([]);
  const [gameYourHistory, setGameYourHistory] = useState([]);

  const random = () => {
    return Math.ceil(Math.random() *6);
  }

  const handleClick = () => {
    // random 함수를 호출하면 nextNum애 return값이 전달됨
    const nextNum = random();
    setGameHistory([...gameHistory, nextNum]);


    const nextYourNum = random();
    setGameYourHistory([...gameYourHistory, nextYourNum]);
    
  }

  const handleClear = () => {
    setGameHistory([]);
    setGameYourHistory([]);
  }

  return (
    <div className="App">
      <div>
        <Button className='App-button' color={'red'} onClick={handleClick}>던지기</Button>
        <Button className='App-button' color={'blue'} onClick={handleClear}>다시하기</Button>
      </div>
      <div className="App-boards">
        <Board 
          name="My"
          color="red" 
          gameHistory={gameHistory} 
        />
        <Board 
          name="Your" 
          color="blue" 
          gameHistory={gameYourHistory}  
        />
      </div>
    </div>
  );
}
