import styled from "styled-components";

export const ModalBackgroud = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 100;
`;
