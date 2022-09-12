import styled, { css } from 'styled-components';

interface Props {
    minHeight?: string;
}

export const Textarea = styled.textarea<Props>`
    transition: box-shadow 0.1s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #fff;
    resize: vertical;

    ${props =>
        props.minHeight &&
        css`
            min-height: ${props.minHeight};
        `}

    &:focus {
        box-shadow: 0 0 5px purple;
        padding: 3px 0px 3px 3px;
        margin: 5px 1px 3px 0px;
        border: 1px solid black;
    }
`;
