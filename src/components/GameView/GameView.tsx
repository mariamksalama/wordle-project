import React, { useState } from "react";
import { GuessInput } from "../GuessInput/GuessIput";
import { WordGrid } from "../Game/WordGrid/WordGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { WonBanner } from "../Banner/WonBanner";
import { LostBanner } from "../Banner/LostBanner";

interface GameViewProps {
  answer: string;
}
export const GameView: React.FC<GameViewProps> = ({ answer }) => {
  const [status, setStatus] = useState<"running" | "won" | "lost">("running");

  const [previousGuesses, setPreviousGuesses] = useState<
    { word: string; class: { letter: string; status: string }[] | null }[]
  >([]);
  const [emptySells, setEmptySells] = useState<number>(
    NUM_OF_GUESSES_ALLOWED - previousGuesses.length
  );
  function handleSubmitGuess(guess: string) {
    setPreviousGuesses([
      ...previousGuesses,
      { word: guess, class: checkGuess(guess, answer) },
    ]);
    if (guess === answer) {
      setStatus("won");
    } else {
      if (emptySells === 1) {
        setStatus("lost");
      }
    }

    setEmptySells(emptySells - 1);
  }

  return (
    <>
      <WordGrid previousGuesses={previousGuesses} />

      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={status !== "running"}
      />

      {status === "lost" && <LostBanner answer={answer} />}

      {status === "won" && <WonBanner tries={previousGuesses.length} />}
    </>
  );
};
