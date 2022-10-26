import { BottomContainer, MainContainer, MenuContainer, ThreeContainer, LastContainer, TwoContainer, LargeContainer, SmallContainer, SideContainer, RowContainer, PicsOfLargeContainer, PicsInsideContainer, Title, Text } from "./styles"
import farmer from '../../../assets/farmer.png'
import water from '../../../assets/water.png'


const BottomContent = () => {
    return (
        <BottomContainer>
            <MenuContainer>
                Menu
            </MenuContainer>
            <MainContainer>
                <ThreeContainer>
                    <TwoContainer>
                        <LargeContainer>
                            <Title>Razões para o desenvolvimento deste projeto:</Title>
                            <ul>
                                <li> Brasil: grande produtor de proteína animal + previsão de aumento de produção </li> <br/>
                                <li> Risco a continuidade e expansão da atividade devido as mudanças do clima (regime de chuvas) </li> <br/>
                                <li> Necessidade de manejo hídrico para garantia da continuidade e expansão da produção animal </li>
                            </ul>
                        </LargeContainer>
                        <SmallContainer>
                            <Title>Fazendas avaliadas</Title>
                            <RowContainer>
                                <PicsOfLargeContainer>
                                    <PicsInsideContainer src={farmer} />
                                    <Text>115 fazendas</Text>
                                </PicsOfLargeContainer>
                                <PicsOfLargeContainer>
                                    <PicsInsideContainer src={water} />
                                        <Text>Bacia Hidrográfica Lajeado Tacongava (Brasil)</Text>
                                </PicsOfLargeContainer>
                            </RowContainer>
                        </SmallContainer>
                    </TwoContainer>
                    <SideContainer>
                        Lado
                    </SideContainer>
                </ThreeContainer>
                <LastContainer>
                    Baixo
                </LastContainer>
            </MainContainer>
        </BottomContainer>
    )
}

export default BottomContent