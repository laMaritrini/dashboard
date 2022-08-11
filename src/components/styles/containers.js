import styled from "styled-components";

export const ContainerColumn = styled.div`
  display: flex;
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContainerMenuHead = styled.div`
  padding: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
  }
`;

export const ContainerMenuLateral = styled.div`
  background-color: white;
  float: left;
  padding-left: 30px;
  text-align: left;
  box-sizing: border-box;
  width: 300px;
  height: 100vh;
`;
export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  float: right;
  width: 100%;
  table-layout: fixed;
  width: 100%;
  border: none;
  margin-bottom: 2px;
  text-align: left;
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
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  text-align: center;
`;
export const UserContainer = styled.div`
  padding: 20px;
  margin-bottom: 70px;
  text-align: center;
  width: 200px;
  height: 225px;
  background-color: white;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const ContainerReview = styled.div`
  text-align: start;
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  padding: 50px;
  & > div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const Review = styled.div`
  margin: 20px;
  padding: 20px;
  width: 400px;
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
