import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  const numOfExercises = course.parts.map((part) => part.exercises);
  const sumOfExercises = numOfExercises.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sumOfExercises={sumOfExercises} />
    </div>
  );
};

export default Course;
