import React from "react";
import styled from "styled-components";

interface StarProps {
  filled?: boolean;
  onClick: () => void;
}

const StyledStar = styled.div<StarProps>`
  cursor: pointer;
  color: ${(props) => (props.filled ? "#FFD700" : "#D3D3D3")};
  font-size: 24px;
`;

const Star: React.FC<StarProps> = ({ filled, onClick }) => {
  return <StyledStar onClick={onClick}> {filled ? "★" : "☆"}</StyledStar>;
};

export default Star;
