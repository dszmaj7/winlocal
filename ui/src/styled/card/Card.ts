import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 280px;
  height: 350px;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px purple;
    scale: 1.05;
  }
`;

export const CardAvatar = styled(FontAwesomeIcon)`
    height: 64px;
    width: 64px;
    align-self: center;
    padding-top: 20px;
    opacity: 0.4;
`

export const CardUser = styled.span`
    white-space: nowrap;
    text-align: center;
    padding: 10px 0;
    font-size: 1.2rem;
`

export const CardUsername = styled.span`
    text-align: center;
`

export const CardUserData = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;

    & div {
        display: flex;
        gap: 5px;

        & > i {
            display: grid;
            place-items: center;
            opacity: 0.4;
            width: 20px;
        }
    }
`