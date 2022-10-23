import './App.css';
import {useState} from 'react';

function App() {

  const [title, setTitle] = useState('This is the First');
  console.log(useState);

  const handleClick = () => {
    setTitle("New Title");
    console.log(title);
  }
  return (
    <>
    <h2>{title}</h2>
    <button onClick={handleClick}>Change Title</button>


    </>
  );
}



export default App;
