import React from "react";
// import Part from "./Part";

const Content = ({ parts }) => {
  console.log(parts);

  return (
    <div>
      {parts.map(({ name, exercises }) => (
        <p key={name}>
          {name} {exercises}
        </p>
      ))}
    </div>
  );
};

export default Content;
