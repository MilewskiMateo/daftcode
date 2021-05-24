import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLogoWrapper,
  FooterLinksWrapper,
  FooterLink,
  FooterContentWrapper,
  FooterSingleSectionWrapper,
  FooterLinksH1,
  FooterMailWrapper,
  Img,
  FooterMailInputWrapper,
  FooterMailInput,
  FooterMailBtn,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = ({ img, alt, id }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id={id}>
      <FooterWrap>
        <FooterLogoWrapper>
          <Img src={img} alt={alt} onClick={toggleHome} />
        </FooterLogoWrapper>
        <FooterContentWrapper>
          <FooterLinksWrapper>
            <FooterSingleSectionWrapper>
              <FooterLinksH1>Product</FooterLinksH1>
              <FooterLink>Updates</FooterLink>
              <FooterLink>Security</FooterLink>
              <FooterLink>Chrome Extension</FooterLink>
            </FooterSingleSectionWrapper>
            <FooterSingleSectionWrapper>
              <FooterLinksH1>Company</FooterLinksH1>
              <FooterLink>About</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Join Us</FooterLink>
            </FooterSingleSectionWrapper>
            <FooterSingleSectionWrapper>
              <FooterLinksH1>Help</FooterLinksH1>
              <FooterLink>Talk to Support</FooterLink>
              <FooterLink>Support Docs</FooterLink>
              <FooterLink>API Docs</FooterLink>
              <FooterLink>System Status</FooterLink>
            </FooterSingleSectionWrapper>
          </FooterLinksWrapper>
          <FooterMailWrapper>
            <FooterLinksH1>Try Medli for free</FooterLinksH1>
            <FooterMailInputWrapper>
              <FooterMailInput placeholder="Enter your email" />
              <FooterMailBtn>Get started</FooterMailBtn>
            </FooterMailInputWrapper>
          </FooterMailWrapper>
        </FooterContentWrapper>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
