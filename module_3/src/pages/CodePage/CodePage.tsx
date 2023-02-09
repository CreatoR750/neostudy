import "./codePage.scss";
import Container from "../../components/Container/Container";
import CodeInput from "../../ui/CodeInput/CodeInput";
import { useAppSelector } from "../../hooks/useTypedStore";
import { RootState } from "../../store/store";
import LoanMessage from "../../ui/LoanMessage/LoanMessage";
import useCurrentStepNavigate from "../../hooks/useCurrentStepNavigate";

const CodePage = () => {
    const currentStep = useAppSelector((state: RootState) => state.loan.currentStep);
    const navigateToCurrentStep = useCurrentStepNavigate();
    
    return (
        <Container>
            <div className="code-page">
                {currentStep === 5 ? (
                    <CodeInput numberOfInputs={4} />
                ) : (
                    <LoanMessage
                        image={true}
                        buttonText={"View other offers of our bank"}
                        onClick={() => navigateToCurrentStep()}
                        title="Congratulations! You have completed your new credit card."
                        message="Your credit card will arrive soon. Thank you for choosing us!"
                    />
                )}
            </div>
        </Container>
    );
};

export default CodePage;
