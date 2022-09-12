import styled, { css } from 'styled-components';

interface Props {
    $size?: 'sm' | 'md' | 'lg';
    shake: boolean;
}

export const ModalWrapper = styled.div<Props>`
    background-color: #fff;
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    z-index: 190;
    min-width: 550px;
    border: 1px solid black;
    position: relative;

    ${props =>
        props.$size === 'sm' &&
        css`
            width: 30%;
        `}

    ${props =>
        props.$size === 'md' &&
        css`
            width: 50%;
        `}

    ${props =>
        props.$size === 'lg' &&
        css`
            width: 80%;
        `}

    ${props =>
        props.shake &&
        css`
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        `}

  @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
`;
