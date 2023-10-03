import React from "react";

function Button(props) {
  const StartButton = (
    <>
      <div id="buttonContainer">
        <button id="button1" onClick={props.handleStart}>Start</button>
        <button id="button2" onClick={props.handleReset}>Reset</button>
        <button id="button3" onClick={props.handlePauseResume}>
          {props.isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    </>
  );

  return (
    <div>
      <div>{StartButton}</div>
    </div>
  );
}

export default Button;
