import React from "react";

import styled from "styled-components";
import { Button } from "antd";

const StyledFooterButton = styled(Button)`
  &.ant-btn {
    width: 100%;
    height: ${(props) => props.height || 100}px;
    border-radius: 0;
    border: 0;
    background: rgba(255, 181, 36, ${(props) => props.opacity || 1});
    font-size: 26px;
    font-weight: 700;
    color: #333333;
  }
`;

export const FooterButton = ({ props, children }) => {
  return <StyledFooterButton {...props}>{children}</StyledFooterButton>;
};
