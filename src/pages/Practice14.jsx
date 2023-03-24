import React from 'react'
import Practice14Two from './Practice14_Two'
// List rendering 
function Practice14() {
const students = [
    {
        roll:1,
        name:'Pawan',
        age:12,
        class:6
    },
    {
        roll:2,
        name:'Jolly',
        age:13,
        class:7
    },
    {
        roll:3,
        name:'Jiya',
        age:12,
        class:5
    },
    {
        roll:4,
        name:'Agni',
        age:12,
        class:6
    },
    {
        roll:5,
        name:'Agni',
        age:12,
        class:6
    }
]
    
const studentsDetails = students.map(student => <Practice14Two key={student.roll} student={student}></Practice14Two> )


  return (
    <div>
        {
            studentsDetails
        }
    </div>
  )
}

export default Practice14