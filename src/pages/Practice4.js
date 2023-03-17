import React from 'react'

const Practice4 = (props) => {
  return (
    <>
    <div>Practice{props.num}</div>
    {props.children}
    </>
  )
}

export default Practice4