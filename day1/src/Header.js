import React from 'react'

export default function Header(props) {
  const onClick = () => {
    props.changeMode();
  }
  return (
    <>
    <header>
      <h1 onClick={onClick}>WEB</h1>
    </header>

    </>
  )
}
