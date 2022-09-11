import React from "react";
import styled from "styled-components";
import ReactPortal from "./ReactPortal";

interface Props {
  title?: string;
}

const LoadingContainer = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 200;
  display: grid;
  place-items: center;
`;

const LoadingSpinner = styled.div`
  animation: 1s linear infinite spinner;
  animation-play-state: inherit;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #cfd0d1;
  border-bottom-color: purple;
  transform: translate3d(-50%, -50%, 0);

  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`;

const Loading: React.FC<Props> = ({ title }) => {
  return (
    <ReactPortal wrapperId="react-portal-loading-container">
      <LoadingContainer>
        <LoadingSpinner>{title}</LoadingSpinner>
      </LoadingContainer>
    </ReactPortal>
  );
};

export default Loading;
