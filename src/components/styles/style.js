import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  text-align: center;
  list-style-type: none;
  font-size: 18px;
  text-decoration: none;
  text-align: left;
  padding: 8px;
  color: #799283;
`;

export const TRow = styled.tr`
  background-color: #ffffff;
  margin: 0;
  text-align: left;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
`;

export const TrHead = styled.tr`
  background-color: white;
  border-radius: 20px;
  padding: 60px;
  margin-bottom: 2px;
`;

export const KpiNumber = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const KpiTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #787878;
`;
export const UserName = styled.h4`
  font-weight: 500;
  font-size: 16px;
`;
export const UserEmail = styled.p`
  font-weight: 300;
  color: #b2b2b2;
  font-size: 12px;
`;
export const Footer = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

export const Id = styled.div`
  font-weight: 300;
  color: #799283;
  font-size: 10px;
`;
export const Date = styled.td`
  font-weight: 500;
  font-size: 16px;
`;
export const PriceRoom = styled.td`
  font-weight: 700;
  font-size: 16px;
`;
export const FormLogin = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > label {
    color: #799283;
    margin: 10px;
    & > input {
      padding: 7px;
      margin: 7px;
      border: none;
      border-bottom: 1px solid #799283;
      background-color: transparent;
      resize: none;
      outline: none;
    }
  }
`;
