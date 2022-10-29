import styled from "styled-components"
import background from '../../assets/dropsBackground.png'

export const HeaderBackground = styled.img`
    background-image: url(${background});
    background-size: contain;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const FooterBackground = styled.div`
    border: 2px solid #ced4da;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const FooterContainer = styled.div`
    height: 100%;
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
`

export const ImageContainer = styled.div`
    height: 8vh;
    width: 15vw;
    display: flex;
    justify-content: center;
`

export const AdjustDAAD = styled.img`
    height: 8vh;
    width: 5vw;
`

export const AdjustDAADLogo = styled.img`
    height: 8vh;
    width: 10vw;
`

export const AdjustATB = styled.img`
    height: 8vh;
    width: 10vw;
`

export const AdjustUCS = styled.img`
    height: 8vh;
    width: 15vw;
`

export const Brasao = styled.img`
    height: 5vh;
    width: 3vw;
`

export const Prefeituras = styled.div`
    height: 8vh;
    width: 22vw;
    display: flex;
    justify-content: space-evenly;
`

export const Cidade = styled.div`
    height: 3vh;
    width: 5vw;
    text-align: center;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
`

export const Conjunto = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`