import React from "react";

const Content = ({ children }) => {
  return (
    <main className="rounded-t-3xl rounded-b-lg flex flex-col ds:flex-row-reverse justify-center items-center mx-6 mt-4 bg-cardBackground">
      {children}
    </main>
  );
};

export default Content;
