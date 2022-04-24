import React, { useCallback } from "react";

import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledCultureCarousel = styled(Slider)`
  position: relative;
  width: 100%;

  .slick-dots-bottom {
    width: 100%;
    bottom: -4.2708vw;
    left: 1.9792vw;
    justify-content: none !important;
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
    button {
      &:before {
        content: none;
      }
    }
  }
`;

export const DraggableSlider = (props) => {
  const { children, sliderSetting, setDragging, slideRef, enterPage } = props;

  const handleBeforeChange = useCallback(() => {
    if (!enterPage) setDragging(true);
  }, [setDragging, enterPage]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  return (
    <StyledCultureCarousel
      {...sliderSetting}
      beforeChange={handleBeforeChange}
      afterChange={handleAfterChange}
      ref={slideRef}
    >
      {children}
    </StyledCultureCarousel>
  );
};
