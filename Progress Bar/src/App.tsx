import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import ProgressButton from "./components/ProgressButton";

const App: React.FC = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 100 : prevProgress + 10
    );
  };

  const decreaseProgress = () => {
    setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 10));
  };

  
  const resetProgress = () => {
    setProgress(0);
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "30px 0 0 0",
        }}
      >
        <ProgressBar
          progress={progress}
          backgroundColor="#e0e0e0"
          progressColor="#4caf50"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            margin: "30px 0 0 0",
          }}
        >
          <ProgressButton onClick={increaseProgress} textValue="Increase" />
          <ProgressButton onClick={decreaseProgress} textValue="Decrease" />
          <ProgressButton onClick={resetProgress} textValue="Reset" />
        </div>
      </div>
    </>
  );
};

export default App;
