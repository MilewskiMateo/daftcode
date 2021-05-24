import styled from "styled-components";

export const BenefitsContainer = styled.div`
  background: #fef4e6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  position: relative;
  z-index: 1;
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ContentWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ContentH1 = styled.h1`
  color: #131e07;
  font-family: Rozha One;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-family: Rozha One;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
  }
`;
export const ContentP = styled.p`
  margin-top: 16px;
  color: #131e07;
  font-family: Reem Kufi;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  width: 70%;
  line-height: 36px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ElementsWraper = styled.div`
  display: grid;
  margin-top: 70px;
  z-index: 1;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 36px;
  }
`;

export const SingleContentWrapper = styled.div`
  background-color: #fff;
  z-index: 1;
  height: 440px;
  max-width: 500px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImgWraper = styled.div`
  max-width: 255px;
  max-height: 155px;
`;
export const Img = styled.img`
  width: 100%;
`;

export const ContentH2 = styled.h2`
  margin-top: 80px;
  color: #131e07;
  font-family: Rozha One;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
`;

export const ContentP2 = styled.p`
  margin-top: 16px;
  color: #131e07;
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
