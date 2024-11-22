import React from "react";

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-7 py-5 pb-7 border border-border  rounded-md bg-white shadow-md mb-5">
      {children}
    </div>
  );
};

export default BackgroundWrapper;
