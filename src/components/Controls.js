import React from "react";
import "./Controls.css";

const Controls = ({speed, generateArray, startSort, setSpeed, isSorting, userInput, setUserInput, reset }) => {
    return (
        <div className="controls-container">
            <div className="input-wrapper">
                    <input type="text" value={userInput} className="neumorphic-input" onChange={e => setUserInput(e.target.value)} placeholder="Enter your Array between 1-500" />
                <div className="info-icon-wrapper">
                    <i className="info-icon">i</i>
                    <span className="tooltip-text">Provide your array by comma separated integer</span>
                </div>
            </div>
            <button className="neu-button" onClick={generateArray} disabled={isSorting}>
                Generate New Array
            </button>
            <select onChange={(e) => startSort(e.target.value)} disabled={isSorting} className="neumorphism-dropdown">
                <option value="">Select Sorting Method</option>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="selectionSort">SelectionSort Sort</option>
            </select>
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
