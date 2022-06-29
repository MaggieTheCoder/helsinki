import React from "react";

const MostVotes = ({ votes, anecdotes }) => {
  const max = Math.max(...votes); //this gets the max value in the array

  const index = votes.indexOf(max); // this gives you the index of the max
  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[index]} <br />
      has {votes[index]} votes
    </div>
  );
};

export default MostVotes;
