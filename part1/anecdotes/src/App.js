import React, { useState } from "react";
import Button from "./Button";
import MostVotes from "./MostVotes";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
];

const zeroPoints = new Array(anecdotes.length).fill(0);
console.log(zeroPoints);

const App = () => {
  //when application first loads, state is 0 and thus displays array element at index 0
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(zeroPoints);
  console.log(votes);

  const handleAnecdote = () => {
    //here we are setting the selected array to a random index in the anecdotes array
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    //we have created an array called zeropoints and votes = zeropoints
    //we then create an array called newVotes which is a copy of the 'votes' array and in this function 1 is added to each index of the selected array
    const newVotes = [...votes];
    newVotes[selected] += 1;

    setVotes(newVotes);
  };

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <br />
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleAnecdote} text="next anecdote" />
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
