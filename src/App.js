import React from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Heading from "./components/Heading";
import Description from "./components/Description";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <section className="w-screen h-screen bg-mainBackground flex flex-col items-center font-inter">
      <Content>
        <div>
          <Hero />
        </div>
        <Heading />
        <Description />
        <Statistics />
      </Content>
    </section>
  );
};

export default App;
