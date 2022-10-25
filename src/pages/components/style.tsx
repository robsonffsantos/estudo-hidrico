import styled from "styled-components"
import background from '../../assets/dropsBackground.png'

export const HeaderBackground = styled.img`
    background-image: url(${background});
    background-size: contain;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
`

export const FooterBackground = styled.div`
    height: 10vh;
    width: 98%;
    border: 2px solid #ced4da;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ImageContainer = styled.div`
    height: 8vh;
    width: 16vw;
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