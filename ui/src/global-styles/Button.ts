import styled, { css } from 'styled-components';

interface Props {
    $accept?: boolean;
    $delete?: boolean;
}

export const Button = styled.button<Props>`
    border: none;
    padding: 8px 12px;
    background-color: black;
    border-radius: 10px;
    color: #eee;
    font-weight: bold;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    ${props =>
        props.$accept &&
        css`
            background-color: hsl(120, 70%, 40%);
        `}

    ${props =>
        props.$delete &&
        css`
            background-color: hsl(0, 100%, 50%);
        `}

  &:hover:not(:disabled) {
        box-shadow: 0 0 5px purple;
        scale: 1.1;
    }

    &:disabled {
        background-color: gray;
        cursor: no-drop;
    }
`;
