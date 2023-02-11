import "./offerCard.scss";
import offerImage from "../../assets/img/offerImage.png";
import errorIcon from "../../assets/svg/error.svg";
import successIcon from "../../assets/svg/success.svg";
import { FC, memo } from "react";
import { IOfferCard } from "../../models/offerCardModel";
import { Button } from "..";

interface IOfferCardProps {
    onSelectClick: (offer: IOfferCard) => void;
    offer: IOfferCard;
}

export const OfferCard: FC<IOfferCardProps> = memo(({ onSelectClick, offer }) => {
    return (
        <div className="offer-card">
            <div className="offer-card__info">
                <img className="offer-card__info__image" src={offerImage} alt="" />
                <span>Requested amount: {offer.requestedAmount}</span>
                <span>Total amount: {offer.totalAmount} ₽</span>
                <span>For {offer.term} months</span>
                <span>Monthly payment: {offer.monthlyPayment} ₽</span>
                <span>Your rate: {offer.rate}%</span>
                <span>
                    Insurance included <img src={offer.isInsuranceEnabled ? successIcon : errorIcon} alt="" />
                </span>
                <span>
                    Salary client <img src={offer.isSalaryClient ? successIcon : errorIcon} alt="" />
                </span>
            </div>
            <Button text="Select" onClick={() => onSelectClick(offer)} />
        </div>
    );
});
