import React from "react";

interface WonBannerProps {
  tries: number;
}
export const WonBanner: React.FC<WonBannerProps> = ({ tries }) => {
  const message = "Got it in " + tries + (tries > 1 ? " guesses." : " guess.");
  return (
    <>
      <div className="happy banner">
        <p>
          <strong>Congratulations!!</strong> Got it in
          <strong>{message}</strong>
        </p>
      </div>
    </>
  );
};
