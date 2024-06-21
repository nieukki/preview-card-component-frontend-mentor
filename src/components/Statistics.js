import React from "react";

const Statistics = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-6 my-6 px-4 ds:flex-row ">
      <div className="flex flex-col justify-center items-center gap-y-1">
        <h2 className="text-whiteColor font-bold text-3xl">10k+</h2>
        <p className="text-whiteStatHeading text-sm font-lexend font-light">
          COMPANIES
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-1">
        <h2 className="text-whiteColor font-bold text-3xl">314</h2>
        <p className="text-whiteStatHeading text-sm font-lexend font-light">
          TEMPLATES
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-1">
        <h2 className="text-whiteColor font-bold text-3xl">12M+</h2>
        <p className="text-whiteStatHeading text-sm font-lexend font-light">
          QUERIES
        </p>
      </div>
    </section>
  );
};

export default Statistics;
