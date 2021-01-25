import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const votes = new Array(6).fill(0)
  const [arr, setArr] = useState(votes)

  const help = (votes, idx) => {
    const copy = [...votes]
    copy[idx] += 1
    return copy
  }
  let i = arr.indexOf(Math.max(...arr));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <button onClick={() => setArr(help(arr, selected))}>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>Next anecdote</button>
      <p>{anecdotes[selected]}</p>
      <p>has {arr[selected]} votes</p>
      <h2>Anecdote with most votes: </h2>
      <p>{anecdotes[i]}</p>
      <p>has {arr[i]} votes</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)




