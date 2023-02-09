import { useAppDispatch } from "../../hooks/useTypedStore";
import { resetLoan } from "../../store/slice/loanSlice";
import Button from "../../ui/Button/Button";
import "./cardDecision.scss";

const CardDecision = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="card-decision">
            <h3>The preliminary decision has been sent to your email.</h3>
            <span>In the letter you can get acquainted with the preliminary decision on the credit card.</span>
            <Button
                text="Get another card"
                onClick={() => {
                    dispatch(resetLoan());
                }}
            />
        </div>
    );
};

export default CardDecision;
