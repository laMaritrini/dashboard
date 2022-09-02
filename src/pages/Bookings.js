import { useMemo } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import { Pagination } from "../components/Pagination";
import { LinkList } from "../styles/style";

import { ContainerColumn, ContainerPage, Table } from "../styles/containers";
import { Date, Id, TrHead, TRow, UserName } from "../styles/style";
import {
  Button,
  LightButton,
  SelectButton,
  ViewNotesButton,
} from "../styles/style-buttons";
import { AddBooking } from "../features/bookings/AddBooking";

import {
  fetchBookings,
  removeBooking,
  selectState,
} from "../features/bookings/bookingsSlice";

let PageSize = 10;

export function Bookings({ open, setOpen }) {
  const bookings = useSelector(selectState);
  const dispatch = useDispatch();
  const [roomState, setRoomState] = useState([]);
  const [orderBy, setOrderBy] = useState("full_name");
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return roomState.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, roomState]);

  useEffect(() => {
    const orderedRooms = bookings.filter((room) => room[orderBy]);
    orderedRooms.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      } else if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    });
    setRoomState(orderedRooms);
  }, [bookings, orderBy]);

  const handleRemove = (id) => {
    dispatch(removeBooking(id));
  };

  return (
    <ContainerPage>
      <NavLateral open={open} setOpen={setOpen} />
      <ContainerColumn>
        <Nav title="Bookings" open={open} setOpen={setOpen} />
        <div>
          <SelectButton
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="full_name">Guest</option>
            <option value="order_date">Order Date</option>
            <option value="check_in">Check In</option>
            <option value="check_out">Check Out</option>
          </SelectButton>
          <AddBooking openModal={openModal} handleClose={handleClose} />
          <LightButton onClick={handleOpen}>Add New Booking</LightButton>
        </div>
        <Table>
          <thead>
            <TrHead>
              <th
                style={{
                  width: "200px",
                  borderTopLeftRadius: "20px",
                  padding: "20px",
                }}
              >
                Guest
              </th>
              <th>Order Date</th>
              <th>Check in</th>
              <th>Check out</th>
              <th>Special Request</th>
              <th>Room Type</th>
              <th>Status</th>
              <th
                style={{
                  borderTopRightRadius: "20px",
                  padding: "20px",
                  width: "40px",
                }}
              ></th>
            </TrHead>
          </thead>
          <tbody>
            {currentTableData.map((room) => (
              <TRow key={room.id}>
                <td style={{ padding: "20px" }}>
                  <LinkList to={`/bookings/${room.id}`}>
                    <UserName>{room.full_name}</UserName>
                    <Id>{room.id}</Id>
                  </LinkList>
                </td>

                <Date>{room.order_date}</Date>

                <Date>{room.check_in}</Date>

                <Date>{room.check_out}</Date>

                <td>
                  <ViewNotesButton>View Notes</ViewNotesButton>
                </td>
                <Date>
                  <div>
                    {room.room_type.type}
                    <span>- {room.room_type.number}</span>
                  </div>
                </Date>

                <td>
                  <Button status={room.status}>{room.status}</Button>
                </td>
                <td>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleRemove(room.id);
                    }}
                  >
                    🗑️
                  </div>
                </td>
              </TRow>
            ))}
          </tbody>
        </Table>

        <Pagination
          currentPage={currentPage}
          totalCount={roomState.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </ContainerColumn>
    </ContainerPage>
  );
}
