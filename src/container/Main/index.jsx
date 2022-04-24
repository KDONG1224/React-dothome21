import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { mainItems } from "lib/data";
import { MainBanner, MainCard } from "components";
import { bannerItems } from "lib/banner";

const GlobalStyled = createGlobalStyle`
  .ant-card-bordered {
    border-bottom: 3px solid #ffde70;

    &:hover {
      border-bottom: 3px solid #ff860d;
    }
  }
  .ant-card-cover {
    border-bottom: 1px solid #f0f0f0;
  }
  .ant-card-body {
    text-align: center;
    font-size: 16px;
  }
  .ant-card-meta-title {
    font-size: 20px;
  }
`;

const StyledMain = styled.div`
  width: 100%;
  .main__desc {
    padding: 15px 0;
    text-align: center;
    font-size: 30px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    margin-bottom: 50px;
  }
`;

export const Main = () => {
  const data = mainItems;
  const banner = bannerItems;

  return (
    <>
      <GlobalStyled />
      <StyledMain>
        <MainBanner banner={banner} type="main" />
        <div className="main__desc">
          "Hello! 밥---값하는 개발자 나는 강동재"
        </div>
        <MainCard data={data} />
      </StyledMain>
    </>
  );
};
