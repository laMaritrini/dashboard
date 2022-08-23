import { useCallback, useMemo, useState } from "react";
import { ListItem } from "../components/ListItem";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
  Table,
} from "../styles/containers";
import { TrHead } from "../styles/style";

import { MockRooms } from "../data/mockRooms";
import { Pagination } from "../components/pagination";

export function Rooms({ auth, setAuth, open, setOpen }) {
  const [rooms, setRooms] = useState(MockRooms);
  const [currentPage, setCurrentPage] = useState(1);

  let PageSize = 10;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return rooms.slice(firstPageIndex, lastPageIndex);
  }, [PageSize, currentPage, rooms]);

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
      <NavLateral open={open} setOpen={setOpen} />
      <ContainerColumn>
        <Nav
          title="Rooms"
          auth={auth}
          setAuth={setAuth}
          open={open}
          setOpen={setOpen}
        />
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
            {currentTableData.map((room, index) => (
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
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={rooms.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </ContainerColumn>
    </ContainerPage>
  );
}
