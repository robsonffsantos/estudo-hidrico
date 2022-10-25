import { AdjustDAAD, AdjustDAADLogo, FooterBackground, ImageContainer } from "./style"
import DAAD from '../../assets/DAAD.png'
import DAADLogo from '../../assets/DAAD-logo.png'


const Footer = () => {
    return (
        <FooterBackground>
            <ImageContainer>
                <AdjustDAAD src={DAAD}/>
                <AdjustDAADLogo src={DAADLogo}/>
            </ImageContainer>
        </FooterBackground>
    )
}

export default Footer