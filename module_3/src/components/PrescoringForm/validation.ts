import { datePattern, emailPattern } from "../../helpers/validationValues";
import { validateDate } from "./utils";

export const validation = {
    amount: {
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
    },
    lastName: { required: "Enter you last name" },
    firstName: { required: "Enter you first name" },
    middleName: { required: "Enter you middle name" },
    term: { valueAsNumber: true },
    email: {
        required: "Enter email",
        pattern: {
            value: emailPattern,
            message: "invalid email address",
        },
    },

    birthDate: {
        required: "Enter date",
        validate: validateDate,
        pattern: {
            value: datePattern,
            message: "invalid date",
        },
    },
    passportSeries: {
        required: "Enter passport series",
        pattern: {
            value: /^[0-9]{4}$/,
            message: "The series must be 4 digits",
        },
    },
    passportNumber: {
        required: "Enter passport number",
        pattern: {
            value: /^[0-9]{6}$/,
            message: "The series must be 6 digits",
        },
    },
};
