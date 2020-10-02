import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Header text="statistics"/>
      <Statistics/>
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

const Statistics = () => (
  <div>
    <p>
      good<br/>
      neutral<br/>
      bad<br/>
      all<br/>
    </p>
  </div>
)

ReactDOM.render(<App />, 
  document.getElementById('root')
) 