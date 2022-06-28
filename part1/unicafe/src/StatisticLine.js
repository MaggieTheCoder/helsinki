import React from "react";

const StatisticLine = (props) => {
  const { value, text } = props;

  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
};

export default StatisticLine;
