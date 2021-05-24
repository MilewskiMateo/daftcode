import styled from "styled-components";

export const StatisticsContainer = styled.div`
  background: #fef4e6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 220px 30px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
    margin-bottom: 50px;
  }
`;

export const StatisticsWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SingleContentWrapper = styled.div`
  z-index: 1;
  max-width: 500px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentH1 = styled.h1`
  color: #fabd20;
  font-family: Rozha One;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
`;
export const ContentP = styled.p`
  margin-top: 16px;
  color: #131e07;
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
