import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((g) => (
        <p key={g.id}>{g.value}</p>
      ))}
    </div>
  );
}

export default GuessResults;
