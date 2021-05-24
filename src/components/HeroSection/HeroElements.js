import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #fef4e6;
  margin-top: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin-top: 128px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Column1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 15px;
`;
export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const ImgWrap = styled.div`
  width: 480px;
`;
export const Img = styled.img`
  width: 100%;
  padding-right: 0;
`;

export const HeroContent = styled.div`
  z-index: 1;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroH1 = styled.h1`
  color: #131e07;
  font-family: Rozha One;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  text-align: left;

  img {
    width: 0.5em;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #40462f;
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavBtnLink = styled.button`
  border-radius: 8px;
  background: #fabd20;
  white-space: nowrap;
  padding: 16px 71px;
  color: #131e07;
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 37px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  width: 100%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #131e07;
    color: #fff;
  }
`;
