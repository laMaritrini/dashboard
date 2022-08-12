/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { TRow, UserName, Date, Id } from "./styles/style";
import { Button, ViewNotesButton } from "./styles/style-buttons";

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
      <td style={{ padding: "20px" }}>
        <input type="checkbox" />
      </td>
      <td>
        <UserName>{item.full_name}</UserName>
        <Id>{item.id}</Id>
      </td>

      <Date>{item.order_date}</Date>

      <Date>{item.check_in}</Date>

      <Date>{item.check_out}</Date>

      <td>
        <ViewNotesButton>View Notes</ViewNotesButton>
      </td>
      <Date>
        <div>
          {item.room_type.type} <span>- {item.room_type.number}</span>
        </div>
      </Date>

      <td>
        <Button status={item.status}>{item.status}</Button>
      </td>
    </TRow>
  );
};
