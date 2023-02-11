import Container from "../../components/Container/Container";
import TableWrapper from "../../components/Table/TableWrapper";
import { useAppSelector } from "../../hooks/useTypedStore";
import { RootState } from "../../store/store";
import { LoanMessage } from "../../ui";
import "./payment.scss";

const Payment = () => {
    const currentStep = useAppSelector((state: RootState) => state.loan.currentStep);
    return (
        <Container>
            <div className="payment">
                {currentStep === 3 ? (
                    <TableWrapper />
                ) : (
                    <LoanMessage title="Documents are formed" message="Documents for signing will be sent to your email" />
                )}
            </div>
        </Container>
    );
};

export default Payment;
