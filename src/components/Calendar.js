import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";

// add styles as css
export const StyleWrapper = styled.div`
  border-radius: 20px;
  background-color: white;
  border: 0;
  border-collapse: collapse;
  height: 400px;
  width: 400px;
  padding:10px 10px;
  .fc-button.fc-prev-button,
  .fc-button.fc-next-button,
  .fc-button.fc-button-primary {
    border: none;
    color: black;
    background: inherit;
    &:active {
      box-shadow: none;
      border: none;
      color: black;
      background-color: inherit;
    }
    &:focus {
      border: none;
      box-shadow: none;
      background-color: none;
    }
  }
  .fc .fc-toolbar {
    display: flex;
    justify-content: flex-end;
    align-self: end;
  }
  .fc .fc-toolbar-title {
    font-size: 14px;
    margin: 0;
    align-self: center;
  }
  .fc-scrollgrid {
    border-style: none;
  }
  .fc-col-header-cell-cushion {
    color: #799283;
    font-weight: lighter;
  }

  .fc-daygrid-day-frame {
    &:hover {
      border-radius: 10px;
      background-color: #ff9c3a;
      color: white;
    }
    &:focus {
      border-radius: 10px;
      background-color: #135846;
      color: white;
    }
  }
  .fc td,
  .fc th {
    border-style: none !important;
  }
`;

export function Calendar() {
  return (
    <StyleWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
      />
    </StyleWrapper>
  );
}
