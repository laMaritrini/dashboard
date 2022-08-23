import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) =>
    props.status === "In progress"
      ? "#fec260"
      : "" || props.status === "Check In"
      ? "#5ad07a"
      : "" || props.status === "Check Out"
      ? "#e23428"
      : ""};
  background-color: ${(props) =>
    props.status === "In progress"
      ? "#fff8bc"
      : "" || props.status === "Check In"
      ? "#e8ffee"
      : "" || props.status === "Check Out"
      ? "#ffedec"
      : ""};
  width: 70%;
  font-size: 0.9vw;
  font-weight: 600;
  margin: 1em;
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export const CheckStatusRoom = styled(Button)`
  color: white;
  font-size: 0.9vw;
  text-align: center;
  background-color: ${(props) =>
    props.status === "Available" ? "green" : "red"};
`;

export const DefaultButton = styled(Button)`
  color: #135846;
  background-color: #ebf1ef;
  font-size: 14px;
  padding: 16px 24px;
  width: fit-content;
`;

export const ViewNotesButton = styled(Button)`
  color: #212121;
  background-color: #eef9f2;
  z-index: 0;
`;

export const NavPageButton = styled(Button)`
  color: #135846;
  background-color: #ffffff;
  border: 1px solid #135846;
`;
export const SelectButton = styled.select`
  width: 200px;
  margin-top: 20px;
  margin-left: 70%;
  padding: 10px;
  background-color: #135846;
  color: white;
  border-radius: 10px;
  border: none;
  border-right: 16px solid transparent;
  & > option {
    padding: 20px;
  }
`;
