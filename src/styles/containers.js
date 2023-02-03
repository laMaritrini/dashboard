import styled, { css } from "styled-components";

export const ContainerPage = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
`;
export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ContainerRow = styled.div`
  display: flex;
`;
export const ContainerRowWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContainerMenuHead = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: white;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
  }
`;
export const SectionTitleBar = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerMenuLateral = styled.div`
  position: relative;
  top: 0;
  left: 0;
  transition-duration: 2s;
  ${(props) => {
    return props.open
      ? css`
          display: block;
        `
      : css`
          display: none;
        `;
  }};
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding-left: 20px;
  text-align: left;
  width: 300px;
`;
export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 2px;
  float: right;
  width: 100%;
  table-layout: fixed;
  width: 100%;
  border: none;
  margin: 5px;
  text-align: left;
  padding: 30px;
`;

export const KpiBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 250px;
  height: 80px;
  border-radius: 12px;
  margin: 20px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  
  & > :first-child {
    color: white;
    background-color: #e23428;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  & svg {
    font-size: 30px;
    margin: 5px;
    color: #799283;
  }
  &:hover,
  :focus-within {
    border-left: 4px solid red;
    & > svg {
      color: red;
      font-weight: 600;
    }
    & > a {
      color: red;
      font-weight: 600;
    }
  }
`;
export const UserContainer = styled.div`
  margin: 20px;
  padding: 20px;
  margin-bottom: 70px;
  text-align: center;
  width: 180px;
  height: 200px;
  background-color: white;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const ContainerReview = styled.div`
  z-index: 0;
  text-align: start;
  ${(props) => {
    return props.open
      ? css`
          max-width: 74vw;
        `
      : css`
          max-width: 100vw;
        `;
  }};

  max-height: 100%;
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  padding: 40px;
  & > div {
    z-index: 0;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  }
`;
export const Review = styled.div`
  margin: 20px;
  padding: 10px;
  width: 350px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #f8f8f8;
  & > p {
    text-align: start;
  }
  & > div {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      text-align: start;
      & > p {
        color: #799283;
      }
    }
  }
`;
