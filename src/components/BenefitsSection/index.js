import React from "react";

import {
  BenefitsContainer,
  BenefitsWrapper,
  ContentWrapper,
  SingleContentWrapper,
  ElementsWraper,
  ContentH1,
  ContentP,
  ContentH2,
  ContentP2,
  ImgWraper,
  Img,
} from "./BenefitsSectionElements";

const BenefitsSection = ({ images, alts, id }) => {
  return (
    <BenefitsContainer id={id}>
      <BenefitsWrapper>
        <ContentWrapper>
          <ContentH1>What you’re getting?</ContentH1>
          <ContentP>
            We bring you personalized development programs that are backed by
            research and crafted from the years of experience
          </ContentP>
        </ContentWrapper>
        <ElementsWraper>
          <SingleContentWrapper>
            <ImgWraper>
              <Img src={images[0]} alt={alts[0]} />
            </ImgWraper>
            <ContentH2>1 FREE chat session</ContentH2>
            <ContentP2>
              Start with a free text based chat session online
            </ContentP2>
          </SingleContentWrapper>
          <SingleContentWrapper>
            <ImgWraper>
              <Img src={images[1]} alt={alts[1]} />
            </ImgWraper>
            <ContentH2>Personal Coach</ContentH2>
            <ContentP2>
              A dedicated coach to help you through your journey
            </ContentP2>
          </SingleContentWrapper>
          <SingleContentWrapper>
            <ImgWraper>
              <Img src={images[2]} alt={alts[2]} />
            </ImgWraper>
            <ContentH2>Text chat session</ContentH2>
            <ContentP2>
              {" "}
              An excellent way of preaparing a projects wireframe
            </ContentP2>
          </SingleContentWrapper>
        </ElementsWraper>
      </BenefitsWrapper>
    </BenefitsContainer>
  );
};

export default BenefitsSection;
