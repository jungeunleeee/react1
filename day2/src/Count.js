import React, {useState} from 'react'
import EvenOdd from './EvenOdd';
import Container from './Container';


export default function Count({init}) {
  console.log(`main에서 render`)  
  const [count, setCount] = useState(init);

  const onIncrement = () => {
    // 반복처리를 하려면 useState가 알아야 함. update함수라고 함.
    setCount((prevNum => prevNum+1));
  }

  const onDecrement = () => {
    setCount(count - 1);
  }



  return (
    <Container>
        <h2>{count}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <EvenOdd count/>
    </Container>
  )
}

// 만약에 초깃값에 문제가 있을 시
Count.defaultProps = {
  init: 0       
}
