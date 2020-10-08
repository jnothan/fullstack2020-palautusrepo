import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statesArray = [good, neutral, bad]

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics stats={statesArray} />
    </div>
  )
}

const Header = (props) => (
  <div>
    <h1>
      {props.text}
    </h1>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  const goodStat = props.stats[0]
  const neutralStat = props.stats[1]
  const badStat = props.stats[2]
  const sum = goodStat + neutralStat + badStat
  const mean = (goodStat - badStat) / sum
  const positivePercentage = goodStat * 100 / sum + " %"

  if (sum === 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <tr><StatisticLine text="good" value={goodStat} /></tr>
        <tr><StatisticLine text="neutral" value={neutralStat} /></tr>
        <tr><StatisticLine text="bad" value={badStat} /></tr>
        <tr><StatisticLine text="all" value={sum} /></tr>
        <tr><StatisticLine text="average" value={mean} /></tr>
        <tr><StatisticLine text="positive" value={positivePercentage} /></tr>
      </tbody>
    </table >
  )
}

const StatisticLine = (props) => (
  <>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </>
)


ReactDOM.render(<App />,
  document.getElementById('root')
) 