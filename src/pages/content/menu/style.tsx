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
`

export const ThreeOption = styled.div`
    border: 1px solid #ced4da;
    width: 75%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 14px;
`

export const Option = styled.div`
    border: 1px solid #ced4da;
    width: 70%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`