import React from "react";

const Total = ({ parts }) => {
  const ArrayOfExercises = parts.map((part) => part.exercises);
  const sumOfExercises = ArrayOfExercises.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  return <div>Number of exercises: {sumOfExercises}</div>;
};

export default Total;
