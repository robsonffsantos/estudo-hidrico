import Header from "../components/header"
import Footer from "../components/footer"
import { MainContainer } from "./style"
import Content from "../content"

const Home = () => {
    return (
        <MainContainer>
            <Header />
                <Content />
            <Footer />
        </MainContainer>
    )
}

export default Home