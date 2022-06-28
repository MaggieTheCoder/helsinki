import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);

  const handleGoodClick = () => {
    setAll(allClicks + 1);
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAll(allClicks + 1);
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setAll(allClicks + 1);
    setBad(bad + 1);
  };

  const AverageScore = (good - bad) / allClicks;
  const PositivePercentage = (good / allClicks) * 100;

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        allClicks={allClicks}
        AverageScore={AverageScore}
        PositivePercentage={PositivePercentage}
      />
    </div>
  );
};

export default App;
