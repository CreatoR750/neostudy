import "./scoringPage.scss";
import Container from "../../components/Container/Container";
import ScoringForm from "../../components/ScoringForm/ScoringForm";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedStore";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { setCurrentStep } from "../../store/slice/loanSlice";
import { LoanMessage } from "../../ui";

const ScoringPage = () => {
    const dispatch = useAppDispatch();
    const currentStep = useAppSelector((state: RootState) => state.loan.currentStep);

    useEffect(() => {
        if (currentStep === 1) dispatch(setCurrentStep(2));
    }, []);

    return (
        <Container>
            {currentStep === 2 ? (
                <div className="scoring-page">
                    <ScoringForm />
                </div>
            ) : (
                <div className="scoring-page">
                    <LoanMessage title="Wait for a decision on the application" message="The answer will come to your mail within 10 minutes" />
                </div>
            )}
        </Container>
    );
};

export default ScoringPage;
