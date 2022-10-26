import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 15vh;
    width: 90vw;
    border: 2px solid #ced4da;
    align-items: center;
    margin: 1vmax 4vw;
`

export const Logo = styled.img`
    z-index: 2;
`

export const LogoContainer = styled.div`
    height: 15vh;
    width: 11vw;
    background-color: #ced4da;
    border: 2px solid #ced4da;
    display: flex;
    align-items: center;
    justify-content: center;
`