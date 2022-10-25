import { AdjustATB, AdjustDAAD, AdjustDAADLogo, AdjustUCS, FooterBackground, ImageContainer } from "./style"
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
        </FooterBackground>
    )
}

export default Footer