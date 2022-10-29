import { ImagePDF, LateralContainer, MainContainer, SecondaryContainer } from "./styles"
import PDFImage from '../../../assets/water-use-in-livestock.jpg'
import { Link } from "react-router-dom"

const RightSide = () => {
    return (
        <MainContainer>
            <LateralContainer>
                <SecondaryContainer>
                    <a href="https://www.fao.org/3/ca5685en/ca5685en.pdf">
                        <ImagePDF src={PDFImage} />
                    </a>                    
                </SecondaryContainer>
                <SecondaryContainer>Onu</SecondaryContainer>
            </LateralContainer>
            <SecondaryContainer>Texto</SecondaryContainer>
        </MainContainer>
    )
}

export default RightSide