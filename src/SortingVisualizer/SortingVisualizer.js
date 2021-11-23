import React, { useEffect } from "react";
import { getMergeSortAnimations } from "../algorithms/sorting/mergeSort";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import styled from "styled-components";
import tw from "twin.macro"

function SortingVisualizer() {
  const [heightArray, setHeightArray] = React.useState([]);
  const [arrayLength, setArrayLength] = React.useState(20);

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

  const sortArray = () => {
    const animations = getMergeSortAnimations(heightArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "#4286f4";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}%`;
        }, i * 10);
      }
    }
  };

  return (
    <App>
      <Toolbar>
        <SliderBox>
          <Slider
            defaultValue={arrayLength}
            aria-label="Default"
            onChange={(e) => setArrayLength(Number(e.target.value))}
            valueLabelDisplay="auto"
            min={5}
            max={80}
          />
       </SliderBox>
        <RandomButton>
          <Button variant="text" onClick={() => shuffleArray()}>
            Random
          </Button>
        </RandomButton>
        <MergeButton>
          <Button variant="text" onClick={() => sortArray()}>
            Merge Sort
          </Button>
        </MergeButton>
        <BubbleSortButton>
          <Button variant="text" onClick={() => sortArray()}>
            Bubble Sort
          </Button>
        </BubbleSortButton>
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
${tw`flex justify-between items-center bg-yellow-50 h-10 `}
`;
let Visualization = styled.div`
${tw`flex justify-around align-items[flex-end] flex-1 bg-red-50`}
`;

let SliderBox = styled.div`
${tw`flex-1 m-5`}
`;

let RandomButton = styled.div``;
let MergeButton = styled.div``;
let BubbleSortButton = styled.div``;

let Height = styled.div`
${tw`h-screen`}
`;

let Bar = styled.div`
${tw` mx-0.5 max-h-screen mb-24`}`;