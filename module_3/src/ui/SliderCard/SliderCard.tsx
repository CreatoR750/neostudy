import { FC, memo } from "react";
import { INews } from "../../models/newsModel";
import "./sliderCard.scss";
import { filterDescription } from "./utils";

const SliderCard: FC<INews> = ({ url, urlToImage, title, description }) => {
    return (
        <div className="slider-card" onClick={() => window.open(url, "_blank")}>
            <img
                className="slider-card__img"
                src={urlToImage}
                alt="News"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png";
                }}
            />
            <div className="slider-card__title">{title}</div>
            <div className="slider-card__description">{filterDescription(description)}</div>
        </div>
    );
};

export default memo(SliderCard);
