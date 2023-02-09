import "./signing.scss";
import Button from "../../ui/Button/Button";
import Checkbox from "../../ui/Checkbox/Checkbox";
import docs from "../../assets/svg/docs.svg";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedStore";
import { signDocuments } from "../../store/slice/loanSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import BlurLoader from "../../ui/BlurLoader/BlurLoader";

const Signing = () => {
    const { applicationId } = useParams();
    const dispatch = useAppDispatch();
    const isSending = useAppSelector((state: RootState) => state.loan.isSending);
    const [isUserAgree, setIsUserAgree] = useState<boolean>(false);

    return (
        <div className="signing">
            {isSending && <BlurLoader />}
            <div className="signing__header">
                <h3>Signing of documents</h3>
                <span>Step 4 of 5</span>
            </div>
            <p>
                Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information
                of a professional participant in the securities market. Information about persons under whose control or significant influence the
                Partner Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to
                a credit history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form
                of consent to the processing of personal data.
            </p>
            <div className="signing__docs">
                <img src={docs} alt="docs" />
                <span>Information on your card</span>
            </div>
            <div className="signing__bottom">
                <Checkbox label="I agree" setIsChecked={setIsUserAgree} checked={isUserAgree} />
                <Button text="Send" disabled={!isUserAgree} onClick={() => dispatch(signDocuments(applicationId as string))} />
            </div>
        </div>
    );
};

export default Signing;
