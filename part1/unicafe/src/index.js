

import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ method, title }) => {
  return (
    <button onClick={method}>{title}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral

  return (
    <div>
      <h2>give feedback</h2>
      <Button method={() => setGood(good + 1)} title="GOOD" />
      <Button method={() => setNeutral(neutral + 1)} title="NEUTRAL" />
      <Button method={() => setBad(bad + 1)} title="BAD" />


      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total {total}</p>
      <p>Average {((good * 1) + (bad * -1)) / total}</p>
      <p>Positive {(good * 100) / total}%</p>

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)




