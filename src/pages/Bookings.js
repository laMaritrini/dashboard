import { useMemo } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import { Pagination } from "../components/pagination";
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
} from "../features/bookings/BookingsSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let PageSize = 10;

export function Bookings({ open, setOpen }) {
  const bookings = useSelector(selectState);
  const dispatch = useDispatch();
  const [bookingState, setBookingState] = useState([]);
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
    return bookingState.slice(firstPageIndex, lastPageIndex);
  }, [ currentPage, bookingState]);

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
    setBookingState(orderedRooms);
  }, [bookings, orderBy]);

  const handleRemove = (id) => {
    dispatch(removeBooking(id));
    setBookingState(bookingState.filter((booking) => booking._id !== id));
  };

  return (
    <ContainerPage>
      <NavLateral open={open} setOpen={setOpen} />
      <ContainerColumn>
        <ToastContainer autoClose={2000} />
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
            <TrHead style={{ fontSize: "14px" }}>
              <th
                style={{
                  width: "200px",
                  borderTopLeftRadius: "20px",
                  padding: "15px",
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
            {currentTableData.map((booking) => (
              <TRow key={booking._id}>
                <td style={{ padding: "10px 20px" }}>
                  <LinkList to={`/bookings/${booking._id}`}>
                    <UserName>{booking.full_name}</UserName>
                    <Id>{booking._id}</Id>
                  </LinkList>
                </td>

                <Date>{booking.order_date.slice(0, 10)}</Date>

                <Date>{booking.check_in.slice(0, 10)}</Date>

                <Date>{booking.check_out.slice(0, 10)}</Date>

                <td>
                  <ViewNotesButton>View Notes</ViewNotesButton>
                </td>
                <Date>
                  <div>
                    {booking.room_type}
                    <span>- {booking.room_number}</span>
                  </div>
                </Date>

                <td>
                  <Button status={booking.status}>{booking.status}</Button>
                </td>
                <td>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleRemove(booking._id);
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
          totalCount={bookingState.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </ContainerColumn>
    </ContainerPage>
  );
}
