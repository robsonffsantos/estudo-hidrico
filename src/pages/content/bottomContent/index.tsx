import { BottomContainer, MainContainer, MenuContainer, ThreeContainer, LastContainer, TwoContainer, LargeContainer, SmallContainer, SideContainer } from "./styles"


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
                            Fazendas
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