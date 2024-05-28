import React, { useState } from "react";
interface GuessInputProps {
  handleSubmitGuess: (guess: string) => void;
  disabled: boolean;
}
export const GuessInput: React.FC<GuessInputProps> = ({
  handleSubmitGuess,
  disabled,
}) => {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  };
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        maxLength={5}
        minLength={5}
        required
        disabled={disabled}
      />
    </form>
  );
};
