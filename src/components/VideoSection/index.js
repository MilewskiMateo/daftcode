import React from "react";

import {
  VideoSectionContainer,
  VideoSectionWrapper,
  VideoWrapper,
  ContentH1,
  ContentP,
  Img,
} from "./VideoElements";

const VideoSection = ({ img, alt, id }) => {
  return (
    <VideoSectionContainer id={id}>
      <VideoSectionWrapper>
        <ContentH1>What our community is saying?</ContentH1>
        <ContentP>
          A mission-driven company that invest in and builds healthier living
        </ContentP>
        <VideoWrapper>
          <Img src={img} alt={alt} />
        </VideoWrapper>
      </VideoSectionWrapper>
    </VideoSectionContainer>
  );
};

export default VideoSection;
