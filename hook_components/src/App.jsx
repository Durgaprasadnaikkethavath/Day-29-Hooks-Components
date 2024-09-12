import React from "react";
import CompA from "./CompA";

const App = () => {
  let studentMarks = 99;
  return (
    <>
      <CompA studentMarks={studentMarks} />
    </>
  );
};

export default App;
