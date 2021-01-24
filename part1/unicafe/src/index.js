

import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ method, title }) => {
  return (
    <button onClick={method}>{title}</button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text} : {value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  const average = ((good * 1) + (bad * -1)) / total
  const positive = (good * 100) / total

  return (
    <div>
      <h2>give feedback</h2>
      <Button method={() => setGood(good + 1)} title="GOOD" />
      <Button method={() => setNeutral(neutral + 1)} title="NEUTRAL" />
      <Button method={() => setBad(bad + 1)} title="BAD" />
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="total" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)




