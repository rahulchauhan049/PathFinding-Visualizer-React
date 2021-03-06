import React, { useEffect } from "react";
import { getMergeSortAnimations } from "../algorithms/sorting/mergeSort";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import styled from "styled-components";
import tw from "twin.macro"
import { getBubbleSortAnimations } from "../algorithms/sorting/bubbleSort";
import { getSelectionsortAnimations } from "../algorithms/sorting/selectionSort";
import { getInsertionSortAnimations } from "../algorithms/sorting/insertionSort";
const { JSDOM } = require("jsdom")
const { window } = new JSDOM()

function SortingVisualizer() {
  const [heightArray, setHeightArray] = React.useState([]);
  const [arrayLength, setArrayLength] = React.useState(20);
  const [timeTaken, setTimeTaken] = React.useState(0);

  useEffect(() => {
    let arrayOfSizeN = Array(arrayLength)
      .fill()
      .map((v, i) => i + 10);
    let shuffledArrayOfSizeN = arrayOfSizeN
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setHeightArray(shuffledArrayOfSizeN);
  }, [arrayLength]);

  const shuffleArray = () => {
    let arrayOfSizeN = Array(arrayLength)
      .fill()
      .map((v, i) => i + 1);
    let shuffledArrayOfSizeN = arrayOfSizeN
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setHeightArray(shuffledArrayOfSizeN);
  };

  const handleMergeSort = () => {
    let start = window.performance.now()
    let stop;
    const animations = getMergeSortAnimations(heightArray);
    animations.forEach((animation, i) => {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animation;
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "#4286f4";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animation;
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}%`;
          if (i === animations.length - 1) {
            stop = window.performance.now()
            setTimeTaken(parseFloat((stop - start) / 1000).toFixed(2))
          }
        }, i * 10);
      }
    })

  };

  const handleBubbleSort = () => {
    let start = window.performance.now()
    let stop;
    let bubbleSortAnimations = getBubbleSortAnimations(heightArray);
    console.log(bubbleSortAnimations);
    bubbleSortAnimations.forEach((animation, idx) => {
      const arrayBars = document.getElementsByClassName("array-bar");
      let animationType = animation.animationType;
      const [barOneIdx, barTwoIdx] = animation.index;
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      if (animationType === "comparing") {
        setTimeout(() => {
          barOneStyle.backgroundColor = "red";
          barTwoStyle.backgroundColor = "red";
        }, idx * 10);
      } else if (animationType === "swaping") {
        const [barOneHeight, barTwoHeight] = animation.value;
        setTimeout(() => {
          barOneStyle.height = `${barOneHeight}%`;
          barTwoStyle.height = `${barTwoHeight}%`;
        }, idx * 10);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = "#4286f4";
          barTwoStyle.backgroundColor = "#4286f4";
          if (idx === bubbleSortAnimations.length - 1) {
            stop = window.performance.now()
            setTimeTaken(parseFloat((stop - start) / 1000).toFixed(2))
          }
          
        }, idx * 10);
      }
    });
  }
    
    const handleSelectionSort = () => {
      let start = window.performance.now()
      let stop;
      let selectionSortAnimation = getSelectionsortAnimations(heightArray);
      selectionSortAnimation.forEach((animation, idx) => {
        const arrayBars = document.getElementsByClassName("array-bar");
        let animationType = animation.animationType;
        const [barOneIdx, barTwoIdx] = animation.index;
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        if (animationType === "comparing") {
          setTimeout(() => {
            for (let i = 0; i < arrayBars.length; i++) {
              if (arrayBars[i].style.backgroundColor !== "green" && arrayBars[i].style.backgroundColor !== "cyan") {
                arrayBars[i].style.backgroundColor = "#4286f4";
              }
            }
            barTwoStyle.backgroundColor = "red";
          }, idx * 10);
        } else if (animationType === "minimum") {
          setTimeout(() => {
            for (let i = 0; i < arrayBars.length; i++) {
              if (arrayBars[i].style.backgroundColor !== "cyan") {
                arrayBars[i].style.backgroundColor = "#4286f4";
              }
            }
            barOneStyle.backgroundColor = "green";
          }, idx * 10);
        } else if (animationType === "starting") {
          setTimeout(() => {
            for (let i = 0; i < arrayBars.length; i++) {
              arrayBars[i].style.backgroundColor = "#4286f4";
            }
            barOneStyle.backgroundColor = "cyan";
          }, idx * 10);
        } else if (animationType === "swaping") {
          const [barOneHeight, barTwoHeight] = animation.value;
          setTimeout(() => {
            barOneStyle.height = `${barOneHeight}%`;
            barTwoStyle.height = `${barTwoHeight}%`;
          }, idx * 10);
        } else {
          setTimeout(() => {

     
            if (idx === selectionSortAnimation.length - 1) {
              stop = window.performance.now()
              setTimeTaken(parseFloat((stop - start) / 1000).toFixed(2))
            }
            
          }, idx * 10);
        }
      });
    }
  
  // function for insertion sort
  const handleInsertionSort = () => {
    getInsertionSortAnimations(heightArray);
    // insertionSortAnimation.forEach((animation, idx) => {
    //   const arrayBars = document.getElementsByClassName("array-bar");
    //   let animationType = animation.animationType;
    //   const [barOneIdx, barTwoIdx] = animation.index;
    //   const barOneStyle = arrayBars[barOneIdx].style;
    //   const barTwoStyle = arrayBars[barTwoIdx].style;
    //   if (animationType === "comparing") {
    //     setTimeout(() => {
    //       for (let i = 0; i < arrayBars.length; i++) {
    //         if (arrayBars[i].style.backgroundColor !== "green" && arrayBars[i].style.backgroundColor !== "cyan") {
    //           arrayBars[i].style.backgroundColor = "#4286f4";
    //         }
    //       }
    //       barTwoStyle.backgroundColor = "red";
    //     }, idx * 10);
    //   } else if (animationType === "minimum") {
    //     setTimeout(() => {
    //       for (let i = 0; i < arrayBars.length; i++) {
    //         if (arrayBars[i].style.backgroundColor !== "cyan") {
    //           arrayBars[i].style.backgroundColor = "#4286f4";
    //         }
    //       }
    //       barOneStyle.backgroundColor = "green";
    //     }, idx * 10);
    //   } else if (animationType === "starting") {
    //     setTimeout(() => {
    //       for (let i = 0; i < arrayBars.length; i++) {
    //         arrayBars[i].style.backgroundColor = "#4286f4";
    //       }
    //       barOneStyle.backgroundColor = "cyan";
    //     }, idx * 10);
    //   }
    //   else if (animationType === "swaping") {
    //     const [barOneHeight, barTwoHeight] = animation.value;
    //     setTimeout(() => {
    //       barOneStyle.height = `${barOneHeight}%`;
    //       barTwoStyle.height = `${barTwoHeight}%`;
    //     }, idx * 10);
    //   }
    //   else {
    //     setTimeout(() => {
    //       if (idx === insertionSortAnimation.length - 1) {
    //         stop = window.performance.now()
    //         setTimeTaken(parseFloat((stop - start) / 1000).toFixed(2))
    //       }
    //     }, idx * 10);
    //   }
    // });
    
  }



    return (
      <App>
        <Toolbar>
          <Buttons>
            <RandomButton>
              <Button variant="text" onClick={() => shuffleArray()}>
                Random
              </Button>
            </RandomButton>
            <MergeButton>
              <Button variant="text" onClick={() => handleMergeSort()}>
                Merge Sort
              </Button>
            </MergeButton>
            <BubbleSortButton>
              <Button variant="text" onClick={() => handleBubbleSort()}>
                Bubble Sort
              </Button>
            </BubbleSortButton>
            <SelectionSortButton>
              <Button variant="text" onClick={() => handleSelectionSort()}>
                Selection Sort
              </Button>
            </SelectionSortButton>
            <InsertionSortButoon>
              <Button variant="text" onClick={() => handleInsertionSort()}>
                Insertion Sort
              </Button>
            </InsertionSortButoon>
            <TimeTaken>
              <p>Time Taken: {timeTaken} seconds</p>
            </TimeTaken>
          </Buttons>
          <Controllers>
            <Slider
              defaultValue={arrayLength}
              aria-label="Default"
              onChange={(e) => setArrayLength(Number(e.target.value))}
              valueLabelDisplay="auto"
              min={5}
              max={80}
            />
          </Controllers>
        
        </Toolbar>
        <Visualization>
          <Height></Height>
          {heightArray.map((height, index) => (
            <Bar className="array-bar"
              key={index}
              style={{
                width: `${0.5}vw`,
                backgroundColor: "#4286f4",
                height: `${height}%`,
              }}
            ></Bar>
          ))}
        </Visualization>

      </App>
    );
  
}

export default SortingVisualizer;

let App = styled.div`
    ${tw`h-1 flex flex-direction[column] flex-auto`}
`;

let Toolbar = styled.div`
${tw` `}
`;
let Visualization = styled.div`
${tw`flex justify-around align-items[flex-end] flex-1 bg-red-50`}
`;

let Buttons = styled.div`
  ${tw`flex justify-center items-center bg-yellow-50 h-10`}
`;

let Controllers = styled.div`
${tw`flex-1 m-0`}
`;

let RandomButton = styled.div``;
let MergeButton = styled.div``;
let BubbleSortButton = styled.div``;
let SelectionSortButton = styled.div``;
let InsertionSortButoon = styled.div``;

let TimeTaken = styled.div``;

let Height = styled.div`
${tw`h-screen`}
`;

let Bar = styled.div`
${tw` mx-0.5 max-h-screen mb-32`}`;