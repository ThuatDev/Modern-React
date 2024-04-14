import React, { useState } from "react";

export default function LearnUstate() {
  const [count, setCount] = useState<number>(0); // Định kiểu cho state 'count' là number

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
