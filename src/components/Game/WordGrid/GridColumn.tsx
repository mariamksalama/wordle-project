import React from "react";
import { range } from "../../../utils";

interface GridColumnProps {
  value: {
    word: string;
    class: { letter: string; status: string }[] | null;
  };
}
export const GridColumn: React.FC<GridColumnProps> = ({ value }) => {
  return (
    <>
      <div className="guess-results">
        <p className="guess">
          {value.class != null
            ? value.class.map(({ letter, status }, index) => (
                <span key={index} className={"cell " + status}>
                  {letter}
                </span>
              ))
            : range(5).map((index) => {
                return <span className="cell" key={index}></span>;
              })}
        </p>
      </div>
    </>
  );
};
