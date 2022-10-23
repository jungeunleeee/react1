import React from 'react';
import './Button.css';
// const baseButtonStyle = {
//   padding: '14px 27px',
//   borderRadius : '30px',
//   outLine : 'none',
//   cursor: 'pointer',
//   fontSize: '15px',
//   fontWeight : '700',
// }

// const redButtonStyle = {
//   ...baseButtonStyle,
//   backgroundColor : 'rgba(0,89,255,.2)',
//   border : '1px solid #7090ff',
//   color : '#7090ff',
// }

// const blueButtonStyle = {
//   ...baseButtonStyle,
//   backgroundColor : 'rgba(255,78,78,.2)',
//   border : '1px solid #ff4664',
//   color : '#gg4664',
// }


export default function Button({children, onClick, color}) {
  // const style = color === 'red' ? redButtonStyle: blueButtonStyle;

  const classNames = `Button ${color}`

  return (
    <>
        {/* <button style={style}  onClick={onClick}>{children}</button> */}
        <button className={classNames}  onClick={onClick}>{children}</button>
    </>
  )
}
