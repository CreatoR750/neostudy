import Container from "../../components/Container/Container";
import Signing from "../../components/Signing/Signing";
import { useAppSelector } from "../../hooks/useTypedStore";
import { RootState } from "../../store/store";
import LoanMessage from "../../ui/LoanMessage/LoanMessage";
import "./documentSigning.scss";

const DocumentSigning = () => {
    const currentStep = useAppSelector((state: RootState) => state.loan.currentStep);
    return (
        <Container>
            <div className="document-signing">
                {currentStep === 4 ? (
                    <Signing />
                ) : (
                    <LoanMessage
                        title="Documents have been successfully signed and sent for approval"
                        message="Within 10 minutes you will be sent a PIN code to your email for confirmation"
                    />
                )}
            </div>
        </Container>
    );
};

export default DocumentSigning;
