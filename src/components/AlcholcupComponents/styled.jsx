import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  .ant-select-selector {
    margin: 2rem 0;

    .ant-select-selection-placeholder {
      font-size: 20px;
      line-height: 50px !important;
    }

    .ant-select-selection-item {
      font-size: 30px;
      line-height: 50px !important;
    }
  }
  .ant-select-single:not(.ant-select-customize-input) {
    .ant-select-selector {
      height: 50px;
    }
  }
  .ant-btn {
    width: 100%;
    padding: 2rem 0;

    span {
      font-size: 3rem;
    }
  }
`;

export const AlcholStyled = styled.div`
  .tableWrap {
    padding: 5px;

    .table__box {
      text-align: center;
      width: 100%;
      height: 18rem;
      background-color: #33434d;
      margin-bottom: 20px;
      /* border: 1px solid #000; */
      overflow: hidden;
      .table__img {
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          opacity: 0.8;
        }
        img {
          width: 100%;
          height: 17.8rem;
          object-fit: contain;
        }
      }
      p {
        font-size: 1.6rem;
        background-color: #000000b5;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2%;
      }
    }
  }
  .rounds {
    font-family: "Harmony_B";
    font-size: 2.2rem;
    text-align: center;

    span {
      font-size: 1.8rem;
    }
  }
`;
