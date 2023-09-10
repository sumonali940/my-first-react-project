import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const CountStyle = {
    border: "2px solid yellow",
    padding: "10px 0px",
  };
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={CountStyle}>
      <h3>হিসাব: {count}</h3>
      <button onClick={handleAdd}>Like</button>
      <button onClick={handleReduce}>Dislike</button>
    </div>
  );
}
