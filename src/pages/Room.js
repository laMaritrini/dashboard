import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchRoom, removeRoom, selectStateDetail } from "../features/rooms/roomsSlice";
import { UpdateRoom } from "../features/rooms/UpdateRoom";

export function Room() {
  const { id } = useParams();
  const room = useSelector(selectStateDetail)
    const [edit, setEdit] = useState("");
    const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoom(id));
  }, [dispatch, id]);

   const handleRemove = () => {
     dispatch(removeRoom(id));
   };
    const handleOpen = (room) => {
      setEdit(room);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
 
  return (
    <div>
      <h3>Room Detail </h3>
      <img src={room.photo} alt="" />
      <p>Room Number: {room.room_number}</p>
      <p>Room Type: {room.room_type}</p>
      <p>id: {room.id}</p>
      <p>Facilities: {room.amenities}</p>
      <p>Description: {room.description}</p>
      <p>Price: {room.price}</p>
      <p>Offer Price: {room.discount}</p>
      <button>{room.status}</button>

      <button
        onClick={() => {
          handleRemove(room.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleOpen(room);
        }}
      >
        Edit
      </button>
      <UpdateRoom open={open} edit={edit} handleClose={handleClose} />
      <Link to="/rooms">Back to Rooms</Link>
    </div>
  );
}
