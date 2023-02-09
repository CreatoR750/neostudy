import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StepsEnum } from "../models/stepsEnum";
import { RootState } from "../store/store";
import { useAppSelector } from "./useTypedStore";

const navigateMap: Record<StepsEnum, (applicationId: number | null) => string> = {
    [StepsEnum.Step1]: () => "/loan",
    [StepsEnum.Step2]: (applicationId) => `/loan/${applicationId}`,
    [StepsEnum.Step3]: (applicationId) => `/loan/${applicationId}/document`,
    [StepsEnum.Step4]: (applicationId) => `/loan/${applicationId}/document/sign`,
    [StepsEnum.Step5]: (applicationId) => `/loan/${applicationId}/code`,
};

const useCurrentStepNavigate = () => {
    const navigate = useNavigate();
    const currentStep = useAppSelector((state: RootState) => state.loan.currentStep);
    const applicationId = useAppSelector((state: RootState) => state.loan.applicationId);

    const navigateToCurrentStep = useCallback(() => {
        navigate(navigateMap[currentStep](applicationId));
    }, [currentStep, applicationId]);

    return navigateToCurrentStep;
};

export default useCurrentStepNavigate;
