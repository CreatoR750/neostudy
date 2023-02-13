import "./codePage.scss";
import Container from "../../components/Container/Container";
import { useAppSelector } from "../../hooks/useTypedStore";
import { RootState } from "../../store/store";
import useCurrentStepNavigate from "../../hooks/useCurrentStepNavigate";
import { CodeInput, LoanMessage } from "../../ui";

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
