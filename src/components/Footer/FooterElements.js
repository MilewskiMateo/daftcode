import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #131e07;
  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLogoWrapper = styled.div`
  padding: 48px 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    padding: 48px 0;
  }
`;

export const Img = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  z-index: 1;
  padding: 0 24px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: top;
  gap: 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0;
  }
`;

export const FooterSingleSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterLinksH1 = styled.h1`
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #7c8176;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  color: #e5e5e5;
  text-decoration: none;
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
`;

export const FooterMailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterMailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #7c8176;
  border-radius: 8px;
  width: 350px;
  height: 50px;
  padding: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border: none;
    height: auto;
    width: 100%;
    padding: 0;
  }
`;
export const FooterMailInput = styled.input`
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin-top: 8px;
  border-radius: 8px;

  width: 100%;
  line-height: 30px;
  color: #7c8176;
  background: transparent;
  border: none;

  :focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border: 1px solid #7c8176;
    padding: 16px;
    width: 100%;
  }
`;
export const FooterMailBtn = styled.button`
  border-radius: 8px;
  background: #fabd20;
  white-space: nowrap;
  padding: 4px 16px;
  color: #131e07;
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fef4e6;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    margin-top: 16px;
    width: 100%;
    height: 62px;
    text-align: center;
    margin-bottom: 63px;
  }
`;
