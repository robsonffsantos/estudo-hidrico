import Header from "../components/header"
import Footer from "../components/footer"
import { MainContainer } from "./style"

const Home = () => {
    return (
        <MainContainer>
            <Header />
            <div>
                Content
            </div>
            <Footer />
        </MainContainer>
    )
}

export default Home