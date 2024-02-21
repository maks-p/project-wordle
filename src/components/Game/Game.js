import React from "react";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("active");

  const addGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus("winner");
      return;
    }

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("loser");
      return;
    }
  };

  const Winner = () => (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length} guesses</strong>.
      </p>
    </div>
  );

  const Loser = () => (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} status={status} />
      {status === "winner" && Winner()}
      {status === "loser" && Loser()}
    </>
  );
}

export default Game;
