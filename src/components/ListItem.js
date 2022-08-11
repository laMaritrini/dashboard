import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { TRow, UserName, Date, Id } from "./styles/style";
import { Button, ViewNotesButton } from "./styles/style-buttons";

export const ListItem = ({ item, index, moveListItem }) => {
  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // Join the 2 refs together into one (both draggable and can be dropped on)
  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  // Make items being dragged transparent, so it's easier to see where we drop them
  const opacity = isDragging ? { opacity: "0" } : { opacity: "1" };
  return (
    <TRow key={item.id} ref={dragDropRef} style={opacity}>
      <td>
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
