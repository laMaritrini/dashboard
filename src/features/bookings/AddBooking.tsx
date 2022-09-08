import * as React from "react";
import { createNewBooking, selectState } from "./bookingsSlice";
import { useState } from "react";
import { BookingModal, FormBooking, TitleModal } from "../../styles/modal";
import { CloseButton, DefaultButton } from "../../styles/style-buttons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BookingsI } from "../../interfaces";

export function AddBooking({ openModal, handleClose }: any) {
  const bookings = useAppSelector(selectState);
  let id = Math.floor(Math.random() * 100000);

  const [booking, setBooking] = useState<BookingsI>({
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
  const dispatch = useAppDispatch();

  if (!openModal) {
    return null;
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(createNewBooking());
    setBooking(
      {
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
      },
      ...(bookings as [])
    );
    handleClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
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
          <label htmlFor="type">Room Type:</label>
          <input
            type="text"
            value={booking.room_type.type}
            name="type"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number">Room Number:</label>
          <input
            type="number"
            value={booking.room_type.number}
            name="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            value={booking.status}
            name="status"
            id="status"
            onChange={handleChange}
          >
            <option value="">Select One...</option>
            <option value="In progress">In progress</option>
            <option value="Check In">Check In</option>
            <option value="Check Out">Check Out</option>
          </select>
          {/* <input
            type="text"
            value={booking.status}
            name="status"
            onChange={handleChange}
          /> */}
        </div>
        <DefaultButton onClick={handleSubmit}>Save</DefaultButton>
      </FormBooking>
    </BookingModal>
  );
}
