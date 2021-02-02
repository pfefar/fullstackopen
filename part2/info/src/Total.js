import React from 'react';


const Total = ({ course }) => {

  const parts = course.parts
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}


export default Total