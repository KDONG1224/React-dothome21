import React from "react";

import { Menu, Input } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const StyledHeaderGlobal = createGlobalStyle`
  .ant-menu-horizontal {
    text-align: right;
    font-size: 22px;
    padding: 15px 0;
  }

  .ant-menu-overflow {
    display: block;
  }
`;
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export const Header = () => {
  return (
    <>
      <StyledHeaderGlobal />
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <a href="https://kdong1224.github.io/dothome21/index.html">KDONG</a>
        </Menu.Item>
        <Menu.Item key="portfolio">
          <a href="https://kdong1224.github.io/portfolio/portfolio.html">
            포트폴리오
          </a>
        </Menu.Item>
        <Menu.Item key="tistory">
          <a href="https://kdong1224.tistory.com/">티스토리</a>
        </Menu.Item>
        <Menu.Item key="github">
          <a href="https://github.com/KDONG1224">깃허브</a>
        </Menu.Item>
        <Menu.Item key="search">
          <SearchInput enterButton />
        </Menu.Item>
      </Menu>
    </>
  );
};
