import { datePattern } from "../../helpers/validationValues";
import { validateDate } from "./utils";

export const validation = {
    dependentAmount: {
        valueAsNumber: true,
    },
    passportIssueDate: {
        required: "Enter date",
        validate: validateDate,
        pattern: {
            value: datePattern,
            message: "Invalid date",
        },
    },
    passportIssueBranch: {
        required: "Enter division code",
        pattern: {
            value: /^[0-9]{6}$/,
            message: "The code must be 6 digits",
        },
    },
    employerINN: {
        required: "Enter employer INN",
        pattern: {
            value: /^[0-9]{12}$/,
            message: "The INN must be 12 digits",
        },
    },
    salary: {
        required: "Enter your salary",
        pattern: {
            value: /^\d+$/,
            message: "The salary must be digits",
        },
    },
    workExperienceTotal: {
        required: "Enter your total work experience ",
        maxLength: 2,
        pattern: {
            value: /^\d+$/,
            message: "The work experience must be 2 digits",
        },
    },
    workExperienceCurrent: {
        required: "Enter your current work experience",
        maxLength: 2,
        pattern: {
            value: /^\d+$/,
            message: "The current work experience  must be 2 digits",
        },
    },
};
