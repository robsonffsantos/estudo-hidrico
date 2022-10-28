import { MainOption, MainTitle, MenuContainer, Option, SecondaryTitle, ThreeOption } from "./style"


const Menu = () => {
    return (
        <MenuContainer>
            <MainTitle>Menu</MainTitle>
                <SecondaryTitle>Área de Estudo</SecondaryTitle>
                    <MainOption>Bacia Hidrográfica</MainOption>
                <SecondaryTitle>Produtividade Hídrica<br/>
                    -fazendas-</SecondaryTitle>
                    <ThreeOption>
                        Produção de leite
                            <Option>A pasto</Option>
                            <Option>Semi-confinado</Option>
                            <Option>Confinado</Option>
                    </ThreeOption>
                    <MainOption>Aves de corte</MainOption>
                    <MainOption>Suínos</MainOption>                   
                <SecondaryTitle>Escassez Hídrica</SecondaryTitle>
                    <MainOption>Impactos Escassez</MainOption>
                <SecondaryTitle>Quem Somos</SecondaryTitle>
                    <MainOption>Autores</MainOption>
        </MenuContainer>
    )
}

export default Menu