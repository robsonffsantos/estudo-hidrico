import { Icons, MainOption, MainTitle, MenuContainer, Option, SecondaryTitle, ThreeOption, ThreeOptionMenu } from "./style"
import waterDrops from '../../../assets/water-drops.png'
import cow from '../../../assets/cow.png'


const Menu = () => {
    return (
        <MenuContainer>
            <MainTitle>Menu</MainTitle>
                <SecondaryTitle>Área de Estudo</SecondaryTitle>
                    <MainOption>
                        <Icons src={waterDrops}/> Bacia Hidrográfica
                    </MainOption>
                <SecondaryTitle>Produtividade Hídrica<br/>
                    -fazendas-</SecondaryTitle>
                    <ThreeOption>
                    <Icons src={cow}/> 
                        <ThreeOptionMenu>
                            Produção de leite
                            <Option>A pasto</Option>
                            <Option>Semi-confinado</Option>
                            <Option>Confinado</Option>
                        </ThreeOptionMenu>
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