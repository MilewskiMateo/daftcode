import React from "react";

import {
  StatisticsContainer,
  StatisticsWrapper,
  SingleContentWrapper,
  ContentH1,
  ContentP,
} from "./StatisticsSectionElements";

const StatisticsSection = ({ id }) => {
  return (
    <StatisticsContainer id={id}>
      <StatisticsWrapper>
        <SingleContentWrapper>
          <ContentH1>230+</ContentH1>
          <ContentP>Scientifically based tests</ContentP>
        </SingleContentWrapper>
        <SingleContentWrapper>
          <ContentH1>10,000+</ContentH1>
          <ContentP>Medical recommendations</ContentP>
        </SingleContentWrapper>
        <SingleContentWrapper>
          <ContentH1>25M+</ContentH1>
          <ContentP>Students learning</ContentP>
        </SingleContentWrapper>
      </StatisticsWrapper>
    </StatisticsContainer>
  );
};

export default StatisticsSection;
