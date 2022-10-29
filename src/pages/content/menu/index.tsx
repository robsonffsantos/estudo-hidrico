import { Icons, MainOption, MainTitle, MenuContainer, Option, SecondaryTitle, ThreeOption, ThreeOptionMenu } from "./style"
import waterDrops from '../../../assets/water-drops.png'
import cow from '../../../assets/cow.png'
import chicken from '../../../assets/chicken.png'
import pig from '../../../assets/pig.png'
import drop from '../../../assets/blood-drop.png'
import happy from '../../../assets/happy.png'


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
                    <MainOption>
                        <Icons src={chicken}/>Aves de corte
                    </MainOption>
                    <MainOption>
                        <Icons src={pig}/>Suínos
                    </MainOption>                   
                <SecondaryTitle>Escassez Hídrica</SecondaryTitle>
                    <MainOption>
                        <Icons src={drop}/>Impactos Escassez
                    </MainOption>
                <SecondaryTitle>Quem Somos</SecondaryTitle>
                    <MainOption>
                        <Icons src={happy}/>Autores
                    </MainOption>
        </MenuContainer>
    )
}

export default Menu