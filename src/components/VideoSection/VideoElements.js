import styled from "styled-components";

export const VideoSectionContainer = styled.div`
  background: #fabd20;
  margin-bottom: 200px;
  display: flex;
  height: 811px;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 500px;
    margin-bottom: 100px;
  }
`;

export const VideoSectionWrapper = styled.div`
  position: absolute;
  margin-top: 64px;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 1000px;
  max-width: 1100px;
  padding: 0 24px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-family: Rozha One;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: left;
  }
`;

export const ContentH1 = styled.h1`
  color: #131e07;
  font-family: Rozha One;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-family: Rozha One;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: left;
  }
`;
export const ContentP = styled.p`
  margin-top: 40px;
  color: #131e07;
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 37px;
    font-size: 20px;
    line-height: 30px;
    width: 100%;
    text-align: left;
  }
`;

export const VideoWrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 603px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
