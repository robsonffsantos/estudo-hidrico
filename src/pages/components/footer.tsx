import { AdjustATB, AdjustDAAD, AdjustDAADLogo, AdjustUCS, Brasao, Cidade, Conjunto, FooterBackground, FooterContainer, ImageContainer, Prefeituras } from "./style"
import DAAD from '../../assets/DAAD.png'
import DAADLogo from '../../assets/DAAD-logo.png'
import ATB from '../../assets/ATB.png'
import Embrapa from '../../assets/embrapa.jpg'
import Guapore from '../../assets/Guapore.png'
import Emater from '../../assets/logo_emater.png'
import Montauri from '../../assets/montauri.jpg'
import Serafina from '../../assets/serafina-correa.jpg'
import UCS from '../../assets/ucs-isam20.jpg'
import US from '../../assets/uniao_da_serra.png'


const Footer = () => {
    return (
        <FooterContainer>
            PARCEIROS
            <FooterBackground>
                <ImageContainer>
                    <AdjustDAAD src={DAAD}/>
                    <AdjustDAADLogo src={DAADLogo}/>
                </ImageContainer>
                <ImageContainer>
                    <AdjustATB src={ATB} />
                </ImageContainer>
                <ImageContainer>
                    <AdjustUCS src={UCS} />
                </ImageContainer>
                <ImageContainer>
                    <AdjustATB src={Embrapa}/>
                </ImageContainer>
                <ImageContainer>
                    <AdjustUCS src={Emater} />
                </ImageContainer>
                <Prefeituras>
                    <Conjunto>
                        <Brasao src={Serafina} />
                        <Cidade>
                            Prefeitura de Serafina Corrêa
                        </Cidade>
                    </Conjunto>
                    <Conjunto>
                        <Brasao src={US} />
                        <Cidade>
                            Prefeitura de União da Serra
                        </Cidade>
                    </Conjunto>
                    <Conjunto>
                        <Brasao src={Montauri} />
                        <Cidade>
                            Prefeitura de Montauri
                        </Cidade>
                    </Conjunto>
                    <Conjunto>
                        <Brasao src={Guapore} />
                        <Cidade>
                            Prefeitura de Guaporé
                        </Cidade>
                    </Conjunto>
                </Prefeituras>
            </FooterBackground>
        </FooterContainer>
    )
}

export default Footer