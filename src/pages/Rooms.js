import { useCallback, useState } from "react";
import { ListItem } from "../components/ListItem";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
  Table,
} from "../components/styles/containers";
import { TrHead } from "../components/styles/style";

import { MockRooms } from "../data/mockRooms";

export function Rooms({ auth, setAuth }) {
  const [rooms, setRooms] = useState(MockRooms);

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
        <Nav title="Rooms" auth={auth} setAuth={setAuth} />
        <Table>
          <thead>
            <TrHead>
              <th
                style={{
                  borderTopLeftRadius: "20px",
                  padding: "20px",
                }}
              >
                Photo
              </th>
              <th style={{ width: "150px" }}>Room number</th>
              <th>Room type</th>
              <th>Facilities</th>
              <th>Price</th>
              <th>Offer Price</th>
              <th>Status</th>
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
