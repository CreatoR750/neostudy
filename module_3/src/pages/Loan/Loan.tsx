import AboutCard from "../../components/AboutCard/AboutCard";
import CardInfo from "../../components/CardInfo/CardInfo";
import Cashback from "../../components/Cashback/Cashback";
import Container from "../../components/Container/Container";
import FAQ from "../../components/FAQ/FAQ";
import GetCard from "../../components/GetCard/GetCard";
import Rates from "../../components/Rates/Rates";
import { Tab, TabsWrapper } from "../../ui";

const Loan = () => {
    return (
        <Container>
            <CardInfo />
            <TabsWrapper>
                <Tab name="About card" >
                    <AboutCard />
                </Tab>
                <Tab name="Rates and Conditions">
                    <Rates />
                </Tab>
                <Tab name="Cashback" >
                    <Cashback />
                </Tab>
                <Tab name="FAQ">
                    <FAQ />
                </Tab>
            </TabsWrapper>
            <GetCard />
        </Container>
    );
};

export default Loan;
