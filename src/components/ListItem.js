/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TRow, UserName, Date, Id, PriceRoom } from "../styles/style";
import { CheckStatusRoom } from "../styles/style-buttons";
import { Image } from "../styles/style-image";

export const ListItem = ({ item, index, moveListItem }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [spec, dropRef] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;

      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const opacity = isDragging ? { opacity: "0" } : { opacity: "1" };
  return (
    <TRow key={item.id} ref={dragDropRef} style={opacity}>
      <td>
        <Image src={item.photo} alt="" />
      </td>
      <Date>{item.room_number}</Date>

      <td>
        <UserName>{item.room_type}</UserName>
        <Id>{item.id}</Id>
      </td>
      <td style={{ textOverflow: "" }}>{item.amenities}</td>

      <PriceRoom>
        {item.price}

        <span style={{ color: "grey", fontWeight: "400" }}>/night </span>
      </PriceRoom>

      <PriceRoom>
        {item.discount}
        <span style={{ color: "grey", fontWeight: "400" }}>/night</span>
      </PriceRoom>

      <td>
        <CheckStatusRoom status={item.status}>{item.status}</CheckStatusRoom>
      </td>
    </TRow>
  );
};
