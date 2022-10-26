import { BottomContainer, MainContainer, MenuContainer, ThreeContainer, LastContainer, TwoContainer, LargeContainer, SmallContainer, SideContainer, RowContainer, PicsOfLargeContainer, PicsInsideContainer } from "./styles"
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
                            Razões para o desenvolvimento deste projeto:
                            <ul>
                                <li> Brasil: grande produtor de proteína animal + previsão de aumento de produção </li>
                                <li> Risco a continuidade e expansão da atividade devido as mudanças do clima (regime de chuvas) </li>
                                <li> Necessidade de manejo hídrico para garantia da continuidade e expansão da produção animal </li>
                            </ul>
                        </LargeContainer>
                        <SmallContainer>
                            Fazendas avaliadas
                            <RowContainer>
                                <PicsOfLargeContainer>
                                    <PicsInsideContainer src={farmer} />
                                    <ul>
                                        <li> 115 fazendas </li>
                                    </ul>
                                </PicsOfLargeContainer>
                                <PicsOfLargeContainer>
                                    <PicsInsideContainer src={water} />
                                    <ul>
                                        <li> Bacia Hidrográfica Lajeado Tacongava (Brasil) </li>
                                    </ul>
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