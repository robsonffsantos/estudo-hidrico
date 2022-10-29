import { ImageContainer, ImageDiv, LastContainer, List, LogoImg, PHimg, Title } from "./styles"

import PH from '../../../assets/PH.png'
import wulca from '../../../assets/Wulca-Logo.png'
import waterFootprint from '../../../assets/WaterFootprintNetwork-header.png'

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
                <ImageDiv>
                    <a href="https://wulca-waterlca.org" target='blank'>
                        <LogoImg src={wulca} />
                    </a>
                    <div>AWARE - Available Water Remaining</div>
                </ImageDiv>
                <ImageDiv>
                    <a href="https://waterfootprint.org/en/" target="blank">
                        <LogoImg src={waterFootprint} />
                    </a>
                    <div>BWSI - Blue Water Scarcity Index</div>
                </ImageDiv>                    
            </ImageContainer>
        </LastContainer>
    )
}

export default BottomInfo