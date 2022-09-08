import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: flex-end;
`;
export const ButtonPage = styled.button`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 4px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  &:hover {
    background-color: #135846;
    color: white;
    cursor: pointer;
  }
  ${(props) =>
    props.disabled
      ? css`
          pointer-events: none;
          color: transparent;
          border: transparent;
          background-color: transparent;
        `
      : css`
          color: #135846;
          border: 1px solid #135846;
          background-color: white;
        `};
`;

export const PageNumber = styled.div`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 4px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  &:hover {
    background-color: #135846;
    color: white;
    cursor: pointer;
  }
  ${(props: any) =>
    props.selected
      ? css`
          background-color: #135846;
          color: white;
        `
      : css`
          color: #135846;
        `}
`;
export const Dots = styled(PageNumber)`
  :hover {
    background-color: transparent;
    cursor: default;
  }
`;
