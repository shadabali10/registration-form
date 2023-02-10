import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: red;
  color: white;
`;

const MyComponent = () => {
  return (
    <StyledDiv>
      Hello World!
    </StyledDiv>
  );
};

export default MyComponent;
