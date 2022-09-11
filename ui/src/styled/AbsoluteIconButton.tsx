import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";

interface IconButton {
  $left?: boolean;
  $right?: boolean;
  $containerWidth?: number;
  icon: IconProp;
  onClick: () => void;
}

export const AbsoluteIconButton: React.FC<IconButton> = styled(FontAwesomeIcon)<IconButton>`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  color: white;
  background-color: black;
  border-radius: 50%;
  padding: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  ${(props) => props.$left && `left: calc(${props.$containerWidth} / 2)`}
  ${(props) => props.$right && `right: calc(${props.$containerWidth} / 2)`}


    &:hover {
    box-shadow: 0 0 5px purple;
    scale: 1.1;
  }
`;
