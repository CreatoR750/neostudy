import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedStore";
import { IOfferCard } from "../../models/offerCardModel";
import { sendSelectedOffer } from "../../store/slice/loanSlice";
import { RootState } from "../../store/types";
import { OfferCard } from "../../ui";
import "./offers.scss";

const Offers = () => {
    const dispatch = useAppDispatch();
    const offersList = useAppSelector((state: RootState) => state.loan.offersList);

    const selectOffer = useCallback((offer: IOfferCard) => {
        dispatch(sendSelectedOffer(offer));
    }, []);

    return (
        <div className="offers">
            {offersList?.map((offer) => (
                <OfferCard key={`${offer.applicationId}${offer.monthlyPayment}`} offer={offer} onSelectClick={() => selectOffer(offer)} />
            ))}
        </div>
    );
};

export default Offers;
