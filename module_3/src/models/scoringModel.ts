export interface IScoringValues {
    gender: "MALE" | "FEMALE";
    maritalStatus: "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER";
    dependentAmount: number;
    passportIssueDate: string;
    passportIssueBranch: string;
    employmentStatus: "UNEMPLOYED" | "SELF_EMPLOYED" | "EMPLOYED" | "BUSINESS_OWNER";
    employerINN: number | string;
    salary: number;
    position: "WORKER" | "MID_MANAGER" | "TOP_MANAGER" | "OWNER";
    workExperienceTotal: number;
    workExperienceCurrent: number;
}

type Employment = Pick<IScoringValues, "employmentStatus" | "employerINN" | "salary" | "position" | "workExperienceTotal" | "workExperienceCurrent">;

export type ScoringType = {
    gender: "MALE" | "FEMALE";
    maritalStatus: "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER";
    dependentAmount: number;
    passportIssueDate: string;
    passportIssueBranch: string;
    employment: Employment;
    account?: string;
};
