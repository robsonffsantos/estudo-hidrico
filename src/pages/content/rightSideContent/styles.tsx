import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    /* justify-content: space-evenly; */
    align-items: center;
    padding: 1vmax;
`

export const LateralContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 50%;
    margin: 1vmax;
`

export const SecondaryContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 1024px) {
        font-size: 16px;
    }
`

export const ImagePDF = styled.img`
    height: 80%;
    width: 90%;

    @media screen and (min-width: 1024px) {
        height: 100%;
        width: 100%;
    }
`

export const ImageONU = styled.img`
    height: 60%;
    width: 90%;
`

export const TerciaryContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 1024px) {
        font-size: 14px;
        padding-top: 2vh;
    }
`