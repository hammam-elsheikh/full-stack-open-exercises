/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>
        {value}
        {text === "positive" ? "%" : ""}
      </td>
    </>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good || neutral || bad)
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={all} />
            </tr>
            <tr>
              <StatisticLine text="average" value={average.toFixed(1)} />
            </tr>
            <tr>
              <StatisticLine text="positive" value={positive.toFixed(1)} />
            </tr>
          </tbody>
        </table>
      </>
    );
  else
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
}

export default App;
