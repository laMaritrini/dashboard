import styled from "styled-components";

export const Modal = styled.div`
  width: 500px;
  height: 400px;
  position: absolute;
  top: 10%;
  left: 150%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 20px;
  z-index: 10;
`;
export const BookingModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 700px;
  top: 20%;
  left: 30%;
  & > button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const TitleModal = styled.h3`
  color: black;
  font-size: 27px;
`;
export const FormModal = styled.div`
  padding: 20px;
  & > label {
    display: inline-block;
    width: 150px;
    text-align: right;
    padding: 15px;
    font-size: 17px;
    color: #799283;
  }
  & > input {
    margin-bottom: 20px;
    height: 30px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 17px;
  }
`;

export const FormBooking = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  & > div {
    margin-left: -80px;
    & > label {
      display: inline-block;
      width: 250px;
      text-align: right;
      padding: 10px;
      font-size: 17px;
      color: #799283;
    }
    & > input {
      margin-bottom: 20px;
      height: 30px;
      border: none;
      border-bottom: 1px solid black;
      font-size: 17px;
    }
  }
`;
