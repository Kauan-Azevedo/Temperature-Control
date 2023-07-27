import styled from "styled-components"

export const TempCard = styled('div')`
    width: 387px;
    height: 400px;
    background-color: #212688;
    margin: 100px auto;
    border-radius: 12px;
    box-shadow: 0 0 10px #010203;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const TempValue = styled('span')`
    width: 100%;
    height: 100%;
    font-size: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BtnGroup = styled('div')`
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

export const IncreaseButton = styled('button')`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    font-size: 24px;
    border: none;
    color: var(--text-color);
    background-color: var(--primary-color);
    box-shadow: 0 0 5px black;
    cursor: pointer;
    transition: 500ms;

    &:hover{
        background-color: #99252E;
        box-shadow: 0 0 10px black;
    }
`

export const DecreaseButton = styled('button')`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    font-size: 24px;
    border: none;
    color: var(--text-color);
    background-color: var(--secondary-color);
    box-shadow: 0 0 5px black;
    cursor: pointer;
    transition: 500ms;

    &:hover{
        background-color: #996E25;
        box-shadow: 0 0 10px black;
    }
`