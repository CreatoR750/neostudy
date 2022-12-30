const slider = document.querySelector(".slider__wrapper");
const prev = document.querySelector(".slider__buttons__prev");
const next = document.querySelector(".slider__buttons__next");
const NEWS_URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=99f1e04ddffc4b4da15ec80bf056a183";
let offset = 0;
let shift;
const cardWidth = 400;
let length;

function updateShift() {
    if (window.innerWidth > 1300) {
        shift = 3;
    } else {
        shift = 2;
    }
}

updateShift();
window.addEventListener("resize", updateShift);

const getData = async () => {
    const response = await fetch(NEWS_URL);
    const data = await response.json();
    length = data.articles.length - shift;
    data.articles.forEach((article) => {
        const div = document.createElement("div");
        div.classList.add("slider__card");
        div.onclick = () => window.open(article.url, "_blank");
        div.innerHTML = `<img class="slider__card__img" src=${article.urlToImage} alt="News image" onerror="this.onerror=null;this.src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png';" />
        <div class="slider__card__title">
            ${article.title}
        </div>
        <div class="slider__card__description">
        ${article.title}
        </div>`;
        slider.appendChild(div);
    });
};

next.addEventListener("click", () => {
    if (prev.classList.contains("disabled")) {
        prev.classList.remove("disabled");
    }
    offset = offset + cardWidth;
    if (offset >= cardWidth * length) {
        next.classList.add("disabled");
        offset = cardWidth * length;
    }
    slider.style.left = -offset + "px";
});

prev.addEventListener("click", () => {
    if (next.classList.contains("disabled")) {
        next.classList.remove("disabled");
    }
    offset = offset - cardWidth;
    if (offset <= 0) {
        prev.classList.add("disabled");
    }
    slider.style.left = -offset + "px";
});

void getData();
