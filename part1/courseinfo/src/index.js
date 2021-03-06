import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part name={props.part[0].name} exercises={props.part[0].exercises} />
      <Part name={props.part[1].name} exercises={props.part[1].exercises} />
      <Part name={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
  )

}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content part={course.part} />
      <Total part={course.part} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))



