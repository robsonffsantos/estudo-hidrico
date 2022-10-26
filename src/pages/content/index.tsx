import { Logo, LogoContainer, MainContainer, Title, TopContainer } from "./styles"
import logo from '../../assets/logo.jpg'

export const Content = () => {
    return (
        <MainContainer>
           <TopContainer>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
              <Title>
                <b>Seja bem vindo!</b> <br/> <br/>
                Esta webpage apresenta informações sobre o projeto de pesquisa <b>“Avaliação da produtividade hídrica das atividades pecuárias e agrícolas associadas em uma bacia hidrográfica experimental localizada na Região Sul do Brasil”</b>, desenvolvido através do Ph.D da Eng. Ambiental Sofia Helena Zanella Carra entre Out/2019- xx/2023, junto aos parceiros em destaque. <br/> <br/>
                <i style={{ fontSize: '12px' }}>1° estudo sobre a temática no Brasil</i>
              </Title>
           </TopContainer>
           <div>Baixo</div>
        </MainContainer>
    )
}

export default Content