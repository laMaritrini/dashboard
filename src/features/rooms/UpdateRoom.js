import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CloseButton } from "../../styles/style-buttons";
import { updateRoom } from "./RoomsSlice";

export function UpdateRoom({ edit, open, handleClose }) {
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

  if (!open) {
    return null;
  }
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRoom({ id: edit.id, editForm }));
    setEditForm({
      photo: "",
      room_number: "",
      room_type: "",
      amenities: "",
      description: "",
      price: "",
      discount: "",
      status: "",
    });
    handleClose();
  };

  return (
    <form action="">
      <CloseButton onClick={handleClose}>X</CloseButton>
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
          <option value="Available">Available</option>
          <option value="Booked">Booked</option>
        </select>
        
      </div>
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
}
