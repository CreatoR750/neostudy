import Slider from "../../ui/Slider/Slider";
import "./news.scss";

const News = () => {
    return (
        <section className="news">
            <div className="news__text">
                <h2 className="news__text__title">Current news from the world of finance</h2>
                <span className="news__text__subtitle">
                    We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.
                </span>
            </div>
            <div className="news__container">
                <Slider />
            </div>
        </section>
    );
};

export default News;
