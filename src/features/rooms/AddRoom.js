import { useDispatch, useSelector } from "react-redux";
import { createNewRoom, selectStateRooms } from "./roomsSlice";
import { useState } from "react";
import { BookingModal, FormBooking, TitleModal } from "../../styles/modal";
import { CloseButton, DefaultButton } from "../../styles/style-buttons";

export function AddRoom({ openModal, handleClose }) {
  const rooms = useSelector(selectStateRooms);

  const [room, setRoom] = useState({
    photo: "",
    room_number: "",
    room_type: "",
    facilities: "",
    description: "",
    price: "",
    offer_price: "",
    status: "",
  });
  const dispatch = useDispatch();

  if (!openModal) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewRoom(room));
    setRoom(
      {
        photo: "",
        room_number: "",
        room_type: "",
        facilities: "",
        description: "",
        price: "",
        offer_price: "",
        status: "",
      },
      ...rooms
    );
    handleClose();
  };

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  return (
    <BookingModal>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <TitleModal>New Room</TitleModal>

      <FormBooking>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            value={room.photo}
            name="photo"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="room_number">Room Number:</label>
          <input
            type="number"
            value={room.room_number}
            name="room_number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="room_type">Room Type:</label>
          <select
            value={room.room_type}
            type="text"
            name="room_type"
            id="room_type"
            onChange={handleChange}
          >
            <option value="">Select One...</option>
            <option value="Double Superior">Double Superior</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Suite">Suite</option>
            <option value="Double Bed">Double Bed</option>
          </select>
        </div>
        <div>
          <label htmlFor="facilities">Facilities:</label>
          <input
            type="text"
            value={room.facilities}
            name="facilities"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text "
            value={room.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            value={room.price}
            name="price"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="discount">Offer Price:</label>
          <input
            type="number"
            value={room.discount}
            name="discount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            value={room.status}
            type="text"
            name="status"
            id="status"
            onChange={handleChange}
          >
            <option value="">Select One...</option>
            <option value="AVAILABLE">AVAILABLE</option>
            <option value="BOOKED">BOOKED</option>
          </select>
        </div>
        <DefaultButton onClick={handleSubmit}>Save</DefaultButton>
      </FormBooking>
    </BookingModal>
  );
}
