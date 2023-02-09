import axios from "axios";
import { IOfferCard } from "../models/offerCardModel";
import { IPrescoringValues } from "../models/prescoringModel";
import { ScoringType } from "../models/scoringModel";

const BASE_URL = "http://localhost:8080/";
const NEWS_URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=99f1e04ddffc4b4da15ec80bf056a183";
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "5ed9ebe12bmsh7832b254a6a1863p1c18fdjsn143dca031c08",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
};

const getNews = async () => {
    const response = await axios.get(NEWS_URL);
    return response.data.articles;
};

const getCurrency = async (currency: string) => {
    const response = await axios.get(`https://currency-exchange.p.rapidapi.com/exchange?from=${currency}&to=RUB&q=1`, options);
    return response.data.toFixed(2);
};

const subscribeOnNews = async (email: string) => {
    return await axios.post(BASE_URL + "email", { email: email });
};

const sendContactInfo = async (loan: IPrescoringValues) => {
    return await axios.post(BASE_URL + "application", loan);
};

const applyApplication = async (offer: IOfferCard) => {
    return await axios.post(BASE_URL + "application/apply", offer);
};

const registrateApplication = async (offer: ScoringType, applicationId: string) => {
    return await axios.put(BASE_URL + `application/registration/${applicationId}`, offer);
};

const getPaymentList = async (applicationId: string) => {
    return await axios.get(BASE_URL + `admin/application/${applicationId}`);
};

const createDocuments = async (applicationId: string) => {
    return await axios.post(BASE_URL + `document/${applicationId}`);
};

const signDocuments = async (applicationId: string) => {
    return await axios.post(BASE_URL + `document/${applicationId}/sign`);
};

const sendCode = async (applicationId: string, code: string) => {
    return await axios.post(BASE_URL + `document/${applicationId}/sign/code`, JSON.stringify(code), {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const DataService = {
    getNews,
    getCurrency,
    subscribeOnNews,
    sendContactInfo,
    applyApplication,
    registrateApplication,
    getPaymentList,
    createDocuments,
    signDocuments,
    sendCode,
};
