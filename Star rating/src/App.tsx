import "./App.css";
import styled from "styled-components";
import StarRating from "./components/StarRating";

const App: React.FC = () => {
  const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <>
      <AppContainer>
        <h1>Rate Us</h1>
        <StarRating totalStars={5} />
      </AppContainer>
    </>
  );
};

export default App;
