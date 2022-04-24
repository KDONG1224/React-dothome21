import React from 'react';
import styled from 'styled-components';

const AlcholcupTitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0;
    margin-left: 1rem;
    white-space: nowrap;
  }
`;

const AlcholcupTitle = () => {
  return (
    <AlcholcupTitleStyled>
      <h2>술드컵</h2>
      <p>당신의 최애 술을 선택해보세요!</p>
    </AlcholcupTitleStyled>
  );
};

export default AlcholcupTitle;
