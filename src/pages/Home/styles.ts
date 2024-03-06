import styled, { css } from "styled-components";

export const Wraper = styled.div`
    ${({theme}) => css`
        height: 100vh;
        background-color: #292728;

        display: flex;
        align-items: center;
        justify-content: center;
    `}
`

export const CenterView = styled.div`
    ${({theme}) => css`
        height: 80%;
        width: 90%;

        border-radius: 8px;
        background-color: #1C1A1B;
    `}
`

export const Header = styled.div`
    ${({theme}) => css`
        position: absolute;
        top: 0px;

        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        /* display: grid;
        grid-template: 1fr;
        grid-template-columns: repeat(3, 1fr);

        align-items: flex-start; */
        padding: 10px;

    `}
`