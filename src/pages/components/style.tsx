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
    width: 100%;
    border: 1px solid black;
`