
import {useState} from 'react';
import Count from './Count';
export default function App() {
  const counterProps = {
    a:1,
    b:1,
    c:3,
    d:4,
    init: 100
  }
  return (
    <>
       <Count {...counterProps} />
    </>
  );
}

