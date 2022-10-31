import styled from "styled-components"

export const LastContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    align-items: center;
`

export const Title = styled.h3`
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (max-width: 1024px) {
        font-size: 12px;
    }
`

export const List = styled.ul`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (max-width: 1280px) {
        font-size: 10px;
    }
`

export const PHimg = styled.img`
    height: 10vh;
    width: 10vw;
`

export const LogoImg = styled.img`
    height: 4vh;
    width: 6vw;
`

export const ImageDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    width: 90%;

    @media screen and (max-width: 1024px) {
        font-size: 10px;
    }
`