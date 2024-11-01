import { useState } from "react";
import s from "./Options.module.css";
const Options = ({ onFeedback, onReset }) => {
  return (
    <div className={s.optionsContainer}>
      <button className={s.btn} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      <button className={s.btn} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Options;
