import "./prescoringForm.scss";
import { useForm } from "react-hook-form";
import { IPrescoringValues } from "../../models/prescoringModel";
import { sendPrescoringForm } from "../../store/slice/loanSlice";
import { useAppDispatch} from "../../hooks/useTypedStore";
import { validation } from "./validation";
import { Background, Button, Input, Select } from "../../ui";

const PrescoringForm = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<IPrescoringValues>({ mode: "onChange" });

    const onSubmit = (data: IPrescoringValues) => {
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
                            validation={validation.amount}
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
                        validation={validation.lastName}
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
                        validation={validation.firstName}
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
                        validation={validation.middleName}
                        errors={errors.middleName}
                        required
                    />
                    <Select
                        type="date"
                        options={[6, 12, 18, 24]}
                        register={register}
                        name="term"
                        label="Select term"
                        validation={validation.term}
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
                        validation={validation.email}
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
                        validation={validation.birthDate}
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
                        validation={validation.passportSeries}
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
                        validation={validation.passportNumber}
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
