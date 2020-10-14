import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Header = (props) => (
  <h1>
    {props.text}
  </h1>
)

const GenerateRandomNumber = ({ length }) => (
  Math.floor(Math.random() * length)
)

const TopVotes = (votes) => {
  return Math.max.apply(Math, votes)
}

const Vote = (votes, index) => {
  const copy = [...votes]
  copy[index] += 1
  return copy
}

const TopAnecdote = (anecdotes, votes) => {
  const anecdoteIndex = votes.indexOf(TopVotes(votes))
  return anecdotes[anecdoteIndex]
}

const Anecdote = ({ anecdote, votes }) => (
  <p>
    <em>
      {anecdote}
    </em>
    <br />
      has {votes} votes
  </p>
)

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={() => setSelected(GenerateRandomNumber(anecdotes))} text="next anecdote" />
      <Button handleClick={() => setVotes(Vote(votes, selected))} text="vote" />
      <Header text="Anecdote with the most votes" />
      <Anecdote anecdote={TopAnecdote(anecdotes, votes)} votes={TopVotes(votes)} />
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