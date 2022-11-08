import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #135846;
  margin: 2%;
  padding: 15px;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const StyledIconReviewGreen = styled(StyledFontAwesomeIcon)`
  color: green;
  font-size: 1.4rem;
  margin: 5px;
`;
export const StyledIconReviewRed = styled(StyledFontAwesomeIcon)`
  color: red;
  font-size: 1.4rem;
  margin: 5px;
`;

export const StyledIconKpi = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffedec;
  color: red;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  & svg {
    font-size: 20px;
  }
`;
