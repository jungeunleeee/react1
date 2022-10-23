import React from 'react'

export default function Container({children}) {
  return (
    <div style={{margin:100, padding: 20, border: '1px solid black'}}>{children}</div>
  )
}
