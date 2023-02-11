import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedStore";
import { getDocuments, getPaymentList, resetLoan } from "../../store/slice/loanSlice";
import { RootState } from "../../store/store";
import { Background, BlurLoader, Button, Checkbox, Modal, Popup, Spinner, Table } from "../../ui";
import "./tableWrapper.scss";

const columns = ["NUMBER", "DATE", "TOTAL PAYMENT", "INTEREST PAYMENT", "DEBT PAYMENT", "REMAINING DEBT"];

const TableWrapper = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { applicationId } = useParams();
    const isSending = useAppSelector((state: RootState) => state.loan.isSending);
    const paymentList = useAppSelector((state: RootState) => state.loan.paymentList);
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);
    const [isUserAgree, setIsUserAgree] = useState<boolean>(false);

    useEffect(() => {
        if (paymentList === null) dispatch(getPaymentList(applicationId as string));
    }, []);

    return (
        <Background>
            {isSending && <BlurLoader />}
            <div className="table-wrapper">
                <div className="table-wrapper__header">
                    <h3>Payment Schedule</h3>
                    <span>Step 3 of 5</span>
                </div>
                {paymentList ? <Table columns={columns} data={paymentList} /> : <Spinner />}
                <div className="table-wrapper__bottom">
                    <Button type="danger" text="Deny" onClick={() => setIsModalOpened(true)} />
                    <div className="table-wrapper__bottom__checks">
                        <Checkbox setIsChecked={setIsUserAgree} label="I agree with the payment schedule" checked={isUserAgree} />
                        <Button text="Send" disabled={!isUserAgree} onClick={() => dispatch(getDocuments(applicationId as string))} />
                    </div>
                </div>
            </div>
            <Modal
                title="Deny application"
                message="You exactly sure, you want to cancel this application?"
                onClose={() => setIsModalOpened(false)}
                onClick={() => {
                    setIsModalOpened(false);
                    setIsPopupOpened(true);
                }}
                isOpened={isModalOpened}
            />
            <Popup
                title="Deny application"
                message="Your application has been deny!"
                isOpened={isPopupOpened}
                onClose={() => {
                    dispatch(resetLoan());
                    navigate("/");
                    setIsPopupOpened(false);
                }}
            />
        </Background>
    );
};

export default TableWrapper;
