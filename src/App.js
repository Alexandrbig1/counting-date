import React, { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const year = new Date().getFullYear();
  const currDate = new Date().getDate();
  const month = new Date().getMonth();
  const date = new Date(`${month + 1} ${currDate} ${year}`);
  date.setDate(date.getDate() + count);

  function decreaseValue() {
    setCount((prevState) => prevState - step);
  }

  function increaseValue() {
    setCount((prevState) => prevState + step);
  }
  function decreaseValueStep() {
    setStep((prevState) => prevState - 1);
  }

  function increaseValueStep() {
    setStep((prevState) => prevState + 1);
  }

  return (
    <div className="container">
      <div className="time-wrapper">
        <div className="step-wrapper">
          <button className="btn btn-decr" onClick={decreaseValueStep}>
            -
          </button>
          <span className="text">Step: {step}</span>
          <button className="btn btn-incr" onClick={increaseValueStep}>
            +
          </button>
        </div>
        <div className="count-wrapper">
          <button className="btn btn-decr" onClick={decreaseValue}>
            -
          </button>
          <span className="text">Count: {count}</span>
          <button className="btn btn-incr" onClick={increaseValue}>
            +
          </button>
        </div>
        <p>
          <span className="text">
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span className="text">{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
