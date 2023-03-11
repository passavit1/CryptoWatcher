import { useState } from "react";

const TestFunction = () => {
  const [box, setBox] = useState([]);

  const handleDelete = (index) => {
    setBox(box.filter((b, i) => i !== index));
  };

  return (
    <>
      <button
        onClick={() => {
          if (box.length < 6) {
            setBox([
              ...box,
              <div key={box.length}>hello {box.length + 1}</div>,
            ]);
          } else {
            alert("You cannot create more than 6 boxes");
          }
        }}
      >
        +
      </button>
      <div>
        {box.map((b, i) => (
          <div key={i}>
            {b}
            <button onClick={() => handleDelete(i)}>Delete</button>;
          </div>
        ))}
      </div>
    </>
  );
};

export default TestFunction;
