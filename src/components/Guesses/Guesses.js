import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((g) => {
        const key = crypto.randomUUID();
        return <p key={key}>{g}</p>;
      })}
    </div>
  );
}

export default Guesses;
