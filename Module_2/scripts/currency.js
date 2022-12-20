const container = document.getElementById("exchange");
const currency = ["USD", "EUR", "CNH", "IDR", "TWD", "THB"];

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "5ed9ebe12bmsh7832b254a6a1863p1c18fdjsn143dca031c08",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
};

const request = async (currency) => {
    const response = await fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${currency}&to=RUB&q=1`, options);
    const data = await response.json();
    return data.toFixed(2);
};

const exchangeCurrency = async (currencyArr) => {
    container.innerHTML = "";
    await Promise.all(
        currencyArr.map(async (curr) => {
            try {
                const value = await request(curr);
                const div = document.createElement("div");
                div.classList.add("course");
                div.innerHTML = `<span class="course__item">${curr}:</span><span class="course__value">${value}</span>`;
                container.appendChild(div);
            } catch (error) {
                console.log(error);
            }
        })
    );
};

exchangeCurrency(currency);

// Для примера обновление валют каждые 15 секунд
setInterval(() => {
    exchangeCurrency(currency);
}, 15000);
