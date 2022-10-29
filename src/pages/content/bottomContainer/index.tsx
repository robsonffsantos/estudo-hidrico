import { ImageContainer, LastContainer, List, PHimg, Title } from "./styles"

import PH from '../../../assets/PH.png'

const BottomInfo = () => {
    return (
        <LastContainer>
            <ImageContainer>
                <Title>Produtividade hídrica (fazendas)</Title>
                <PHimg src={PH}/>
                <List>
                    <li>Produto produzido: leite, carcaça animal</li>
                    <li>Água consumida: dessedentação, refrigeração e limpeza (direta) + produção alimento dieta animal (indireta)</li> 
                </List>
            </ImageContainer>
            <ImageContainer>
                <Title>Escassez hídrica (bacias hidrográfica)</Title>
            </ImageContainer>
        </LastContainer>
    )
}

export default BottomInfo