import React from "react";
import { GridColumn } from "./GridColumn";
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";
import { range } from "../../../utils";

interface WordGridProps {
  previousGuesses: {
    word: string;
    class: { letter: string; status: string }[] | null;
  }[];
}
export const WordGrid: React.FC<WordGridProps> = ({ previousGuesses }) => {
  return (
    <>
      <div className="guess-results" style={{ height: "500px" }}>
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <GridColumn
            value={previousGuesses[index] || { letter: "", status: "" }}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
