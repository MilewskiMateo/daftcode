import React from "react";
import {
  HeroContainer,
  HeroH1,
  HeroP,
  HeroContent,
  HeroBtnWrapper,
  NavBtnLink,
  HeroWrapper,
  Column1,
  Column2,
  ImgWrap,
  Img,
} from "./HeroElements";

const HeroSection = ({ SygnetImg, SygnetAlt, img, alt, id }) => {
  return (
    <HeroContainer id={id}>
      <HeroWrapper>
        <Column1>
          <HeroContent>
            <HeroH1>
              Check y<Img src={SygnetImg} alt={SygnetAlt} />
              ur well-being
            </HeroH1>
            <HeroP>
              We’re sure that deciding to check on your health is a big step,
              even if it doesn’t bother in any way.
            </HeroP>
            <HeroBtnWrapper>
              <NavBtnLink to="/getStarted"> Get started</NavBtnLink>
            </HeroBtnWrapper>
          </HeroContent>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
        </Column2>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
