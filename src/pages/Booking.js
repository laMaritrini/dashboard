import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchBooking,
  removeBooking,
  selectStateDetail,
} from "../features/bookings/BookingsSlice";
import { UpdateBooking } from "../features/bookings/UpdateBooking";

export function Booking() {
  const { id } = useParams();
  const booking = useSelector(selectStateDetail);

  const [edit, setEdit] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooking(id));
  }, [dispatch, id]);

  const handleRemove = () => {
    dispatch(removeBooking(id));
  };
  const handleOpen = (booking) => {
    setEdit(booking);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  if (!booking.id) {
    return null;
  }
  return (
    <div>
      <h3>Booking Detail</h3>
      <h2>{booking.full_name}</h2>
      <p>Id: {booking.id}</p>
      <p>Order Date: {booking.order_date}</p>
      <p>Check In: {booking.check_in}</p>
      <p>Check Out: {booking.check_out}</p>
      <p>Room Type: {booking.room_type.type} </p>
      <p>Room Number: {booking.room_type.number} </p>
      <p>Special request: {booking.special_request}</p>
      <button>{booking.status}</button>
      <button onClick={() => {handleRemove(booking.id)}}>Delete</button>
      
      <button
        onClick={() => {
          handleOpen(booking);
        }}
      >
        Edit
      </button>
      <UpdateBooking open={open} edit={edit} handleClose={handleClose} />
        <Link to="/bookings">Back to Bookings</Link>
    </div>
  );
}
