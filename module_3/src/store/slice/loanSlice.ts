import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoanStatusEnum } from "../../models/loanStatusEnum";
import { IOfferCard } from "../../models/offerCardModel";
import { IPayment } from "../../models/paymentModel";
import { IPrescoringValues } from "../../models/prescoringModel";
import { ScoringType } from "../../models/scoringModel";
import { StepsEnum } from "../../models/stepsEnum";
import { DataService } from "../../services/data.service";
import { AppDispatch } from "../store";

interface ILoanState {
    isSending: boolean;
    currentStep: StepsEnum;
    loanStatus: LoanStatusEnum;
    offersList: IOfferCard[] | null;
    paymentList: IPayment[] | null;
    error: string | null;
    applicationId: number | null;
}

const initial: ILoanState = {
    currentStep: StepsEnum.Step1,
    isSending: false,
    loanStatus: LoanStatusEnum.Form,
    offersList: null,
    paymentList: null,
    error: null,
    applicationId: null,
};

const slice = createSlice({
    name: "loan",
    initialState: initial,
    reducers: {
        setIsSending: (state, action: PayloadAction<boolean>) => {
            state.isSending = action.payload;
        },

        setCurrentStep: (state, action: PayloadAction<StepsEnum>) => {
            state.currentStep = action.payload;
        },

        sendFormSuccess: (state, action: PayloadAction<IOfferCard[]>) => {
            state.offersList = action.payload;
            state.applicationId = action.payload[0].applicationId;
            state.loanStatus = LoanStatusEnum.Offers;
            state.isSending = false;
        },

        sendOfferSuccess: (state) => {
            state.loanStatus = LoanStatusEnum.Decision;
            state.isSending = false;
        },

        resetLoan: () => initial,

        setPaymentListSuccess: (state, action: PayloadAction<IPayment[]>) => {
            state.currentStep = StepsEnum.Step3;
            state.paymentList = action.payload;
        },

        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export default slice.reducer;

export const { sendFormSuccess, setIsSending, sendOfferSuccess, resetLoan, setCurrentStep, setPaymentListSuccess, setError } = slice.actions;

export const sendPrescoringForm = (data: IPrescoringValues) => async (dispatch: AppDispatch) => {
    dispatch(setIsSending(true));
    try {
        const response = await DataService.sendContactInfo(data);
        dispatch(sendFormSuccess(response.data));
    } catch (e) {
        dispatch(setIsSending(false));
        console.log((e as Error).message);
    }
};

export const sendScoringForm = (data: ScoringType, applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsSending(true));
    try {
        await DataService.registrateApplication(data, applicationId);
        dispatch(setCurrentStep(3));
        dispatch(setIsSending(false));
    } catch (e) {
        dispatch(setIsSending(false));
        console.log((e as Error).message);
    }
};

export const sendSelectedOffer = (data: IOfferCard) => async (dispatch: AppDispatch) => {
    dispatch(setIsSending(true));
    try {
        await DataService.applyApplication(data);
        dispatch(sendOfferSuccess());
    } catch (e) {
        dispatch(setIsSending(false));
        console.log((e as Error).message);
    }
};

export const getPaymentList = (applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsSending(true));
    try {
        const response = await DataService.getPaymentList(applicationId);
        dispatch(setPaymentListSuccess(response.data.credit.paymentSchedule));
        dispatch(setIsSending(false));
    } catch (e) {
        dispatch(setIsSending(false));
        console.log((e as Error).message);
    }
};

export const getDocuments = (applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsSending(true));
    try {
        await DataService.createDocuments(applicationId);
        dispatch(setCurrentStep(StepsEnum.Step4));
        dispatch(setIsSending(false));
    } catch (e) {
        dispatch(setIsSending(false));
        console.log((e as Error).message);
    }
};

export const signDocuments = (applicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsSending(true));
    try {
        await DataService.signDocuments(applicationId);
        dispatch(setCurrentStep(StepsEnum.Step5));
        dispatch(setIsSending(false));
    } catch (e) {
        dispatch(setIsSending(false));
        console.log((e as Error).message);
    }
};

export const sendCode = (applicationId: string, code: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsSending(true));
    try {
        await DataService.sendCode(applicationId, code);
        dispatch(resetLoan());
    } catch (e) {
        dispatch(setIsSending(false));
        dispatch(setError("Invalid confirmation code"));
        console.log((e as Error).message);
    }
};
