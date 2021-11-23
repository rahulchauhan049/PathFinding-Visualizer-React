import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer.js";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [view, setView] = useState("sorting");

  const toggleVisualization = () => {
    if (view === "sorting") {
      setView("pathfinding");
    } else {
      setView("sorting");
    }
  };

  return (
    <Container>
      <ToggleButton>
        <Button variant="text" onClick={() => toggleVisualization()}>
          Switch to {view === "sorting" ? "Pathfinding" : "Sorting"} Visualization
        </Button>
      </ToggleButton>
      <Visualizations>
        {view === "sorting" && <SortingVisualizer></SortingVisualizer>} 
        {view === "pathfinding" && <PathfindingVisualizer></PathfindingVisualizer>}
      </Visualizations>
    </Container>
  );
}

export default App;

let Container = styled.div`
  ${tw` `}
`;

let ToggleButton = styled.div`
${tw`justify-center text-center`}
`;

let Visualizations = styled.div`
${tw``}
`;