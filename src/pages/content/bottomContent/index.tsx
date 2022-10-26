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
                            Desenvolvimento
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