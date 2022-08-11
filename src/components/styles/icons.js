import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 2%;
  padding: 5px;
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
  &:hover {
    color: white;
    background-color: #e23428;
  }
`;

export const IconLateral = styled.div`
  width: 60px;
  height: 60px;
  color: #799283;
  padding: 10px;
  & svg {
    font-size: 20px;
  }
`;
