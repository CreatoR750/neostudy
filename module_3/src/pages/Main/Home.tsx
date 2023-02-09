import Container from "../../components/Container/Container";
import Exchange from "../../components/Exchange/Exchange";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";
import Support from "../../components/Support/Support";
import "./home.scss";

const Home = () => {
    return (
        <Container>
            <Hero />
            <Features />
            <Exchange />
            <Services />
            <News />
            <Support />
        </Container>
    );
};

export default Home;
