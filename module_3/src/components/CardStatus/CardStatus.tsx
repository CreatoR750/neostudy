import { useAppSelector } from "../../hooks/useTypedStore";
import { LoanStatusEnum } from "../../models/loanStatusEnum";
import { RootState } from "../../store/types";
import CardDecision from "../CardDecision/CardDecision";
import Form from "../PrescoringForm/PrescoringForm";
import Offers from "../Offers/Offers";
import "./cardStatus.scss";
import BlurLoader from "../../ui/BlurLoader/BlurLoader";

const CardStatus = () => {
    const loanStatus = useAppSelector((state: RootState) => state.loan.loanStatus);
    const isSending = useAppSelector((state: RootState) => state.loan.isSending);
    
    return (
        <div className="card-status">
            {isSending && (
                <BlurLoader/>
            )}
            {loanStatus === LoanStatusEnum.Form && <Form />}
            {loanStatus === LoanStatusEnum.Offers && <Offers />}
            {loanStatus === LoanStatusEnum.Decision && <CardDecision />}
        </div>
    );
};

export default CardStatus;
