import React, { useState } from 'react'
// Event Handling using functional component
const Practice9 = () => {
   const [name,setName] = useState('Enter Name')
   
  return (
    <>
    <p>{name}</p>
    <button onClick={()=>setName("sauiuidhsadh")}>
        Click
    </button>
    </>
  )
}

export default Practice9