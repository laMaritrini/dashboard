import { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
  Table,
} from "../components/styles/containers";
import { Date, Id, TrHead, TRow, UserName } from "../components/styles/style";
import { Button, SelectButton, ViewNotesButton } from "../components/styles/style-buttons";
import { MockReservations } from "../data/mockReservations";

export function Bookings({ auth, setAuth, open, setOpen }) {
  const [roomState, setRoomState] = useState([]);
  const [orderBy, setOrderBy] = useState("full_name");

  useEffect(() => {
    const orderedRooms = MockReservations.filter((room) => room[orderBy]);
    orderedRooms.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      } else if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    });
    setRoomState(orderedRooms);
  }, [orderBy]);

  return (
    <ContainerPage>
      <NavLateral open={open} setOpen={setOpen} />
      <ContainerColumn>
        <Nav
          title="Bookings"
          auth={auth}
          setAuth={setAuth}
          open={open}
          setOpen={setOpen}
        />
        <SelectButton
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <option value="full_name" selected>
            Guest
          </option>
          <option value="order_date">Order Date</option>
          <option value="check_in">Check In</option>
          <option value="check_out">Check Out</option>
        </SelectButton>

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
              <th
                style={{
                  borderTopRightRadius: "20px",
                  padding: "20px",
                }}
              >
                Status
              </th>
            </TrHead>
          </thead>
          <tbody>
            {roomState.length
              ? roomState.map((room) => (
                  <TRow key={room.id}>
                    <td style={{ padding: "20px" }}>
                      <UserName>{room.full_name}</UserName>
                      <Id>{room.id}</Id>
                    </td>

                    <Date>{room.order_date}</Date>

                    <Date>{room.check_in}</Date>

                    <Date>{room.check_out}</Date>

                    <td>
                      <ViewNotesButton>View Notes</ViewNotesButton>
                    </td>
                    <Date>
                      <div>
                        {room.room_type.type}{" "}
                        <span>- {room.room_type.number}</span>
                      </div>
                    </Date>

                    <td>
                      <Button status={room.status}>{room.status}</Button>
                    </td>
                  </TRow>
                ))
              : "No guest found..."}
          </tbody>
        </Table>
      </ContainerColumn>
    </ContainerPage>
  );
}
