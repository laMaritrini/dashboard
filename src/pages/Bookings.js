import { useCallback } from "react";
import { useState } from "react";
import { ListItem } from "../components/ListItem";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
  Table,
} from "../components/styles/containers";
import { TrHead } from "../components/styles/style";
import { MockReservations } from "../data/mockReservations";

export function Bookings({ auth, setAuth }) {
  const [rooms, setRooms] = useState(MockReservations);

  const moveRoomListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = rooms[dragIndex];
      const hoverItem = rooms[hoverIndex];

      setRooms((rooms) => {
        const updateRooms = [...rooms];
        updateRooms[dragIndex] = hoverItem;
        updateRooms[hoverIndex] = dragItem;
        return updateRooms;
      });
    },
    [rooms]
  );

  return (
    <ContainerPage>
      <NavLateral />
      <ContainerColumn>
        <Nav title="Bookings" auth={auth} setAuth={setAuth} />
        <Table>
          <thead>
            <TrHead>
              <th
                style={{
                  width: "55px",
                  borderTopLeftRadius: "20px",
                  padding: "20px",
                }}
              >
                <input type="checkbox" />
              </th>
              <th>Guest</th>
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
            {rooms.map((room, index) => (
              <ListItem
                key={room.id}
                index={index}
                item={room}
                number={room.id}
                moveListItem={moveRoomListItem}
              />
            ))}
          </tbody>
        </Table>
      </ContainerColumn>
    </ContainerPage>
  );
}
