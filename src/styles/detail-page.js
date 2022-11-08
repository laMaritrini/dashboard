import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "./modal";
import { Id } from "./style";
import { Button, CheckStatusRoom } from "./style-buttons";

export const ContainerDetail = styled.div`
  margin: 30px;
  background-color: white;
  border-radius: 20px;
  border: none;
  height: 100%;
  padding: 30px;
`;

export const NameDetail = styled.h2`
  padding: 30px 30px 0 0px;
`;
export const IdDetail = styled(Id)`
  font-size: 15px;
  padding: 0 30 px 0 0;
`;

export const ItemsDetail = styled.p`
  padding-top: 20px;
  color: #799283;
  font-size: 14px;
`;
export const CheckBlock = styled.div`
  padding: 20px 20px 20px 0;
  display: grid;
  grid-template-columns: auto auto;
  border-bottom: 2px solid #c5c5c5;
`;
export const ButtonStatus = styled(Button)`
  width: fit-content;
  margin: 20px 0;
`;
export const ButtonDelete = styled.button`
padding 5px 30px;
background-color: white;
font-size: 17px;
border-radius: 10px;
border: none;
  &:hover {
   font-size: 25px;
   cursor: pointer;
  }
`;
export const ButtonEdit = styled.button`
  width: fit-content;
  padding: 10px 30px;
  color: #135846;
  background-color: #ebf1ef;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  margin: 20px 20px 20px 0;
  cursor: pointer;
`;
export const LinkDetail = styled(Link)`
  text-decoration: none;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  color: #799283;
  font-weight: 600;
`;
export const ModalDetail = styled(Modal)`
  top: 30%;
  left: 40%;
`;
export const RoomBlock = styled.div`
  display: flex;
`;
export const PhotoDetail = styled.img`
  width: 50%;
  margin: 0 50px 20px 0;
  border-radius: 20px;
`;

export const CheckStatusButton = styled(CheckStatusRoom)`
  width: fit-content;
`;
export const PriceDetail = styled.div`
  font-weight: 700;
  font-size: 16px;
`;
export const StatusUserDetail = styled.div`
  color: ${(props) => (props.status === "ACTIVE" ? "green" : "red")};
  font-weight: 600;
`;
export const TitleDetail = styled.h3`
  font-weight: 600;
  font-size: 30px;
`;
