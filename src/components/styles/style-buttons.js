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
  font-size: 14px;
  font-weight: 600;
  margin: 1em;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
`;

export const CheckStatusRoom = styled(Button)`
  color: white;
  background-color: ${(props) => (props.status ? "green" : "red")};
`;

export const DefaultButton = styled(Button)`
  color: #135846;
  background-color: #ebf1ef;
`;
// export const InProgressButton = styled(Button)`
//   color: #fec260;
//   background-color: #fff8bc;
// `;

export const ViewNotesButton = styled(Button)`
  color: #212121;
  background-color: #eef9f2;
`;

export const NavPageButton = styled(Button)`
  color: #135846;
  background-color: #ffffff;
  border: 1px solid #135846;
`;
