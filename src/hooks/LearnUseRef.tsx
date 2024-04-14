import React, { useRef, useState } from "react";

const LearnUseRef = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const [refValue, setRefValue] = useState(countRef.current);
  console.log("onclicj", countRef.current);
  const handleClick = () => {
    countRef.current = countRef.current + 1;
    setRefValue(countRef.current);
    console.log(countRef.current);
    console.log("debug", countRef.current);
  };

  return (
    <div>
      <p>{refValue}</p>

      <button className="" onClick={handleClick}>
        Click Button
      </button>
    </div>
  );
};

export default LearnUseRef;
