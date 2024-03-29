import "./cardInfo.scss";
import card5 from "../../assets/img/card5.png";
import { useAppSelector } from "../../hooks/useTypedStore";
import { RootState } from "../../store/types";
import useCurrentStepNavigate from "../../hooks/useCurrentStepNavigate";
import { StepsEnum } from "../../models/stepsEnum";
import { Tooltip } from "../../ui";

const CardInfo = () => {
    const navigateToCurrentStep = useCurrentStepNavigate();
    const currentStep = useAppSelector((state: RootState) => state.loan.currentStep);

    return (
        <div className="card-info">
            <div className="card-info__left">
                <h2>Platinum digital credit card</h2>
                <span className="card-info__left__sub">
                    Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and transfers without commission and interest.
                </span>
                <div className="card-info__left__terms">
                    <div className="term">
                        <Tooltip content="When repaying the full debt up to 160 days." direction="top">
                            <span className="term__title">Up to 160 days</span>
                        </Tooltip>
                        <span className="term__sub">No percent</span>
                    </div>

                    <div className="term">
                        <Tooltip content="Over the limit willaccrue percent" direction="top">
                            <span className="term__title">Up to 600 000 ₽</span>
                        </Tooltip>
                        <span className="term__sub">Credit limit</span>
                    </div>
                    <div className="term">
                        <Tooltip content="Promotion valid until December 31, 2022." direction="top">
                            <span className="term__title">0 ₽</span>
                        </Tooltip>
                        <span className="term__sub">Card service is free</span>
                    </div>
                </div>
                <a href="#get-card" className="button" onClick={() => navigateToCurrentStep()}>
                    {currentStep === StepsEnum.Step1 ? "Apply for card" : "Continue registration"}
                </a>
            </div>
            <div className="card-info__right">
                <img src={card5} alt="Card" />
            </div>
        </div>
    );
};

export default CardInfo;
