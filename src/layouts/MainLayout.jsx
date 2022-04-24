import React from "react";

import { Layout } from "antd";
import styled from "styled-components";
import { Header } from "components";

const StyledMainLayout = styled.div`
  position: relative;

  ${(props) => props.headerType && ".ant-layout-content { padding-top: 130px;}"}
  .slick-dots {
    text-align: left;
    li {
      &:before {
        content: none;
      }
      button {
        &:before {
          content: none;
        }
      }
    }
  }
`;

export const MainLayout = ({ props, children }) => {
  return (
    <StyledMainLayout {...props}>
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </StyledMainLayout>
  );
};
