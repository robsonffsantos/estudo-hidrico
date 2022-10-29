import styled from "styled-components"

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 1vmax 0.5vmax 1vmax 0.5vmax;
    font-family: Arial, Helvetica, sans-serif;
    color: #404040;
    height: 95%;
`

export const MainTitle = styled.div`
    font-size: 22px;
    font-weight: bolder;
`

export const SecondaryTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`

export const MainOption = styled.div`
    border: 1px solid #ced4da;
    width: 75%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 0 0.5vw; 
    font-weight: 500;
`

export const ThreeOption = styled.div`
    border: 1px solid #ced4da;
    width: 72%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75vmax;
`

export const ThreeOptionMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 14px;
    margin-left : 1vw;
`

export const Option = styled.div`
    border: 1px solid #ced4da;
    width: 90%;
    height: 25%;
    display: flex;
    align-items: center;
    padding-left: 1vw;
    font-weight: 500;
`

export const Icons = styled.img`
    height: 2vh;
    width: 1.2vw;
`