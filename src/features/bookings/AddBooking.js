import { useDispatch, useSelector } from "react-redux";
import { createNewBooking, selectState } from "./BookingsSlice";
import { useState } from "react";
import { BookingModal, FormBooking, TitleModal } from "../../styles/modal";
import { CloseButton, DefaultButton } from "../../styles/style-buttons";

export function AddBooking({ openModal, handleClose }) {
  const bookings = useSelector(selectState);
  let id = Math.floor(Math.random() * 100000);

  const [booking, setBooking] = useState({
    full_name: "",
    id: id,
    order_date: "",
    check_in: "",
    check_out: "",
    special_request: "",
    room_type: "",
    room_number: "",
    status: "",
  });
  const dispatch = useDispatch();

  if (!openModal) {
    return null;
  }

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitButton = () => {
    if (
      !booking.full_name ||
      !booking.order_date ||
      !booking.check_in ||
      !booking.check_out ||
      !booking.room_type ||
      !booking.room_number ||
      !booking.status
    ) {
      return (
        <DefaultButton disabled onClick={handleSubmit}>
          Save
        </DefaultButton>
      );
    } else {
      return <DefaultButton onClick={handleSubmit}>Save</DefaultButton>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewBooking(booking));
    setBooking(
      {
        full_name: "",
        id: id,
        order_date: "",
        check_in: "",
        check_out: "",
        special_request: "",
        room_type: "",
        room_number: "",
        status: "",
      },
      ...bookings
    );
    handleClose();
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
            value={booking.full_name}
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="order_date">Order date:</label>
          <input
            type="date"
            value={booking.order_date}
            name="order_date"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="check_in">Check In:</label>
          <input
            type="date"
            value={booking.check_in}
            name="check_in"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="check_out">Check Out:</label>
          <input
            type="date"
            value={booking.check_out}
            name="check_out"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="special_request">Special Request:</label>
          <input
            type="text "
            value={booking.special_request}
            name="special_request"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="room_type">Room Type:</label>
          <select
            type="text"
            value={booking.room_type}
            name="room_type"
            onChange={handleChange}
            id="room_type"
          >
            <option value="">Select One...</option>
            <option value="Double Superior">Double Superior</option>
            <option value="Suite">Suite</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Single Bed">Single Bed</option>
          </select>
        </div>
        <div>
          <label htmlFor="room_number">Room Number:</label>
          <input
            type="number"
            value={booking.room_number}
            name="room_number"
            onChange={handleChange}
            id="room_number"
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            value={booking.status}
            type="text"
            name="status"
            id="status"
            onChange={handleChange}
          >
            <option value="">Select One...</option>
            <option value="In progress">In progress</option>
            <option value="Check In">Check In</option>
            <option value="Check Out">Check Out</option>
          </select>
        </div>
        <SubmitButton />
      </FormBooking>
    </BookingModal>
  );
}
