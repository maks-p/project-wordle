import React from "react";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuess = { value: guess, id: crypto.randomUUID() };
    setGuesses([...guesses, nextGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
