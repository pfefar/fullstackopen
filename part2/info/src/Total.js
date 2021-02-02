import React from 'react';


const Total = ({ course }) => {
  let sum = 0
  for (const el of course.parts) {
    sum += el.exercises
  }
  return (
    <p>Number of exercises {sum}</p>
  )
}


export default Total