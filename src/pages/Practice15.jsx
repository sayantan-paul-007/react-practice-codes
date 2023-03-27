import React from 'react'
import './common.css'
// import styles from './common.module.css'
// // Styling of Component in React
const paragraph={
    fontSize:'32px',
    color:'dodgerblue'
}
function Practice15(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        {/* 1. External CSS */}
        <h1 className={`${className} font-xl`}>This is CSS in React</h1>
        {/* 2. Inline CSS - We can use any const to define css of an element and then put in style attribute */}
        <p style={paragraph}>This is very Amazing</p>
        {/* 3. Module CSS - We use modules for specifying a style for a component whereas normal css class can be retracted anywhere leading to class clashing issues */}
        {/* <p className={styles["text-purple","text-xl"]}>This is CSS modules</p>
        <p className='font-xl'>Hello</p> */}
    </div>
  )
}

export default Practice15