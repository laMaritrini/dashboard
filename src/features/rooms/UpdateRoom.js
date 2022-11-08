import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BookingModal, FormBooking, TitleModal } from "../../styles/modal";
import { CloseButton, DefaultButton } from "../../styles/style-buttons";
import { updateRoom } from "./roomsSlice";

export function UpdateRoom({ edit, openModal, handleClose }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState({
    photo: "",
    room_number: "",
    room_type: "",
    amenities: "",
    description: "",
    price: "",
    discount: "",
    status: "",
  });
  useEffect(() => {
    if (edit) {
      setEditForm(edit);
    } else {
      setEditForm("");
    }
  }, [edit]);
  console.log(edit);

  if (!openModal) {
    return null;
  }
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRoom({ id: edit._id, data: editForm }));
    handleClose();
  };

  return (
    <BookingModal>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <TitleModal>Edit room info</TitleModal>
      <FormBooking>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            value={editForm.photo}
            name="photo"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="room_number">Room Number:</label>
          <input
            type="number"
            value={editForm.room_number}
            name="room_number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="room_type">Room Type:</label>
          <input
            type="text"
            value={editForm.room_type}
            name="room_type"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="amenities">Facilities:</label>
          <input
            type="text"
            value={editForm.amenities}
            name="amenities"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text "
            value={editForm.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            value={editForm.price}
            name="price"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="discount">Offer Price:</label>
          <input
            type="number"
            value={editForm.discount}
            name="discount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            value={editForm.status}
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
