import React from "react";
import "./Controls.css";

const Controls = ({ generateArray, startSort, setSpeed, isSorting, userInput, setUserInput }) => {
    return (
        <div className="controls-container">
            <div className="input-wrapper">
                <input type="text" value={userInput} className="neumorphic-input" onChange={e => setUserInput(e.target.value)} placeholder="Enter your Array here..." />
                <div className="info-icon-wrapper">
                    <i classN="info-icon">i</i>
                    <span className="tooltip-text">Provide your array by comma separated integer</span>
                </div>
            </div>
            <button className="neu-button" onClick={() => generateArray(30)} disabled={isSorting}>
                Generate New Array
            </button>
            <button className="neu-button" onClick={() => startSort("bubbleSort")} disabled={isSorting}>
                Bubble Sort
            </button>
            <button className="neu-button" onClick={() => startSort("mergeSort")} disabled={isSorting}>
                Merge Sort
            </button>
            <label>
                Speed:
                <input
                    type="range"
                    min="10"
                    max="200"
                    className="speedControl"
                    onChange={(e) => setSpeed(200 - e.target.value)}
                    disabled={isSorting}
                />
            </label>
        </div>
    );
};

export default Controls;
