import { ImageONU, ImagePDF, LateralContainer, MainContainer, SecondaryContainer, TerciaryContainer } from "./styles"
import PDFImage from '../../../assets/water-use-in-livestock.jpg'
import ONU from '../../../assets/Food-and-Agriculture-ONU.png'

const RightSide = () => {
    return (
        <MainContainer>
            <LateralContainer>
                <SecondaryContainer>
                    <a href="https://www.fao.org/3/ca5685en/ca5685en.pdf" target="_blank">
                        <ImagePDF src={PDFImage} />
                    </a>                    
                </SecondaryContainer>
                <SecondaryContainer>
                    <div>Metodologia <br/>“FAO LEAP Guidelines” (2019) </div>
                    <ImageONU src={ONU} />
                </SecondaryContainer>
            </LateralContainer>
            <TerciaryContainer>
                Avaliação da produtividade hídrica <br/> (escala de fazenda) <br/>+ <br/> Avaliação dos impactos associados a escassez hídrica <br/>(bacia hidrográfica)
            </TerciaryContainer>
        </MainContainer>
    )
}

export default RightSide