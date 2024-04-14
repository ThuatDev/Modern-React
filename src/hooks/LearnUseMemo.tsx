import React, { useMemo, useState } from "react";

export default function LearnUseMemo() {
  const [count, setCount] = useState(0);

  function fibonacci(n: number): number {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.time("fibonnacci star");

  const result = useMemo(() => {
    return fibonacci(22);
  }, []);
  console.timeEnd("fibonnacci star");
  return (
    <div>
      <>
        <p>Count:{count}</p>
        <p>Result:{result}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
        >
          Button
        </button>
      </>
    </div>
  );
}
