import React from "react";

interface LostBannerProps {
  answer: string;
}
export const LostBanner: React.FC<LostBannerProps> = ({ answer }) => {
  return (
    <>
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    </>
  );
};
