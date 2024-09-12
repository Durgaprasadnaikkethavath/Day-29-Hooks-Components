import React from "react";
import CompB from "./CompB";

const CompA = (props) => {
  return (
    <>
      <hr></hr>
      <h1>component A</h1>
      <CompB studentMarks={props.studentMarks} />
    </>
  );
};

export default CompA;
