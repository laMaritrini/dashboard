import styled from "styled-components";
interface PropsI {
  status: {
    color: string;
    background: string;
  };
}

export const Button = styled.button`
  color: ${(props: any) =>
    props.color === "In progress"
      ? "#fec260"
      : "" || props.color === "Check In"
      ? "#5ad07a"
      : "" || props.color === "Check Out"
      ? "#e23428"
      : ""};
  background-color: ${(props: any) =>
    props.color === "In progress"
      ? "#fff8bc"
      : "" || props.color === "Check In"
      ? "#e8ffee"
      : "" || props.color === "Check Out"
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
  background-color: ${(props: any) =>
    props.status === "Available" ? "green" : "red"};
`;

export const DefaultButton = styled.button`
  color: #135846;
  background-color: #ebf1ef;
  font-size: 14px;
  padding: 16px 24px;
  width: fit-content;
  font-weight: 600;
  margin: 1em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export const ViewNotesButton = styled.button`
  color: #212121;
  background-color: #eef9f2;
  z-index: 0;
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

export const NavPageButton = styled(Button)`
  color: #135846;
  background-color: #ffffff;
  border: 1px solid #135846;
`;
export const SelectButton = styled.select`
  cursor: pointer;
  width: 200px;
  margin: 20px;
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
export const CloseButton = styled.button`
  padding: 10px;
  align-items: center;
  color: #135846;
  background-color: #ebf1ef;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #135846;
    color: white;
  }
`;
export const LightButton = styled.button`
  margin: 20px 0 0 20px;
  width: fit-content;
  color: #135846;
  font-weight: 900;
  background-color: #ebf1ef;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
