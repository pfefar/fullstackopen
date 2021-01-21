import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.name} {props.excount}
      </p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part name={props.name1} excount={props.excount1} />
      <Part name={props.name2} excount={props.excount2} />
      <Part name={props.name3} excount={props.excount3} />
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
)


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content name1={part1.name}
        excount1={part1.exercises}
        name2={part2.name}
        excount2={part2.exercises}
        name3={part3.name}
        excount3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))



