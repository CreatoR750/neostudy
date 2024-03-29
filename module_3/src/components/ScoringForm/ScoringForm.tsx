import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedStore";
import { IScoringValues, ScoringType } from "../../models/scoringModel";
import { useParams } from "react-router-dom";
import { sendScoringForm } from "../../store/slice/loanSlice";
import "./scoringForm.scss";
import { RootState } from "../../store/store";
import { validation } from "./validation";
import { Background, BlurLoader, Button, Input, Select } from "../../ui";

const ScoringForm = () => {
    const { applicationId } = useParams();
    const dispatch = useAppDispatch();
    const isSending = useAppSelector((state: RootState) => state.loan.isSending);

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<IScoringValues>({ mode: "onChange" });

    const onSubmit = async (data: IScoringValues) => {
        const formattedData: ScoringType = {
            gender: data.gender,
            maritalStatus: data.maritalStatus,
            dependentAmount: data.dependentAmount,
            passportIssueDate: data.passportIssueDate,
            passportIssueBranch: data.passportIssueBranch,
            employment: {
                employmentStatus: data.employmentStatus,
                employerINN: data.employerINN,
                salary: data.salary,
                position: data.position,
                workExperienceTotal: data.workExperienceTotal,
                workExperienceCurrent: data.workExperienceCurrent,
            },
        };
        dispatch(sendScoringForm(formattedData, applicationId as string));
    };

    return (
        <Background>
            <form className="scoring-form" onSubmit={handleSubmit(onSubmit)}>
                {isSending && <BlurLoader />}

                <div className="scoring-form__upper">
                    <div className="scoring-form__upper__left">
                        <div className="scoring-form__upper__left__header">
                            <h2>Continuation of the application</h2>
                            <span>Step 2 of 5</span>
                        </div>
                        <div className="scoring-form__upper__left__fields">
                            <Select
                                size="medium"
                                options={["MALE", "FEMALE"]}
                                register={register}
                                name="gender"
                                label="What's your gender"
                                validation={{}}
                                required
                            />
                            <Select
                                size="medium"
                                options={["MARRIED", "DIVORCED", "SINGLE", "WIDOW_WIDOWER"]}
                                register={register}
                                name="maritalStatus"
                                label="Your marital status"
                                validation={{}}
                                required
                            />
                            <Select
                                size="medium"
                                options={[1, 2, 3, 4]}
                                register={register}
                                name="dependentAmount"
                                label="Your number of dependents"
                                validation={validation.dependentAmount}
                                required
                            />
                            <Input
                                size="large"
                                isDirty={dirtyFields.passportIssueDate}
                                placeholder="Select Date and Time"
                                type="text"
                                label="Date of issue of the passport"
                                name={"passportIssueDate"}
                                register={register}
                                validation={validation.passportIssueDate}
                                errors={errors.passportIssueDate}
                                required
                            />
                            <Input
                                size="large"
                                isDirty={dirtyFields.passportIssueBranch}
                                placeholder="000000"
                                type="text"
                                label="Division code"
                                name={"passportIssueBranch"}
                                register={register}
                                validation={validation.passportIssueBranch}
                                errors={errors.passportIssueBranch}
                                required
                            />
                        </div>
                    </div>
                </div>
                <h3 className="scoring-form__contact">Employment</h3>
                <div className="scoring-form__fields">
                    <Select
                        size="medium"
                        options={["UNEMPLOYED", "SELF_EMPLOYED", "EMPLOYED", "BUSINESS_OWNER"]}
                        register={register}
                        name="employmentStatus"
                        label="Your employment status"
                        validation={{}}
                        required
                    />
                    <Input
                        size="medium"
                        isDirty={dirtyFields.employerINN}
                        placeholder="000000000000"
                        type="text"
                        label="Your employer INN"
                        name={"employerINN"}
                        register={register}
                        validation={validation.employerINN}
                        errors={errors.employerINN}
                        required
                    />
                    <Input
                        size="medium"
                        isDirty={dirtyFields.salary}
                        placeholder="For example 100 000"
                        type="text"
                        label="Your salary"
                        name={"salary"}
                        register={register}
                        validation={validation.salary}
                        errors={errors.salary}
                        required
                    />
                    <Select
                        size="medium"
                        options={["WORKER", "MID_MANAGER", "TOP_MANAGER", "OWNER"]}
                        register={register}
                        name="position"
                        label="Your position"
                        required
                    />
                    <Input
                        size="medium"
                        isDirty={dirtyFields.workExperienceTotal}
                        placeholder="For example 10"
                        type="text"
                        label="Your work experience total"
                        name={"workExperienceTotal"}
                        register={register}
                        validation={validation.workExperienceTotal}
                        errors={errors.workExperienceTotal}
                        required
                    />
                    <Input
                        size="medium"
                        isDirty={dirtyFields.workExperienceCurrent}
                        placeholder="For example 2"
                        type="text"
                        label="Your work experience current"
                        name={"workExperienceCurrent"}
                        register={register}
                        validation={validation.workExperienceCurrent}
                        errors={errors.workExperienceCurrent}
                        required
                    />
                </div>
                <div className="scoring-form__button">
                    <Button text="Continue" />
                </div>
            </form>
        </Background>
    );
};

export default ScoringForm;
