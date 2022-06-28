import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({
  good,
  bad,
  neutral,
  allClicks,
  AverageScore,
  PositivePercentage,
}) => {
  if (allClicks === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="all clicks" value={allClicks} />
        <StatisticLine text="average" value={AverageScore} />
        <StatisticLine text="positive" value={PositivePercentage} />
      </tbody>
    </table>
  );
};

export default Statistics;
