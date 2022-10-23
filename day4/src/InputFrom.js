import React, {useState} from 'react'

export default function InputFrom() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
      setText(e.target.value);
  }

  const handleReset = () => {
    setText('');
  }

  return (
    <div>
      {/* value값을 넣은 이유는 초기화하기위해 */}
        <input  onChange={handleChange} value={text}/>
        <button onClick={handleReset}>초기화</button>
        <div>
          <b>값:{text}</b>
        </div>
    </div>
  )
}
