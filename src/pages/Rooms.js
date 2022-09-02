import { useCallback, useEffect, useMemo, useState } from "react";
import { ListItem } from "../components/ListItem";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import { ContainerColumn, ContainerPage, Table } from "../styles/containers";
import { TrHead } from "../styles/style";
import { useDispatch, useSelector } from "react-redux";

import { Pagination } from "../components/Pagination";

import { fetchRooms, removeRoom, selectStateRooms } from "../features/rooms/roomsSlice";
import { AddRoom } from "../features/rooms/AddRoom";
import { LightButton } from "../styles/style-buttons";

export function Rooms({ open, setOpen }) {
  const rooms = useSelector(selectStateRooms);
  const [roomsData, setRoomsData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {
    setRoomsData(rooms);
  }, [rooms]);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  let PageSize = 10;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return roomsData.slice(firstPageIndex, lastPageIndex);
  }, [PageSize, currentPage, roomsData]);

  const moveRoomListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = roomsData[dragIndex];
      const hoverItem = roomsData[hoverIndex];

      setRoomsData((rooms) => {
        const updateRooms = [...rooms];
        updateRooms[dragIndex] = hoverItem;
        updateRooms[hoverIndex] = dragItem;
        return updateRooms;
      });
    },
    [roomsData]
  );
     const handleRemove = (id) => {
       dispatch(removeRoom(id));
     };

  return (
    <ContainerPage>
      <NavLateral open={open} setOpen={setOpen} />
      <ContainerColumn>
        <Nav title="Rooms" open={open} setOpen={setOpen} />
        <div>
          <AddRoom openModal={openModal} handleClose={handleClose} />
          <LightButton onClick={handleOpen}>Add New Room</LightButton>
        </div>
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
              <th style={{ width: "40px"}}></th>
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
                handleRemove={handleRemove}
              />
            ))}
          </tbody>
        </Table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={roomsData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </ContainerColumn>{" "}
    </ContainerPage>
  );
}
