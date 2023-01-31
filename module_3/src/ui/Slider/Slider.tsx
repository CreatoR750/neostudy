import "./slider.scss";
import prev from "../../assets/svg/prevWhite.svg";
import next from "../../assets/svg/nextWhite.svg";
import SliderCard from "../SliderCard/SliderCard";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { INews } from "../../models/newsModel";
import SliderLoader from "../SliderLoader/SliderLoader";
import useWindowSize from "../../hooks/useWindowSize";
import { DataService } from "../../services/data.service";
const loaderArr = [1, 2, 3, 4];
const cardWidth = 400;

const Slider = () => {
    const [values, setValues] = useState<{ length: number; data: INews[] | null }>({ length: 0, data: null });
    const [offset, setOffset] = useState<number>(0);
    const [shift, setShift] = useState<number>(3);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const size = useWindowSize();

    useLayoutEffect(() => {
        if (size.width && size.width > 1300) {
            setShift(3);
        } else {
            setShift(2);
        }
    }, [size]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await DataService.getNews();
        setValues({ length: response.length - shift, data: response });
    };

    const nextHandler = () => {
        if (prevRef.current?.classList.contains("disabled")) {
            prevRef.current.classList.remove("disabled");
        }
        let newOffset = offset + cardWidth;
        if (values.length && newOffset >= cardWidth * values.length) {
            nextRef.current?.classList.add("disabled");
            newOffset = cardWidth * values.length;
        }
        setOffset(newOffset);
    };

    const prevHandler = () => {
        if (nextRef.current && nextRef.current.classList.contains("disabled")) {
            nextRef.current.classList.remove("disabled");
        }
        let newOffset = offset - cardWidth;
        if (prevRef.current && newOffset === 0) {
            prevRef.current.classList.add("disabled");
        }
        setOffset(newOffset);
    };

    return (
        <>
            <div className="slider">
                <div className="slider__wrapper" style={{ left: `${-offset}px` }}>
                    {values.data
                        ? values.data.map((item) => {
                              return (
                                  <SliderCard
                                      key={item.title}
                                      urlToImage={item.urlToImage}
                                      title={item.title}
                                      url={item.url}
                                      description={item.description}
                                  />
                              );
                          })
                        : loaderArr.map((item) => {
                              return <SliderLoader key={item} />;
                          })}
                </div>
            </div>
            {values.data ? (
                <div className="slider__buttons">
                    <button
                        ref={prevRef}
                        className="slider__buttons__prev disabled"
                        onClick={() => {
                            prevHandler();
                        }}
                    >
                        <img src={prev} alt="Prev" />
                    </button>
                    <button
                        ref={nextRef}
                        className="slider__buttons__next"
                        onClick={() => {
                            nextHandler();
                        }}
                    >
                        <img src={next} alt="next" />
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default Slider;
