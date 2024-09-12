import React from "react";
import CompC from "./CompC";

const CompB = (props) => {
  return (
    <>
      <hr></hr>
      <h1>component B</h1>
      <CompC studentMarks={props.studentMarks} />
    </>
  );
};

export default CompB;
