import { useState } from "react";
import "./App.css";
import React from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options onFeedback={handleFeedback} onReset={handleReset} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
