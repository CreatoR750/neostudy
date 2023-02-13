import { FC } from "react";
import "./loanMessage.scss";
import offerImage from "../../assets/img/offerImage.png";
import { Button } from "..";

interface ILoanMessageProps {
    title: string;
    message: string;
    image?: boolean;
    buttonText?: string;
    onClick?: () => void;
}

export const LoanMessage: FC<ILoanMessageProps> = ({ title, message, image, buttonText, onClick }) => {
    return (
        <div className="loan-message">
            {image && <img src={offerImage} alt="Offer" />}
            <h2>{title}</h2>
            <span>{message}</span>
            {buttonText && <Button text={buttonText} onClick={() => onClick!()} />}
        </div>
    );
};

