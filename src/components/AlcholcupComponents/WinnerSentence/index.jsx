import React from "react";
import styled from "styled-components";

const DescWrapper = styled.ul`
  font-size: 1rem;
  margin: 0;

  li {
    padding: 0.5rem 0;
  }
`;

const WinnerSentence = ({ displays }) => {
  return (
    <DescWrapper>
      <li className="medium">
        술 이름 : <span className="bold">{displays[0].name}</span>
      </li>
      <li className="medium">
        술 종류 : <span className="bold">{displays[0].type}</span>
      </li>
      <li className="medium">
        술 맛 : <span className="bold">{displays[0].taste}</span>
      </li>
      <li className="medium">
        술 설명 : <span className="bold">{displays[0].description}</span>
      </li>
    </DescWrapper>
  );
};

export default WinnerSentence;
