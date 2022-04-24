// base
import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

// packages
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DraggableSlider } from "components";

import { mainArrow } from "imports";

const StyledBannerSlider = styled.div`
  ${(props) =>
    props.type === "main" && " background: #a5d5fa; min-width: 1280px;"}
  padding: 50px 0 122px;
  box-sizing: border-box;
  overflow: hidden;

  .slick-slide {
    box-sizing: content-box;
    padding: 0 3.8125vw;
  }
  .slick-arrow.slick-next {
    background: url(${mainArrow.NEXT_ARROW}) center no-repeat;
    position: absolute;
    display: block;
    width: 3.125vw;
    height: 3.125vw;
    left: calc(54% + 16.1771vw);
  }
  .slick-arrow.slick-next:hover {
    background: url(${mainArrow.NEXT_HOVER_ARROW}) center no-repeat;
  }
  .slick-arrow.slick-next:before {
    content: none;
  }
  .slick-arrow.slick-prev {
    background: url(${mainArrow.PREV_ARROW}) center no-repeat;
    position: absolute;
    display: block;
    width: 3.125vw;
    height: 3.125vw;
    left: calc(45% - 18.3771vw);
    z-index: 20;
  }
  .slick-arrow.slick-prev:hover {
    background: url(${mainArrow.PREV_HOVER_ARROW}) center no-repeat;
  }
  .slick-arrow.slick-prev:before {
    content: none;
  }
  .slick-dots {
    height: 3.125vw;
    bottom: -90px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    li {
      top: 0;
      margin: 0 18px 0 0;
      width: 8px;

      &.slick-active {
        width: 79px;

        button {
          background: #fff;
          width: 79px;
          height: 8px;
        }
        button:before {
          content: none;
        }
      }
      button {
        width: 8px;
        height: 8px;
        background-color: #ddd;
        border-radius: 8px;
      }
      button:before {
        content: none;
      }
    }
  }

  .image-container {
    width: 35vw;
    height: 22vw;

    img.slider-image {
      width: 35vw;
      height: 22vw;
      border-radius: 40px;
    }
  }
  @media only screen and (max-width: 1280px) {
    .image-container {
      width: 592.86px;
      height: 343.72px;
      img.slider-image {
        width: 592.86px;
        height: 343.72px;
      }
    }

    .slick-arrow.slick-next {
      width: 40px;
      height: 40px;
      left: calc(60% + 176.43px);
    }
    .slick-arrow.slick-prev {
      width: 40px;
      height: 40px;
      left: calc(39% - 196.43px);
    }
    .slick-dots {
      height: 39.97px;
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
  }
`;

const StyledMainBannerList = styled.div`
  ${(props) => props.url && "cursor: pointer;"}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 22vw;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 auto;

  min-width: 592.86px;
  min-height: 343.72px;

  img {
    width: 35vw;
    height: 22vw;
  }

  @media only screen and (max-width: 1280px) {
    width: 592.86px;
    height: 343.72px;
    img {
      width: 592.86px;
      height: 343.72px;
    }
  }
`;

const SliderNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <span></span>
    </div>
  );
};

const SliderPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <span></span>
    </div>
  );
};

export const MainBanner = (props) => {
  const { banner } = props;
  const [playSpeed, setPlaySpeed] = useState(1);
  const [autoPlay, setAutoplay] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [bannerRef, setBnnerRef] = useState();
  const [enterPage, setEnterPage] = useState(true);

  useEffect(() => {
    setPlaySpeed(banner.playSpeed ?? 1);
    setAutoplay(banner.autoPlay ?? true);
    if (banner) {
      bannerRef?.slickGoTo(0, true);
    }
  }, [banner, bannerRef]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    className: "center",
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    autoplaySpeed: playSpeed * 5000,
    autoplay: autoPlay,
    touchThreshold: 15,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    waitForAnimate: false,
  };

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [dragging]
  );

  return (
    <StyledBannerSlider {...props}>
      {banner && banner.length > 1 ? (
        <DraggableSlider
          sliderSetting={settings}
          slideRef={(sliderRef) => setBnnerRef(sliderRef)}
          enterPage={enterPage}
          setDragging={setDragging}
        >
          {banner.map((sliderItem, i) => {
            return (
              <div
                key={"main" + i + 1}
                className="image-container"
                style={{
                  cursor: sliderItem.image && "pionter",
                }}
                onClickCapture={handleOnItemClick}
                onMouseDown={() => enterPage && setEnterPage(false)}
              >
                <img
                  className="slider-image"
                  src={sliderItem.image}
                  alt={sliderItem.name}
                />
              </div>
            );
          })}
        </DraggableSlider>
      ) : (
        banner.map((sliderItem, i) => {
          return (
            <StyledMainBannerList url={sliderItem.link} key={"main" + i + 1}>
              <img src={sliderItem.link} alt={sliderItem.name} />
            </StyledMainBannerList>
          );
        })
      )}
    </StyledBannerSlider>
  );
};
