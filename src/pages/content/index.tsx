import { Logo, LogoContainer, MainContainer, TopContainer } from "./styles"
import logo from '../../assets/logo.jpg'

export const Content = () => {
    return (
        <MainContainer>
           <TopContainer>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
           </TopContainer>
           <div>Baixo</div>
        </MainContainer>
    )
}

export default Content