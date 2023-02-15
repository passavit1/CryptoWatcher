import Counter from "../../data/test";
import { useState } from "react";

const TestFunction = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        Toggle Counter
      </button>
      {showCounter && <Counter />}
    </div>
  );
};

export default TestFunction;
