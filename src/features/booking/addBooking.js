import { useDispatch } from "react-redux";
import { addBooking } from "./bookingsSlice";
import { useState } from "react";
import {
  BookingModal,
  FormBooking,
  TitleModal,
} from "../../styles/modal";
import { CloseButton, DefaultButton } from "../../styles/style-buttons";

export function AddBooking({ openModal, handleClose }) {
  const [newBooking, setNewBooking] = useState({
    full_name: "",
    id: "",
    order_date: "",
    check_in: "",
    check_out: "",
    special_request: "",
    room_type: {
      type: "",
      number: "",
    },
    status: "",
  });

  const dispatch = useDispatch();
  let id = Math.floor(Math.random() * 100000);
  if (!openModal) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(newBooking));
    setNewBooking({
      full_name: "",
      id: id,
      order_date: "",
      check_in: "",
      check_out: "",
      special_request: "",
      room_type: {
        type: "",
        number: "",
      },
      status: "",
    });
  };

  const handleChange = (e) => {
    setNewBooking({ ...newBooking, [e.target.name]: e.target.value });
  };
  return (
    <BookingModal>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <TitleModal>New Booking</TitleModal>

      <FormBooking>
        <div>
          <label htmlFor="full_name">Full name:</label>
          <input
            type="text"
            value={newBooking.full_name}
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="order_date">Order date:</label>
          <input
            type="date"
            value={newBooking.order_date}
            name="order_date"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="check_in">Check In:</label>
          <input
            type="date"
            value={newBooking.check_in}
            name="check_in"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="check_out">Check Out:</label>
          <input
            type="date"
            value={newBooking.check_out}
            name="check_out"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="special_request">Special Request:</label>
          <input
            type="text "
            value={newBooking.special_request}
            name="special_request"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="type">Room Type:</label>
          <input
            type="text"
            value={newBooking.room_type.type}
            name="type"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number">Room Number:</label>
          <input
            type="number"
            value={newBooking.room_type.number}
            name="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            value={newBooking.status}
            name="status"
            onChange={handleChange}
          />
        </div>
        <DefaultButton onClick={handleSubmit}>Save</DefaultButton>
      </FormBooking>
    </BookingModal>
  );
}
