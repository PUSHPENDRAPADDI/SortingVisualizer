import React, { useState, useEffect } from "react";
import Visualizer from "./components/Visualizer";
import Controls from "./components/Controls";
import { bubbleSort } from "./algorithms/BubbleSort";
import { mergeSort } from "./algorithms/mergSort";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    const arr = userInput?.split(',');
    const integerArray = arr?.filter(item => !isNaN(item) && Number.isInteger(parseFloat(item))).map(item => Number(item));
    if (integerArray && integerArray.length > 0) setArray(integerArray);
  }, [userInput]);


  const generateArray = (size = 30) => {
    if (isSorting) return;
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 500)
    );
    setUserInput('');
    setArray(newArray);
  };

  const startSort = (algorithm) => {
    if (isSorting) return;
    let animations = [];
    setIsSorting(true);
    switch (algorithm) {
      case "bubbleSort":
        animations = bubbleSort(array);
        animateSorting(animations);
        break;
      case "mergeSort":
        animations = mergeSort(array);
        animateMergeSorting(animations);
        break;
      default:
        break;
    }
  };
  const animateMergeSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = bars[barOneIdx];
        const barTwo = bars[barTwoIdx];
        const color = i % 3 === 0 ? "yellow" : "blue";
        setTimeout(() => {
          barOne.style.backgroundColor = color;
          barTwo.style.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`;
          barOne.innerHTML = newHeight;
        }, i * speed);
      }
    }

    setTimeout(() => {
      setIsSorting(false);
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
    }, animations.length * speed);
  };
  const animateSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";
        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerHTML;
          barOne.innerHTML = barTwo.innerHTML;
          barTwo.innerHTML = tempContent;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, speed);
      }, i * speed);
    }
    setTimeout(() => {
      setIsSorting(false);
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
    }, animations.length * speed);
  };

  return (
    <div className="App">
      <Controls
        generateArray={generateArray}
        startSort={startSort}
        setSpeed={setSpeed}
        isSorting={isSorting}
        setUserInput={setUserInput}
        userInput={userInput}
      />
      <Visualizer array={array} />
    </div>
  );
}

export default App;
