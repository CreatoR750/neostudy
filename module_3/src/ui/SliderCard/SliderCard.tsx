import { FC, memo } from "react";
import { INews } from "../../models/newsModel";
import "./sliderCard.scss";
import { filterDescription } from "./utils";

export const SliderCard: FC<INews> = memo(({ url, urlToImage, title, description }) => {
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
            <div className="slider-card__description">{filterDescription(description) || "Ooops! This new has broken description"}</div>
        </div>
    );
});
