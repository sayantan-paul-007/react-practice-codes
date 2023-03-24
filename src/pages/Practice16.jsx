import React from 'react'

const Practice16 = () => {
    const names = ['Priti','Naveen', 'Yogesh','Priti']
  return (
    <div>
        {
            names.map((named,index) => <h1 key={index}>{index   }{named}</h1> )
        }
    </div>
  )
}
// Keys should be unique so if in case there are no ids present in array then use the index of array as keys  
export default Practice16
// Conditions for using array index as a key
// 1. Items should not have unique id or in other words duplicate values.
// 2. Static list 
// 3. List which are never ordered or filtered