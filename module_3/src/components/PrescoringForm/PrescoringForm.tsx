import "./prescoringForm.scss";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useForm } from "react-hook-form";
import Select from "../../ui/Select/Select";
import { IPrescoringValues } from "../../models/prescoringModel";
import { sendPrescoringForm } from "../../store/slice/loanSlice";
import Background from "../../ui/Background/Background";
import { validateDate } from "./utils";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedStore";
import { RootState } from "../../store/store";

const PrescoringForm = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<IPrescoringValues>({ mode: "onChange" });

    const onSubmit = async (data: IPrescoringValues) => {
        dispatch(sendPrescoringForm(data));
    };

    return (
        <Background>
            <form className="prescoring-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="prescoring-form__upper">
                    <div className="prescoring-form__upper__left">
                        <div className="prescoring-form__upper__left__header">
                            <h2>Customize your card</h2>
                            <span>Step 1 of 5</span>
                        </div>
                        <Input
                            isDirty={dirtyFields.amount}
                            placeholder="99999"
                            type="number"
                            label="Amount"
                            name={"amount"}
                            register={register}
                            validation={{
                                required: "Enter amount",
                                valueAsNumber: true,
                                min: {
                                    value: 14999,
                                    message: "Incorrect amount",
                                },
                                max: {
                                    value: 600001,
                                    message: "Incorrect amount",
                                },
                            }}
                            errors={errors.amount}
                            required
                        />
                    </div>
                    <div className="prescoring-form__upper__right">
                        <span>You have chosen the amount</span>
                    </div>
                </div>
                <h3 className="prescoring-form__contact">Contact Information</h3>
                <div className="prescoring-form__fields">
                    <Input
                        isDirty={dirtyFields.lastName}
                        placeholder="Last Name"
                        type="text"
                        label="Your last name"
                        name={"lastName"}
                        register={register}
                        validation={{ required: "Enter you last name" }}
                        errors={errors.lastName}
                        required
                    />
                    <Input
                        isDirty={dirtyFields.firstName}
                        placeholder="First Name"
                        type="text"
                        label="Your first name"
                        name={"firstName"}
                        register={register}
                        validation={{ required: "Enter you first name" }}
                        errors={errors.firstName}
                        required
                    />
                    <Input
                        isDirty={dirtyFields.middleName}
                        placeholder="Patronymic"
                        type="text"
                        label="Your patronymic"
                        name={"middleName"}
                        register={register}
                        validation={{ required: "Enter you middle name" }}
                        errors={errors.middleName}
                        required
                    />
                    <Select
                        type="date"
                        options={[6, 12, 18, 24]}
                        register={register}
                        name="term"
                        label="Select term"
                        validation={{
                            valueAsNumber: true,
                        }}
                        required
                    />
                    <Input
                        isDirty={dirtyFields.email}
                        placeholder="example@example.ru"
                        required
                        type="text"
                        label="Your email"
                        name={"email"}
                        register={register}
                        validation={{
                            required: "Enter email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                            },
                        }}
                        errors={errors.email}
                    />
                    <Input
                        isDirty={dirtyFields.birthdate}
                        required
                        placeholder="Select Date and Time"
                        type="text"
                        label="Your date of birth"
                        name={"birthdate"}
                        register={register}
                        validation={{
                            required: "Enter date",
                            validate: validateDate,
                            pattern: {
                                value: /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/i,
                                message: "invalid date",
                            },
                        }}
                        errors={errors.birthdate}
                    />
                    <Input
                        isDirty={dirtyFields.passportSeries}
                        placeholder="0000"
                        required
                        type="text"
                        label="Your passport series"
                        name={"passportSeries"}
                        register={register}
                        validation={{
                            required: "Enter passport series",
                            pattern: {
                                value: /^[0-9]{4}$/,
                                message: "The series must be 4 digits",
                            },
                        }}
                        errors={errors.passportSeries}
                    />

                    <Input
                        isDirty={dirtyFields.passportNumber}
                        placeholder="000000"
                        required
                        type="text"
                        label="Your passport number"
                        name={"passportNumber"}
                        register={register}
                        validation={{
                            required: "Enter passport number",
                            pattern: {
                                value: /^[0-9]{6}$/,
                                message: "The series must be 6 digits",
                            },
                        }}
                        errors={errors.passportNumber}
                    />
                </div>
                <div className="prescoring-form__button">
                    <Button text="Continue" />
                </div>
            </form>
        </Background>
    );
};

export default PrescoringForm;
